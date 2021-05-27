import { AxiosError, AxiosResponse } from "axios";
import { useRef } from "react";
import { axiosPut } from "../../../api";
import AgendamentoCard from "./AgendamentoCard";
import { AgendamentoType} from "./types";

type Props = {
    agendamentos: AgendamentoType[];
}

function AgendamentoList({ agendamentos }: Props) {

    // @ts-ignore
    $('#atualizarModalAge').on('show.bs.modal', function (event) {
       // @ts-ignore
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipientId = button.data('whateverid')
        var recipientNome = button.data('whatevernome')
        var recipientTelefone = button.data('whatevertelefone')
        var recipientHorario = button.data('whateverhorario')
        var recipientData = button.data('whateverdata')
        // @ts-ignore
        var modal = $(this)
        modal.find('#spanName').text(recipientNome)
        modal.find('#idAgendamento').val(recipientId)
        modal.find('#nomeAgendamento').val(recipientNome)
        modal.find('#telefoneAgendamento').val(recipientTelefone)
        modal.find('#horarioAgendamento').val(recipientHorario)
        modal.find('#dataAgendamento').val(recipientData)
    })

    const nomeResf = useRef<HTMLInputElement>(null);
    const telefoneResf = useRef<HTMLInputElement>(null);
    const horarioResf = useRef<HTMLInputElement>(null);
    const dataResf = useRef<HTMLInputElement>(null);
    const idResf = useRef<HTMLInputElement>(null);
    const statusResf = useRef<HTMLSelectElement>(null);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const dadosAge = {
            nome: nomeResf.current?.value,
            telefone: telefoneResf.current?.value,
            horario: horarioResf.current?.value,
            data: dataResf.current?.value,
            status: statusResf.current?.value,
        }
        if ((dadosAge.status === undefined) || dadosAge.status === 'undefined') {
            console.log('indefinido')
        }
        else {
            axiosPut(`/agendamento/${idResf.current?.value}`, dadosAge)
                .then(function (response: AxiosResponse) {
                    alert('Dados Atualizados com sucesso');
                })
                .catch(function (error: AxiosError) {
                    alert('Error: agendamento ja cadastrado' + error)
                });
        }
    }

    return (
        <div>
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Data</th>
                        <th scope="col">Horario</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                {agendamentos.map(agendamento => (
                    <AgendamentoCard key={agendamento.id} agendamentos={agendamento} />
                ))}
            </table>

            <div className="modal fade" id="atualizarModalAge" tabIndex={-2} aria-labelledby="atualizarModalAgeLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal"
                                aria-label="Close">
                                Cancelar
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label>Mudar Status de: <span id='spanName' />
                                    <select name='status' id='statusAgendamento' ref={statusResf}
                                        className='form-control form-control-sm'>
                                        <option value='undefined'></option>
                                        <option value='Aguardando'>Aguardando</option>
                                        <option value='Confirmado'>Confirmado</option>
                                        <option value='Cancelado'>Cancelado</option>
                                    </select>
                                </label>

                                <input id='nomeAgendamento' type='hidden' ref={nomeResf} />
                                <input id='telefoneAgendamento' type='hidden' ref={telefoneResf} />
                                <input id='horarioAgendamento' type='hidden' ref={horarioResf} />
                                <input id='dataAgendamento' type='hidden' ref={dataResf} />
                                <input id='idAgendamento' type='hidden' ref={idResf} />

                                <button type='submit' onClick={handleSubmit}
                                    className="btn btn-secondary">
                                    Salvar
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AgendamentoList;