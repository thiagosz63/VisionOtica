import { PedidoType } from "../../../pagesAdmin/telasAdmin/Pedidos/PedidoTypes"
import { formatPrice } from "../../../Products/hepers"

type Props = {
    pedido: PedidoType
}
const PedidoCard = ({ pedido }: Props) => { 

    return (
        <tbody>
            <tr>
                <th scope="row">
                    {pedido.id}
                </th>
                <td>{formatPrice(pedido.preco)}</td>
                <td>{pedido.dataVenda}</td>
                <td>{pedido.status}</td>
                <td>{pedido.quantidade}</td>
                <td>
                    {(pedido.products).map(pedido => (
                        <img key = {pedido.id} src={pedido.imageUri} alt={pedido.name} width="80px"/>
                    ))}
                   
                </td>
            </tr>
        </tbody >
    )
}
export default PedidoCard