import Container from '../../layout/Container';
import savings from '../../../assets/img/savings.svg';
import './styles.scss';
import { LinkButton } from '../../layout/Buttons/LinkButton';
export default function Home() {
    return (
        <section className="s-home">
            <Container customClass="min_height">
                <div className="main-home">
                    <div className="text">
                        <h1>
                            Bem vindo ao <span>Costs</span>
                        </h1>
                        <p>Comece a gerenciar seus projetos agora mesmo!</p>
                        <LinkButton to="/newproject" textButton="Criar Projeto" />
                        <img src={savings} alt="costs" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
