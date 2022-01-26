import P from 'prop-types';
import './styles.scss';
export default function Select({ text, name, options, handleOnChange, value }) {
    console.log(options);
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option disabled selected>
                    Selecione uma opção:
                </option>
                {options.length > 0 &&
                    options.map((categoria) => (
                        <option value={categoria.id} key={categoria.id}>
                            {categoria.name}
                        </option>
                    ))}
            </select>
        </div>
    );
}

Select.propTypes = {
    text: P.string.isRequired,
    name: P.string.isRequired,
    options: P.array,
    handleOnChange: P.func,
    value: P.func,
};
