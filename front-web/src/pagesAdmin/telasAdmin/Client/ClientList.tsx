import ClientCard from "./ClientCard";
import { ClientType } from "./types";
import { Field, Form, Formik, FormikValues } from 'formik';
import { axiosPut } from "../../../api";
import { AxiosError, AxiosResponse } from "axios";

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

    const handleSubmit = (Values: FormikValues) => {
        const dados = {
            //@ts-ignore
            nome: document.getElementById('nomeClient').value,
            //@ts-ignore
            email: document.getElementById('emailClient').value,
            //@ts-ignore
            cpf: document.getElementById('cpfClient').value,
            //@ts-ignore
            senha: document.getElementById('senhaClient').value,
            //@ts-ignore
            sexo: document.getElementById('sexoClient').value,
            //@ts-ignore
            categoria: Values.categoria
        }
        if ((dados.categoria === undefined) || dados.categoria === 'undefined') {
            console.log('indefinido')
        }
        else {
            //@ts-ignore
            var id =  document.getElementById('idClient').value;
            axiosPut(`/client/${id}`, dados)
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
                            <Formik initialValues={{}} onSubmit={handleSubmit}>
                                <Form>
                                    <label>Mudar Categoria de: <span id='spanName' />
                                        <Field name='categoria' as="select" id='categoriaClient'
                                            className='form-control form-control-sm'>
                                            <option value='undefined'></option>
                                            <option value='admin'>Admin</option>
                                            <option value='cliente'>Cliente</option>
                                        </Field>
                                    </label>

                                    <input id='nomeClient' type='hidden' />
                                    <input id='emailClient' type='hidden' />
                                    <input id='cpfClient' type='hidden' />
                                    <input id='senhaClient' type='hidden' />
                                    <input id='sexoClient' type='hidden' />
                                    <input id='idClient' type='hidden' />

                                    <button type='submit'
                                        className="btn btn-secondary">
                                        Salvar
                                    </button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClientList;