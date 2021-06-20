import { AxiosError, AxiosResponse } from "axios"
import { useRef, useState } from "react"
import { Modal } from "react-bootstrap"
import { axiosPut } from "../../../api"
import { formatPrice } from "../../../Products/hepers"
import { PedidoType } from "./PedidoTypes"
import { toast } from 'react-toastify';
import { Product } from "../../../Products/types"

type Props = {
    pedido: PedidoType
}
const PedidoCard = ({ pedido }: Props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const statusRef = useRef<HTMLSelectElement>(null);
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setSelectedProducts(pedido.products);
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const dados = {
            client: { "id": pedido.client.id },
            dataVenda: pedido.dataVenda,
            preco: pedido.preco,
            quantidade: pedido.quantidade,
            produtos: productsIds,
            status: statusRef.current?.value
        }
        if ((dados.status === undefined) || dados.status === 'undefined') {
            toast.warning('Selecione o tipo a ser modificado')
        }
        else if (pedido.status === "finalizado") {
            toast.error('O Pedido está Concluido')
            setSelectedProducts([])
            handleClose();
        }
        else {
            axiosPut(`/pedido/${pedido.id}`, dados)
                .then(function (response: AxiosResponse) {
                    toast.success('Status Atualizado com Sucesso')
                    setSelectedProducts([])
                    handleClose();
                })
                .catch(function (error: AxiosError) {
                    toast.error("Error: Sistema Indisponivel")
                });
        }
    }
    return (
        <tbody>
            <tr>

                <th scope="row">
                    <button onClick={handleShow} className='btn btn-outline-success w-100'
                        title="Editar">
                        <i className="fas fa-user-edit"></i>
                    </button>

                </th>
                <td>{pedido.id}</td>
                <td>{formatPrice(pedido.preco)}</td>
                <td>{pedido.dataVenda}</td>
                <td>{pedido.status}</td>
                <td>{pedido.quantidade}</td>
                <td>{pedido.client.id}</td>
                <td>{pedido.client.nome}</td>

                <td>
                    {(pedido.products).map(pedido => (
                       <span key = {pedido.id}>
                           {`${pedido.id} - `}
                       </span>
                    ))}
                   
                </td>

                <td>
                    {(pedido.products).map(pedido => (
                        <img key = {pedido.id} src={pedido.imageUri} alt={pedido.name} width="80px"/>
                    ))}
                   
                </td>
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
                        <label>Mudar Status do Pedido: <span>{pedido.id}</span>
                            <select name='status' id='statuClient' ref={statusRef}
                                className='form-control form-control-sm'>
                                <option value='undefined'></option>
                                <option value='aprovado'>Aprovado</option>
                                <option value='enviado'>Enviado</option>
                                <option value='entregue'>Entregue</option>
                                <option value='finalizado'>Finalizado</option>
                                <option value='cancelado'>Cancelado</option>
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
export default PedidoCard