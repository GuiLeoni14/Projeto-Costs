import './styles.scss';
import { parse, v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '../../layout/Container';
import ProjectForm from '../../project/ProjectForm';
import Loading from '../../layout/Loading';
import Li from '../../Li';
import Message from '../../layout/Message';
import ProjectFormButton from '../../Buttons/ProjectFormButton';
import ServiceForm from '../../service/ServiceForm';
import ServiceCard from '../../service/ServiceCard';
export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState(null);
    const [typeMessage, setTypeMessage] = useState(null);
    console.log('Estou no project');
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
                setServices(data.services);
            });
    }, [id]);
    const handleEditPost = (project) => {
        // console.log(project);
        setMessage(''); // a mensagem não havia sido exibida após atualizações seguidos pois o componente não alterou seu state
        if (project.budget < project.cost) {
            setMessage('Custo do projeto insuficiente');
            setTypeMessage('error');
            setShowProjectForm(false);
            return;
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setProject(data);
                setServices(data.services);
                setMessage('Projeto atualizado com sucesso!');
                setTypeMessage('success');
                setShowProjectForm(false);
            })
            .catch((err) => console.log(err));
    };
    const removeService = (id, cost) => {
        setMessage('');
        console.log(cost);
        const servicesUpdated = project.services.filter((service) => service.id !== id);
        const projectUpdated = project;
        projectUpdated.services = servicesUpdated;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated);
                setServices(servicesUpdated);
                setMessage('Serviço removido com sucesso!');
                setTypeMessage('success');
            })
            .catch((err) => console.log(err));
    };
    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    };
    const toggleServiceForm = () => {
        setShowServiceForm(!showServiceForm);
    };
    const createService = (service) => {
        console.log('Estou no createService');
        // last service
        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);
        // maximum value validation
        console.log(newCost);
        console.log(project.budget);
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!');
            setTypeMessage('error');
            project.services.pop();
            // setMessage('');
            return false;
        }
        project.cost = newCost;
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setServices(data.services);
                setShowServiceForm(!showServiceForm);
                setMessage('Serviço adicionado com sucesso!');
                setTypeMessage('success');
            })
            .catch((err) => console.log(err));
    };
    return (
        <section className="s_project">
            <Container>
                <div className="main_project">
                    {project.name ? (
                        <>
                            <div className="project">
                                {message && <Message textMessage={message} type={typeMessage} />}
                                <div className="text">
                                    <h1>{project.name}</h1>
                                    <ProjectFormButton
                                        toggleProjectForm={toggleProjectForm}
                                        text={!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                                    />
                                </div>
                                {showProjectForm ? (
                                    <ProjectForm
                                        btnText="Atualizar projeto"
                                        projectData={project}
                                        handleSubmit={handleEditPost}
                                    />
                                ) : (
                                    <div className="project_info">
                                        <ul>
                                            <Li name="Categoria" attribute={project.category.name} />
                                            <Li name="Total orçamento" attribute={project.budget} />
                                            <Li name="Total utilizado" attribute={project.cost} />
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="service">
                                <div className="main_service_form">
                                    <div className="title">
                                        <h2>Adicione um serviço:</h2>
                                        <ProjectFormButton
                                            toggleProjectForm={toggleServiceForm}
                                            text={!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                                        />
                                    </div>
                                    <div className="info">
                                        {showServiceForm && (
                                            <ServiceForm
                                                textButton="Cadastrar serviço"
                                                handleSubmit={createService}
                                                projectData={project}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="main_service_card">
                                    <h2>Serviços</h2>
                                    <div className="item">
                                        {services.length > 0 ? (
                                            services.map((service) => (
                                                <ServiceCard
                                                    id={service.id}
                                                    name={service.name}
                                                    cost={service.cost}
                                                    description={service.description}
                                                    key={service.id}
                                                    handleRemove={removeService}
                                                />
                                            ))
                                        ) : (
                                            <p>Não há serviços</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Loading />
                    )}
                </div>
            </Container>
        </section>
    );
}
