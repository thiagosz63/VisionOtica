import { AgendamentoType } from './types';
import './style.css';

type Props = {
    agendamentos: AgendamentoType;
}

const AgendamentoCard = ({ agendamentos }: Props) => {
    
    return (
        <tbody>
            <tr>
                <td>
                <button data-toggle="modal" data-target="#atualizarModalAge"
                        className='btn btn-outline-success w-100' title="Editar"
                        data-whateverid={agendamentos.id}
                        data-whatevernome={agendamentos.nome} data-whatevertelefone={agendamentos.telefone}
                        data-whateverhorario={agendamentos.horario} data-whateverdata={agendamentos.data}
                        data-whateverstatus={agendamentos.status}>
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