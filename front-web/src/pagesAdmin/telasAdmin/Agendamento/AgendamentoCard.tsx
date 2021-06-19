import { AgendamentoType } from './types';
import './style.css';
import { Modal } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { axiosPut } from '../../../api';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

type Props = {
    agendamentos: AgendamentoType;
}

const AgendamentoCard = ({ agendamentos }: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const statusResf = useRef<HTMLSelectElement>(null);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const dadosAge = {
            nome: agendamentos.nome,
            telefone: agendamentos.telefone,
            horario: agendamentos.horario,
            data: agendamentos.data,
            status: statusResf.current?.value,
        }
        if ((dadosAge.status === undefined) || dadosAge.status === 'undefined') {
            toast.warning("Por Favor Selecione um status valido")
        }
        else if(agendamentos.status === "Finalizado"){
            toast.error("Agendamento já foi Concluido")
            handleClose();
        }

        else {
            axiosPut(`/agendamento/${agendamentos.id}`, dadosAge)
                .then(function (response: AxiosResponse) {
                    toast.success("Status Atualizado com Sucesso")
                    handleClose();
                })
                .catch(function (error: AxiosError) {
                    toast.error("Sistema Indisponivel")
                });
        }
    }

    return (
        <tbody>
            <tr>
                <td>
                    <button className='btn btn-outline-success w-100' title="Editar"
                        onClick={handleShow}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                <td>{agendamentos.id}</td>
                <td>{agendamentos.nome}</td>
                <td>{agendamentos.telefone}</td>
                <td>{agendamentos.data}</td>
                <td>{agendamentos.horario}</td>
                <td>{agendamentos.status}</td>
                <td>{agendamentos.client.id}</td>
                <td>{agendamentos.client.nome}</td>
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
                        <label>Mudar Status de: <span>{agendamentos.nome}</span>
                            <select name='status' id='statusAgendamento' ref={statusResf}
                                className='form-control form-control-sm'>
                                 <option value='undefined'></option>
                                <option value='Confirmado'>Confirmado</option>
                                <option value='Cancelado'>Cancelado</option>
                                <option value='Finalizado'>Finalizado</option>
                            </select>
                        </label>
                        <button type='submit' onClick={handleSubmit}
                            className="btn btn-secondary">
                            Salvar
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </tbody>
    );
}
export default AgendamentoCard;