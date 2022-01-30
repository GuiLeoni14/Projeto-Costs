import './styles.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '../../layout/Container';
import ProjectForm from '../../project/ProjectForm';
import Loading from '../../layout/Loading';
import Li from '../../Li';
import ProjectFormButton from '../../Buttons/ProjectFormButton';
export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
            });
    }, [id]);
    const handleSubmit = (project) => {
        // console.log(project);
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
            });
    };
    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm);
    };
    return (
        <section className="s_project">
            <Container>
                <div className="main_project">
                    {project.name ? (
                        <div className="project">
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
                                    handleSubmit={handleSubmit}
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
                    ) : (
                        <Loading />
                    )}
                </div>
            </Container>
        </section>
    );
}
