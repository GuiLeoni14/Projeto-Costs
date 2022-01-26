import Container from '../../layout/Container';
import './styles.scss';
import ProjectForm from '../../project/ProjectForm';
export default function NewProject() {
    return (
        <section className="s_new_project">
            <Container>
                <div className="main_new_project">
                    <div className="text">
                        <h1>Criar Projeto</h1>
                        <p>Crie seu projeto para depois adicionar o serviço</p>
                        <ProjectForm btnText="Criar Projeto" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
