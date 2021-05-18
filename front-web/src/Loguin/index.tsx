import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import './style.css'
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { AxiosError, AxiosResponse } from 'axios';
import { History } from '../history';
import Cadastrar from '../cadastrar';
import { axiosGet } from '../api';

function Loguin() {
    Yup.setLocale(pt);

    const handleSubmit = (values: FormikValues) => {
        axiosGet(`/client/${values.email}`)
            .then(function (response: AxiosResponse) {
                if (response.data.senha === values.password) {
                    if (response.data.categoria !== 'admin') {
                        localStorage.setItem('client-logado', response.data);
                        History.push('/page-user');
                    }
                    if (response.data.categoria === 'admin') {
                        localStorage.setItem('admin-logado', response.data);
                        History.push('/page-admin');
                    }
                } else {
                    alert('As senha sao diferente')
                }
            })
            .catch(function (error: AxiosError) {
                alert('error: Cliente não encontrado')
            })
    }

    const validations = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
    });

    return (
        <div className='container Caixa'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='align-self-center'>
                        <h1>Já sou cadastrado</h1>
                        <p>Se você tiver uma conta, acesse com seu
                        endereço de e-mail e senha.
                        </p>

                        <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                            <Form>
                                <div>
                                    <label htmlFor='email'>E-MAIL*</label>
                                    <Field id='email' placeholder='DIGITE SEU EMAIL'
                                        type='email' name='email' />
                                    <ErrorMessage component='span' name='email' />
                                </div>

                                <div className='Caixa'>
                                    <label htmlFor='password'>SENHA*</label>
                                    <Field id='password' placeholder='DIGITE SUA SENHA'
                                        name='password' type='password' />
                                    <ErrorMessage component='span' name='password' />
                                </div>

                                <div className='row Caixa'>
                                    <div className='col-md-6'>
                                        <button type="submit" className="btn btn-warning">Entrar</button>
                                    </div>

                                    <div className='col-md-6'>
                                        <a href='/'>Esqueceu sua Senha?</a>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>

                <div className='col-md-2' />

                <div className='col-md-5'>
                    <h1>Sou um novo cliente</h1>
                    <p>Criar uma nova conta tem muitos benefícios:
                    fechar pedidos mais rapidamente, registrar mais endereços,
                    acompanhar pedidos e muito mais.
                    </p>

                    <div className='col-md-7'>
                        <button type="button" className="btn btn-warning"
                            data-toggle="modal" data-target="#cadastrarModal"
                            data-whatever="@mdo">
                            Criar Conta
                        </button>

                        <div className="modal fade" id="cadastrarModal" tabIndex={-1}
                            aria-labelledby="cadastrarModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close btn btn-secondary"
                                            data-dismiss="modal" aria-label="Close">
                                            Cancelar
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                        <Cadastrar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loguin;