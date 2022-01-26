import { SubmitButton } from '../../Buttons/SubmitButton';
import Input from '../../Form/Input';
import Select from '../../form/select';
import P from 'prop-types';

export default function ProjectForm({ btnText }) {
    return (
        <form action="">
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do Projeto" />
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o Orçamento total" />
            <Select text="Selecione uma Categoria" name="category_id" />
            <SubmitButton textButton={btnText} />
        </form>
    );
}

ProjectForm.propTypes = {
    btnText: P.string.isRequired,
};
