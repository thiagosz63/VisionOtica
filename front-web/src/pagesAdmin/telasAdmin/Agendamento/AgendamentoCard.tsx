import { AgendamentoType } from './types';
import './style.css';

type Props = {
    agendamentos: AgendamentoType;
}

const AgendamentoCard = ({ agendamentos }: Props) => {
    function btnAtualizar() {
        alert(agendamentos.nome)
    }
    return (
        <tbody>
            <tr>
                <td>
                    <button onClick={btnAtualizar} className='btn btn-outline-success w-100'
                        title="Editar">
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                <td>{agendamentos.id}</td>
                <td>{agendamentos.nome}</td>
                <td>{agendamentos.telefone}</td>
                <td>{agendamentos.data}</td>
                <td>{agendamentos.horario}</td>
                <td>{agendamentos.status}</td>
            </tr>
        </tbody>
    );
}
export default AgendamentoCard;