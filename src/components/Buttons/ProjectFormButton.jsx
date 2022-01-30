import P from 'prop-types';
import './styles.scss';
export default function ProjectFormButton({ text, toggleProjectForm }) {
    return (
        <button className="btn btn_project_form" onClick={() => toggleProjectForm()}>
            {text}
        </button>
    );
}

ProjectFormButton.propTypes = {
    text: P.string.isRequired,
    toggleProjectForm: P.func,
};
