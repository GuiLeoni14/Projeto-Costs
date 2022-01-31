import { SubmitButton } from '../../Buttons/SubmitButton';
import Input from '../../Form/Input';
import Select from '../../form/select';
import P from 'prop-types';
import { useEffect, useState } from 'react';
import './styles.scss';
export default function ProjectForm({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {}); // não é possível mudar o começo do dado recebido pelo state
    console.log(projectData);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('http://localhost:5000/categories');
            const data = await response.json();
            setCategories(data);
        };
        fetchApi();
    }, []);
    const submit = (e) => {
        e.preventDefault();
        // console.log(project);
        handleSubmit(project);
    };
    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };
    const handleSelect = (e) => {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    };
    return (
        <form onSubmit={submit}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do Projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o Orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                text="Selecione uma Categoria"
                name="category_id"
                options={categories}
                handleOnChange={handleSelect}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton textButton={btnText} />
        </form>
    );
}

ProjectForm.propTypes = {
    btnText: P.string.isRequired,
    handleSubmit: P.func,
    projectData: P.object,
};
