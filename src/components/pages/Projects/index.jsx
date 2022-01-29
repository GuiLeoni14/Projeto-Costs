import Container from '../../layout/Container';
import Message from '../../layout/Message';
import Loading from '../../layout/Loading';
import { LinkButton } from '../../Buttons/LinkButton';
import { useLocation } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import ProjectCard from '../../project/ProjectCard';
export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
        console.log(message);
    }
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('http://localhost:5000/projects');
            const data = await response.json();
            setProjects(data);
            setRemoveLoading(true);
        };
        fetchApi();
    }, []);
    return (
        <section className="s_projects">
            <Container>
                <div className="main_projects">
                    <div className="text">
                        <h1>Meus Projetos</h1>
                        <LinkButton to="/newproject" textButton="Novo Projeto" />
                    </div>
                    {message && <Message type="success" textMessage={message} />}
                    <div className="projects">
                        {projects.length > 0 &&
                            projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    budget={project.budget}
                                    category={project.category.name}
                                    name={project.name}
                                />
                            ))}
                        {!removeLoading && <Loading />}
                        {removeLoading && projects.length === 0 && <p>Não há projetos cadastrados</p>}
                    </div>
                </div>
            </Container>
        </section>
    );
}
