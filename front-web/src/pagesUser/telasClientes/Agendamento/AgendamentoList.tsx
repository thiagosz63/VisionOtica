import AgendamentoCard from "./AgendamentoCard";
import { AgendamentoType } from "./agendamentoTypes";

type Props = {
    agendamento: AgendamentoType[]
}
function ProdutosList({ agendamento }: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Data</th>
                        <th scope="col">Horario</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                {agendamento.map(agendamento => (
                    <AgendamentoCard key={agendamento.id} agendamento={agendamento} />
                ))}
            </table>
        </div>
    )
}
export default ProdutosList