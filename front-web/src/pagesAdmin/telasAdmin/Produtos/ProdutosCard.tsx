import { ProdutosType } from "./produtosTypes"
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import ProdutosForm from "./ProdutosForm";
import { formatPrice } from "../../../Products/hepers";

type Props = {
    produtos: ProdutosType
}
const ProdutosCard = ({ produtos }: Props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    return (
        <tbody>
            <tr>
                <th scope="row">
                    <button className='btn btn-outline-success w-100' title="Editar"
                         onClick={handleShow}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                </th>

                <td> {produtos.id}</td>
                <td> {produtos.name}</td>
                <td> {formatPrice(produtos.price)}</td>
                <td> {produtos.description}</td>
                <td> <img width={100} src={produtos.imageUri} alt={produtos.name} /></td>
                <td> {produtos.categoria}</td>
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
                    <ProdutosForm titulo="Atualizar Produto" name={produtos.name} price={produtos.price}
                    description={produtos.description} imageUri={produtos.imageUri} id={""+produtos.id}
                    fechaModal={()=>handleClose()} categoria={produtos.categoria}/>
                </Modal.Body>
            </Modal>
        </tbody >
    )
}
export default ProdutosCard