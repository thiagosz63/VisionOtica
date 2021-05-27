import { ClientType } from './types';
import './style.css';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosDelete, axiosPut } from '../../../api';
import { useRef, useState } from "react";
import { Modal } from 'react-bootstrap';


type Props = {
    clients: ClientType;
}

const ClientCard = ({ clients }: Props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function btnApagar() {
        axiosDelete(`/client/ ${clients.id}`)
            .then(function (response: AxiosResponse) {
                alert('Dados apagado com sucesso');
            })
            .catch(function (error: AxiosError) {
                alert(error.message)
            });
    }

    const categoriaRef = useRef<HTMLSelectElement>(null);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const dados = {
            nome: clients.nome,
            email: clients.email,
            cpf: clients.cpf,
            senha: clients.senha,
            sexo: clients.sexo,
            categoria: categoriaRef.current?.value
        }
        if ((dados.categoria === undefined) || dados.categoria === 'undefined') {
            alert('Selecione o tipo a ser modificado')
        }
        else {
            axiosPut(`/client/${clients.id}`, dados)
                .then(function (response: AxiosResponse) {
                    alert('Dados Atualizados com sucesso');
                    handleClose();
                })
                .catch(function (error: AxiosError) {
                    alert(error.message)
                });
        }
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
                    <button onClick={handleShow} className='btn btn-outline-success w-100'
                        title="Editar">
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


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Atualizar</Modal.Title>
                    <button type="button" className="close btn btn-secondary" onClick={handleClose}
                        aria-label="Close">
                        Cancelar
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>Mudar Categoria de: <span>{clients.nome}</span>
                            <select name='categoria' id='categoriaClient' ref={categoriaRef}
                                className='form-control form-control-sm'>
                                <option value='undefined'></option>
                                <option value='admin'>Admin</option>
                                <option value='cliente'>Cliente</option>
                            </select>
                        </label>
                        <button type='submit' onClick={handleSubmit}
                            className="btn btn-secondary">
                            Salvar
                         </button>
                    </form>
                </Modal.Body>
            </Modal>
        </tbody >
    );
}
export default ClientCard;