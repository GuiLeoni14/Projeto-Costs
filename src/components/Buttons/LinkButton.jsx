import P from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
export function LinkButton({ to, textButton }) {
    return (
        <Link to={to} className="btn btn_link">
            {textButton}
        </Link>
    );
}

LinkButton.propTypes = {
    textButton: P.string.isRequired,
    to: P.string.isRequired,
};
