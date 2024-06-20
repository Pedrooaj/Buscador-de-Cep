import './List.css';
import { FaCity } from "react-icons/fa";
import { TbBuildingEstate } from "react-icons/tb";
import { MdOutlineHomeWork } from "react-icons/md";
import { BsHouses } from "react-icons/bs";

export const List = ({endereco}) => {
    return(
        <div className="List">
            <h1>Endereço:</h1>
            {endereco.localidade != ''?<p><TbBuildingEstate />{endereco.localidade}</p>: null}
            {endereco.uf != ''?<p><FaCity />{endereco.uf}</p>: null}
            {endereco.logradouro != ''?<p><MdOutlineHomeWork /> {endereco.logradouro}</p>: null}
            {endereco.bairro != ''?<p><BsHouses />{endereco.bairro}</p>: null}
        </div>
    )
}