import { useState } from 'react';
import { SubmitButton } from '../../Buttons/SubmitButton';
import Input from '../../Form/Input';
import P from 'prop-types';
export default function ServiceForm({ handleSubmit, projectData, textButton }) {
    const [service, setService] = useState({});
    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        console.log(service);
        handleSubmit(projectData);
    }
    function handleOnChange(e) {
        console.log('Handle on change chamado');
        setService({ ...service, [e.target.name]: e.target.value });
    }
    return (
        <form onSubmit={submit}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                id="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleOnChange}
            />
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                id="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleOnChange}
            />
            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                id="description"
                placeholder="Insira a descrição do serviço"
                handleOnChange={handleOnChange}
            />
            <SubmitButton textButton={textButton} />
        </form>
    );
}

ServiceForm.propTypes = {
    handleSubmit: P.func,
    projectData: P.object,
    textButton: P.string,
};
