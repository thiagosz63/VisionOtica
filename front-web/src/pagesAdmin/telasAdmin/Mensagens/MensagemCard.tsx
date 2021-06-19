import { AxiosError, AxiosResponse } from "axios";
import { useRef, useState } from "react"
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { axiosPut } from "../../../api";
import { MensagemType } from "./MensagemTypes";
import './style.css';

type Props = {
    contato: MensagemType;
}
const MensagemCard = ({ contato }: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const statusResf = useRef<HTMLSelectElement>(null);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const dadosAge = {
            nome: contato.nome,
            email: contato.email,
            telefone: contato.telefone,
            texto: contato.texto,
            status: statusResf.current?.value,
        }
        if ((dadosAge.status === undefined) || dadosAge.status === 'undefined') {
            toast.warning("Por Favor Selecione um status valido")
        }
        else if(contato.status === "Finalizado"){
            toast.error("Contato já foi Concluido")
            handleClose();
        }

        else {
            axiosPut(`/contato/${contato.id}`, dadosAge)
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
                    <button className='btn btn-outline-success w-100' title="msn"
                        onClick={handleShow}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.email}</td>
                    <td>{contato.telefone}</td>
                    <td>{contato.texto}</td>
                    <td>{contato.status}</td>
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
                        <label>Mudar Status de: <span>{contato.nome}</span>
                            <select name='status' id='statusAgendamento' ref={statusResf}
                                className='form-control form-control-sm'>
                                 <option value='undefined'></option>
                                <option value='Lida'>Lido</option>
                                <option value='Não_Lida'>Não-Lido</option>
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
            )
}
            export default MensagemCard;