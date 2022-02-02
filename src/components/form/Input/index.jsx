import P from 'prop-types';
import './styles.scss';
export default function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                required
            />
        </div>
    );
}

Input.propTypes = {
    type: P.string.isRequired,
    text: P.string.isRequired,
    name: P.string.isRequired,
    placeholder: P.string.isRequired,
    handleOnChange: P.func,
    value: P.string,
};
