import { ClientType } from './types';
import './style.css';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosDelete } from '../../../api';
import { Field, Form, Formik, FormikValues } from 'formik';

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
    const handleSubmit = (Values: FormikValues) => {

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

            <div className="modal fade" id="AtualizarModal" tabIndex={-1} aria-labelledby="AtualizarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal"
                                aria-label="Close">
                                Cancelar
                            </button>
                        </div>
                        <div className="modal-body">
                            <Formik initialValues={{}} onSubmit={handleSubmit}>
                                <Form>
                                    <label>Mudar Categoria
                                    <Field name='categoria' as="select"
                                            className='form-control form-control-sm'>
                                            <option value='admin'>Admin</option>
                                            <option value='cliente'>Cliente</option>
                                        </Field>
                                    </label>
                                    <button type='submit'
                                        className="btn btn-secondary">
                                        Salvar
                                         </button>

                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </tbody >
    );
}
export default ClientCard;