import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { axiosGet } from "../../../api";
import AgendamentoForm from "./AgendamentoForm";
import AgendamentoList from "./AgendamentoList";
import { AgendamentoType } from "./agendamentoTypes";
import './style.css'

interface props{
    idClient:string
}

function Agendamento(props:props) {
    const [AgendamentoType, setAgendamentoType] = useState<AgendamentoType[]>([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        axiosGet('/agendamento')
            .then(response => setAgendamentoType(response.data))
            .catch(error => console.log(error))
    }, [AgendamentoType]);

    return (
        <div>
            <ul className="nav nav-primary justify-content-end fundo">
                <li className="nav-item">
                    <button className='btn btn btn-outline-primary w-100'
                        onClick={handleShow} title="Inserir">
                        <i className="fas fa-plus "></i>
                        <span>  Novo Agendamento</span>
                    </button>
                </li>
            </ul>

            <AgendamentoList agendamento={AgendamentoType} />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                    <button type="button" className="close btn btn-secondary" onClick={handleClose}
                        aria-label="Close">
                        Cancelar
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <AgendamentoForm idClient={props.idClient} fechaModal={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Agendamento