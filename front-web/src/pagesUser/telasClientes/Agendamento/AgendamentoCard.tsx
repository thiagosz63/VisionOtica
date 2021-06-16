import { AgendamentoType } from "./agendamentoTypes"


type Props = {
    agendamento: AgendamentoType
}
const AgendamentoCard = ({ agendamento }: Props) => {

    return (
        <tbody>
            <tr>
                <th scope="row">
                    {agendamento.id}
                </th>
                <td>{agendamento.nome}</td>
                <td>{agendamento.telefone}</td>
                <td>{agendamento.data}</td>
                <td>{agendamento.horario}</td>
                <td>{agendamento.status}</td>
            </tr>
        </tbody >
    )
}
export default AgendamentoCard