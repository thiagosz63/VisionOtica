import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { axiosGet } from "../../../api";
import ProdutosList from "./ProdutoList";
import ProdutosForm from "./ProdutosForm";
import { ProdutosType } from "./produtosTypes";
import './style.css'

function Produtos() {
    const [ProdutosType, setProdutosType] = useState<ProdutosType[]>([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        axiosGet("/products")
            .then(response => setProdutosType(response.data))
            .catch(error => console.log(error))
    }, [ProdutosType]);

    return (
        <div>
            <ul className="nav nav-primary justify-content-end fundo">
                <li className="nav-item">
                    <button className='btn btn btn-outline-primary w-100'
                        onClick={handleShow} title="Inserir">
                        <i className="fas fa-plus "></i>
                        <span>  Novo Produto</span>
                    </button>
                </li>
            </ul>

            <ProdutosList produtos={ProdutosType} />

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
                    <ProdutosForm fechaModal={()=>handleClose()} />
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Produtos