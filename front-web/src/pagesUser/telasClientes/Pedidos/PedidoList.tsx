import { PedidoType } from "../../../pagesAdmin/telasAdmin/Pedidos/PedidoTypes";
import PedidoCard from "./PedidoCard";

type Props = {
    pedido: PedidoType[]
}
function PedidoList({ pedido }: Props) {

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Data do Pedido</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total de Produto</th>
                        <th scope="col">Produtos</th>

                    </tr>
                </thead>

                {pedido.map(pedido => (
                    <PedidoCard key={pedido.id} pedido={pedido} />
                ))}
            </table>
        </div>
    )
}
export default PedidoList