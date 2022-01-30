import P from 'prop-types';
import './styles.scss';
export default function Li({ name, attribute }) {
    return (
        <li className="li_info_project">
            <span>{name}:</span>
            {attribute}
        </li>
    );
}

Li.propTypes = {
    name: P.string.isRequired,
    attribute: P.any,
};
