import P from 'prop-types';
import './styles.scss';
export function SubmitButton({ textButton }) {
    return (
        <button type="submit" className="btn btn_submit">
            {textButton}
        </button>
    );
}

SubmitButton.propTypes = {
    textButton: P.string.isRequired,
};
