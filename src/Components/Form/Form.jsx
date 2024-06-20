import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { FaMapMarked } from "react-icons/fa";
import { useState, useEffect } from "react";
import { List } from "../List/List";
import './Form.css'

export const Form = () => {
    const [endereco, setEndereco] = useState({});
    const [cep, setCep] = useState('');
    const [submit, setSubmit] = useState(false);


    function getEndereco(e) {
    const cep = e.target.value;
    setCep(cep);
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).catch(() => alert('Cep Inválido'))
        .then(data => setEndereco(
            {
                localidade: data.localidade,
                uf: data.uf,
                logradouro: data.logradouro,
                bairro: data.bairro
            }
        ));
        setSubmit(true);  
        setCep(''); 
    }

    return (
        <form onSubmit={handleSubmit} className="Form">
            <h1>Verifique Seu Cep Aqui <FaMapMarked /></h1>
            <Input value={cep} max={8}  onChange={(e) => getEndereco(e)}
                label={'Digite o Cep de Sua Cidade:'} />
            <Button type="submit" text="Verificar" />
            {submit? <List endereco={endereco} /> : null}
        </form>

    )
}