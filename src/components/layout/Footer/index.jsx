import Container from '../Container';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './styles.scss';
export default function footer() {
    return (
        <footer>
            <Container>
                <div className="main_footer">
                    <nav>
                        <ul>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaLinkedin />
                            </li>
                        </ul>
                    </nav>
                    <p>
                        <span>Costs</span> &copy; 2022
                    </p>
                </div>
            </Container>
        </footer>
    );
}
