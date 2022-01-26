import { Link } from 'react-router-dom';
import Container from '../Container';
import logo from '../../../assets/img/costs_logo.png';
import './styles.scss';
export default function Navbar() {
    return (
        <header>
            <Container>
                <nav>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Projetos</Link>
                        </li>
                        <li>
                            <Link to="/company">Empresa</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
