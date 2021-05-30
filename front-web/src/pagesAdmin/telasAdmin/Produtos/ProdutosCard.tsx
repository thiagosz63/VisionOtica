import { AxiosError, AxiosResponse } from "axios";
import { axiosDelete } from "../../../api";
import { ProdutosType } from "./produtosTypes"
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import ProdutosForm from "./ProdutosForm";

type Props = {
    produtos: ProdutosType
}
const ProdutosCard = ({ produtos }: Props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function btnApagar() {
        axiosDelete(`/products/ ${produtos.id}`)
            .then(function (response: AxiosResponse) {
                alert('Dados apagado com sucesso');
            })
            .catch(function (error: AxiosError) {
                alert(error.message)
            });
    }

    return (
        <tbody>
            <tr>
                <th scope="row">
                    <button className='btn btn-outline-success w-100' title="Editar"
                         onClick={handleShow}>
                        <i className="fas fa-user-edit"></i>
                    </button>
                </th>

                <td>
                    <button className='btn btn-outline-danger w-100' onClick={btnApagar}
                        title="Apagar">
                        <i className="fas fa-times "></i>
                    </button>
                </td>
                <td> {produtos.id}</td>
                <td> {produtos.name}</td>
                <td> R${produtos.price}</td>
                <td> {produtos.description}</td>
                <td> <img width={100} src={produtos.imageUri} alt={produtos.name} /></td>
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
                    fechaModal={()=>handleClose()}/>
                </Modal.Body>
            </Modal>
        </tbody >
    )
}
export default ProdutosCard