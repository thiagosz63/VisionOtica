import ProdutosCard from "./ProdutosCard";
import ProdutosForm from "./ProdutosForm";
import { ProdutosType } from "./produtosTypes";

type Props = {
    produtos: ProdutosType[]
}
function ProdutosList({ produtos }: Props) {
    return (
        <div>
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Imagem</th>
                    </tr>
                </thead>

                {produtos.map(produtos => (
                    <ProdutosCard key={produtos.id} produtos={produtos} />
                ))}
            </table>

            <div className="modal fade" id="ProdutosModal" tabIndex={-2} aria-labelledby="ProdutosModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal"
                                aria-label="Close">
                                Cancelar
                            </button>
                        </div>
                        <div className="modal-body">
                            <ProdutosForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProdutosList