import Container from '../../layout/Container';
import Message from '../../layout/Message';
import { useLocation } from 'react-router-dom';
import './styles.scss';
export default function Projects() {
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
        console.log(message);
    }
    console.log('mensagem' + message);
    return (
        <section className="s_projects">
            <Container customClass="min_height">
                <div className="main_projects">
                    <h1>Meus Projetos</h1>
                    {message && <Message type="success" textMessage={message} />}
                </div>
            </Container>
        </section>
    );
}
