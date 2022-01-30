import P from 'prop-types';
import './styles.scss';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export default function ProjectCard({ id, name, budget, category, handleRemove }) {
    const removeProject = (e) => {
        e.preventDefault();
        handleRemove(id);
    };
    return (
        <div className="project_card">
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p className={`category_text ${category.toLowerCase()}`}>
                <span></span> {category}
            </p>
            <div className="card_actions">
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={removeProject}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    id: P.number,
    name: P.string,
    budget: P.string,
    category: P.string,
    handleRemove: P.func,
};
