import P from 'prop-types';
import './styles.scss';
export default function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option disabled selected>
                    Selecione uma opção:
                </option>
            </select>
        </div>
    );
}

Select.propTypes = {
    text: P.string.isRequired,
    name: P.string.isRequired,
    options: P.object,
    handleOnChange: P.func,
    value: P.func,
};
