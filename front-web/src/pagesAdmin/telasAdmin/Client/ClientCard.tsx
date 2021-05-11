import { ClientType } from './types';
import './style.css';
import { AxiosError, AxiosResponse } from 'axios';
import Cadastrar from '../../../cadastrar';
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
                    <button data-toggle="modal" data-target="#exampleModal"
                        data-whatever="@mdo" className='btn btn-outline-success w-100'
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

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                Cancelar
                            </button>
                        </div>
                        <div className="modal-body">
                            <Cadastrar titulo='Atualizar' id={clients.id + ''} />
                        </div>
                    </div>
                </div>
            </div>
        </tbody>
    );
}
export default ClientCard;