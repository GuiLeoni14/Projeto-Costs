import Container from '../../layout/Container';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import ProjectForm from '../../project/ProjectForm';
export default function NewProject() {
    const navigate = useNavigate();
    async function createPost(project) {
        project.cost = 0;
        project.services = [];
        await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        });
        navigate('/projects', { message: 'Projeto criado com sucesso' });
    }
    return (
        <section className="s_new_project">
            <Container>
                <div className="main_new_project">
                    <div className="text">
                        <h1>Criar Projeto</h1>
                        <p>Crie seu projeto para depois adicionar o serviço</p>
                        <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
