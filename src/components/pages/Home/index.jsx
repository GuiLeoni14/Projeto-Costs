import Container from '../../layout/Container';
import './styles.scss';
export default function Home() {
    return (
        <section className="s-home">
            <Container customClass="min_height">
                <div className="main-home">
                    <h1>Home</h1>
                </div>
            </Container>
        </section>
    );
}
