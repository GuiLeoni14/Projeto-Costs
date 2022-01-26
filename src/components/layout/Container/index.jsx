import './styles.scss';
import P from 'prop-types';
export default function Container({ children, customClass }) {
    return <div className={`container ${customClass}`}>{children}</div>;
}

Container.propTypes = {
    children: P.node.isRequired,
    customClass: P.string,
};
