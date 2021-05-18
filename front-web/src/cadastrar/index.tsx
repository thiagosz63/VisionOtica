
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup';
import './style.css'
import { pt } from 'yup-locale-pt';
import { AxiosError, AxiosResponse } from 'axios';
import { History } from '../history';
import { axiosPost, axiosPut } from '../api';

interface props {
    id?: string
    titulo?: string
}

function Cadastrar(props: props) {
    const {
        id, titulo = 'Criar Conta'
    } = props;

    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {

        if (id === undefined) {
            axiosPost('/client', Values)
                .then(function (response: AxiosResponse) {
                    alert('Dados inseridos com sucesso');
                    History.push('/loguin');
                })
                .catch(function (error: AxiosError) {
                    alert('Error: client ja cadastrado' + error)
                });
        } else {
            axiosPut(`/client/${id}`, Values)
                .then(function (response: AxiosResponse) {
                    alert('Dados Atualizados com sucesso');
                })
                .catch(function (error: AxiosError) {
                    alert('Error: client ja cadastrado' + error)
                });
        }


    }
    function validarCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf === '') return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length !== 11 ||
            cpf === "00000000000" ||
            cpf === "11111111111" ||
            cpf === "22222222222" ||
            cpf === "33333333333" ||
            cpf === "44444444444" ||
            cpf === "55555555555" ||
            cpf === "66666666666" ||
            cpf === "77777777777" ||
            cpf === "88888888888" ||
            cpf === "99999999999")
            return false;
        // Valida 1o digito	
        let add = 0;
        for (let i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== parseInt(cpf.charAt(9))) {
            return false;
        }
        // Valida 2o digito	
        add = 0;
        for (let i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
            rev = 0;
        }
        if (rev !== parseInt(cpf.charAt(10))) {
            return false;
        }
        return true;
    }

    const validations = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        cpf: Yup.string().test("", "CPF não valido",
            (value) => validarCPF(value + '')).required(),
        senha: Yup.string().min(6).required(),
        ConfirmaSenha: Yup.string().oneOf([Yup.ref('senha'),
            null], 'As senhas são diferentes').required('Confirmação é obrigatória')

    })

    return (
        <div className='container homeCad'>
            <div className='row'>
                <div className='col text-center'>
                    <h5>
                        {titulo}
                    </h5>
                </div>
            </div>

            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form>
                    <div className="row mb-4 mt-2 ml-2 mr-2">
                        <div className="col">
                            <label >NOME*
                            <Field type="text" name='nome'
                                    placeholder="Nome" />
                            </label>
                            <ErrorMessage component='span' name='nome' />
                        </div>

                        <div className="col">
                            <label>Gênero (opcional)
                            <Field name='sexo' as="select"
                                    className='form-control form-control-sm'>
                                    <option value='Não_especificado'>Não especificado</option>
                                    <option value='Masculino'>Masculino</option>
                                    <option value='Feminino'>Feminino</option>
                                </Field>
                            </label>
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>E-MAIL*
                            <Field type="text" placeholder="E-mail"
                                    name='email' />
                            </label>
                            <ErrorMessage component='span' name='email' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>CPF*
                             <Field type="text" placeholder="CPF (Apenas número)"
                                    name='cpf' />
                            </label>
                            <ErrorMessage component='span' name='cpf' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>SENHA*
                            <Field type="password" name="senha"
                                    placeholder="********" />
                            </label>
                            <ErrorMessage component='span' name='senha' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>CONFIRMAÇÃO DA SENHA*
                            <Field type="password"
                                    placeholder="confirmar Senha" name='ConfirmaSenha' />
                            </label>
                            <ErrorMessage component='span' name='ConfirmaSenha' />
                        </div>
                    </div>

                    <div className="row mt-2 mr-2">
                        <div className="col text-center">
                            <button type='submit'
                                className="btn btn-secondary">
                                Salvar
                             </button>
                        </div>
                    </div>
                </Form>
            </Formik>

            <div className='row'>
                <div className='col text-center'>
                    <p>
                        À partir de agora você receberá as newsletters
                        com as novidades da Vísion Ótica. <br />
                        Fique tranquilo, a qualquer momento você poderá cancelar
                        o Cadastro.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Cadastrar;





