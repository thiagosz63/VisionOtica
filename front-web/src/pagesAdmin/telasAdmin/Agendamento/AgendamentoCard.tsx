import { AgendamentoType } from './types';
import './style.css';
import { Modal } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { axiosPut } from '../../../api';
import { AxiosError, AxiosResponse } from 'axios';

type Props = {
    agendamentos: AgendamentoType;
}

const AgendamentoCard = ({ agendamentos }: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let dataa = new Date(agendamentos.data);
    let dataFormatada = ((dataa.getDate() + " - " + meses[(dataa.getMonth())] + " - " + dataa.getFullYear()));

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
            console.log('indefinido')
        }
        else {
            axiosPut(`/agendamento/${agendamentos.id}`, dadosAge)
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
                <td>
                    <button className='btn btn-outline-success w-100' title="Editar"
                        onClick={handleShow}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                <td>{agendamentos.id}</td>
                <td>{agendamentos.nome}</td>
                <td>{agendamentos.telefone}</td>
                <td>{dataFormatada}</td>
                <td>{agendamentos.horario}</td>
                <td>{agendamentos.status}</td>
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
                                <option value='Aguardando'>Aguardando</option>
                                <option value='Confirmado'>Confirmado</option>
                                <option value='Cancelado'>Cancelado</option>
                                <option value='Cancelado'>Concluido</option>
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