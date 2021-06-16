import { formatPrice } from "../../../Products/hepers"
import { PedidoType } from "./PedidoTypes"

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
            </tr>
        </tbody >
    )
}
export default PedidoCard