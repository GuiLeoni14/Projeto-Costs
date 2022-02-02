import './styles.scss';
import P from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
export default function ServiceCard({ id, name, cost, description, handleRemove }) {
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id, cost);
    };
    return (
        <div className="project_card">
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R$ {cost}
            </p>
            <p>{description}</p>
            <div className="card_actions">
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    );
}

ServiceCard.propTypes = {
    id: P.string,
    name: P.string,
    cost: P.string,
    description: P.string,
    handleRemove: P.func,
};
