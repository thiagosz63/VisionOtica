import ClientCard from "./ClientCard";
import { ClientType } from "./types";
import { axiosPut } from "../../../api";
import { AxiosError, AxiosResponse } from "axios";
import { useRef } from "react";

type Props = {
    clients: ClientType[];
}

function ClientList({ clients }: Props) {
    // @ts-ignore
    $('#AtualizarModal').on('show.bs.modal', function (event) {
        // @ts-ignore
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipientId = button.data('whateverid')
        var recipientNome = button.data('whatevernome')
        var recipientEmail = button.data('whateveremail')
        var recipientCpf = button.data('whatevercpf')
        var recipientsenha = button.data('whateversenha')
        var recipientsexo = button.data('whateversexo')
        // @ts-ignore
        var modal = $(this)
        modal.find('#spanName').text(recipientNome)
        modal.find('#idClient').val(recipientId)
        modal.find('#nomeClient').val(recipientNome)
        modal.find('#emailClient').val(recipientEmail)
        modal.find('#cpfClient').val(recipientCpf)
        modal.find('#senhaClient').val(recipientsenha)
        modal.find('#sexoClient').val(recipientsexo)

    })

    const nomeResf = useRef<HTMLInputElement>(null);
    const emailResf = useRef<HTMLInputElement>(null);
    const cpfResf = useRef<HTMLInputElement>(null);
    const senhaResf = useRef<HTMLInputElement>(null);
    const sexoResf = useRef<HTMLInputElement>(null);
    const idResf = useRef<HTMLInputElement>(null);
    const categoriaRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const dados = {
            nome: nomeResf.current?.value,
            email: emailResf.current?.value,
            cpf: cpfResf.current?.value,
            senha: senhaResf.current?.value,
            sexo: sexoResf.current?.value,
            categoria: categoriaRef.current?.value
        }
        if ((dados.categoria === undefined) || dados.categoria === 'undefined') {
            console.log('indefinido')
        }
        else {
            axiosPut(`/client/${idResf.current?.value}`, dados)
                .then(function (response: AxiosResponse) {
                    alert('Dados Atualizados com sucesso');
                })
                .catch(function (error: AxiosError) {
                    alert('Error: client ja cadastrado' + error)
                });
        }
    }

    return (
        <div>
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">CPF</th>
                        <th scope="col">sexo</th>
                        <th scope="col">categoria</th>
                    </tr>
                </thead>

                {clients.map(client => (
                    <ClientCard key={client.id} clients={client} />
                ))}
            </table>

            <div className="modal fade" id="AtualizarModal" tabIndex={-1} aria-labelledby="AtualizarModalLabel" aria-hidden="true">
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
                                <label>Mudar Categoria de: <span id='spanName' />
                                    <select name='categoria' id='categoriaClient' ref={categoriaRef}
                                        className='form-control form-control-sm'>
                                        <option value='undefined'></option>
                                        <option value='admin'>Admin</option>
                                        <option value='cliente'>Cliente</option>
                                    </select>
                                </label>

                                <input id='nomeClient' type='hidden' ref={nomeResf} />
                                <input id='emailClient' type='hidden' ref={emailResf} />
                                <input id='cpfClient' type='hidden' ref={cpfResf} />
                                <input id='senhaClient' type='hidden' ref={senhaResf} />
                                <input id='sexoClient' type='hidden' ref={sexoResf} />
                                <input id='idClient' type='hidden' ref={idResf} />

                                <button type='submit' onClick={handleSubmit}
                                    className="btn btn-secondary">
                                    Salvar
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default ClientList;