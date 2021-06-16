import PedidoCard from "./PedidoCard";
import { PedidoType} from "./PedidoTypes";

type Props = {
    pedido: PedidoType[]
}
function PedidoList({ pedido }: Props) {

    return (
        <div>
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Data do Pedido</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total de Produto</th>

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