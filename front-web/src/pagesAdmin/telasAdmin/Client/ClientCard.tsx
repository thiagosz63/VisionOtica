import { ClientType } from './types';
import './style.css';
import axios, { AxiosError, AxiosResponse } from 'axios';

type Props = {
    clients: ClientType;
}

const ClientCard = ({ clients }: Props) => {
    function btnApagar() {

        axios.delete(`http://localhost:8080/client/ ${clients.id}`)
        .then(function (response:AxiosResponse) {
            alert('Dados apagado com sucesso');             
        })
        .catch(function (error:AxiosError) {
            alert(error.message)
        });   
    }
    function btnAtualizar() {
        alert(clients.nome)
    }
    return (
        <tbody>
            <tr>
                <th scope="row">
                    <button onClick={btnApagar} className='btn btn-outline-danger w-100'
                        title="Apagar">
                        <i className="fas fa-times "></i>
                    </button>
                </th>
                <td>
                    <button onClick={btnAtualizar} className='btn btn-outline-success w-100'
                        title="Editar">
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                <td>{clients.id}</td>
                <td>{clients.nome}</td>
                <td>{clients.email}</td>
                <td>{clients.cpf}</td>
                <td>{clients.sexo}</td>
                <td>{clients.senha}</td>
                <td>{clients.categoria}</td>
            </tr>
        </tbody>
    );
}
export default ClientCard;