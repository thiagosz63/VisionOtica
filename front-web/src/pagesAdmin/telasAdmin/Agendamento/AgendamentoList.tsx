import AgendamentoCard from "./AgendamentoCard";
import { AgendamentoType } from "./types";

type Props = {
    agendamentos: AgendamentoType[];
}

function AgendamentoList({ agendamentos }: Props) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Data</th>
                        <th scope="col">Horario</th>
                        <th scope="col">Codigo Cliente</th>
                        <th scope="col">Nome Cliente</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                {agendamentos.map(agendamento => (
                    <AgendamentoCard key={agendamento.id} agendamentos={agendamento} />
                ))}
            </table>
        </div>
    );
}
export default AgendamentoList;