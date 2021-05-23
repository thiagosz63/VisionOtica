import { ClientType } from './types';
import './style.css';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosDelete } from '../../../api';

type Props = {
    clients: ClientType;
}

const ClientCard = ({ clients }: Props) => {
    function btnApagar() {
        axiosDelete(`/client/ ${clients.id}`)
            .then(function (response: AxiosResponse) {
                alert('Dados apagado com sucesso');
            })
            .catch(function (error: AxiosError) {
                alert(error.message)
            });
    }

    /*function btnAtualizar() {
        const pai = document.getElementById('nome');
          const cadastro = document.createElement('input')
         cadastro.value = clients.nome;

         pai?.appendChild(cadastro)
    }*/
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
                    <button data-toggle="modal" data-target="#AtualizarModal"
                        className='btn btn-outline-success w-100' title="Editar"
                        data-whateverid={clients.id}
                        data-whatevernome={clients.nome} data-whateveremail={clients.email}
                        data-whatevercpf={clients.cpf} data-whateversenha={clients.senha}
                        data-whateversexo={clients.sexo} data-whatevercategoria={clients.categoria}  >
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                <td>{clients.id}</td>
                <td>{clients.nome}</td>
                <td>{clients.email}</td>
                <td>{clients.cpf}</td>
                <td>{clients.sexo}</td>
                <td>{clients.categoria}</td>
            </tr>
        </tbody >
    );
}
export default ClientCard;