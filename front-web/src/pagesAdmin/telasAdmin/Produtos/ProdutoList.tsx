import ProdutosCard from "./ProdutosCard";
import { ProdutosType } from "./produtosTypes";

type Props = {
    produtos: ProdutosType[]
}
function ProdutosList({ produtos }: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Imagem</th>
                        <th scope="col">Categoria</th>
                    </tr>
                </thead>

                {produtos.map(produtos => (
                    <ProdutosCard key={produtos.id} produtos={produtos} />
                ))}
            </table>
        </div>
    )
}
export default ProdutosList