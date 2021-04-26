
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup';
import './style.css'
import { pt } from 'yup-locale-pt';
import axios from 'axios';

function Cadastrar() {
    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {
        axios.post('http://localhost:8080/client', Values)

            .then(function (response) {
                alert('Dados inseridos com sucesso');       
            })
            .catch(function (error) {
                alert('Error: client ja cadastrado')
            });
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
                        Criar Conta
                    </h5>
                </div>
            </div>

            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form>
                    <div className="row mb-4 mt-2 ml-2 mr-2">
                        <div className="col">
                            <label htmlFor='Nome' >NOME*</label>
                            <Field type="text" id="Nome" name='nome'
                                placeholder="Nome" />
                            <ErrorMessage component='span' name='nome' />
                        </div>

                        <div className="col">
                            <label htmlFor="sexo">Gênero (opcional)</label>
                            <Field id='sexo' name='sexo' as="select"
                                className='form-control form-control-sm'>
                                <option value='Não_especificado'>Não especificado</option>
                                <option value='Masculino'>Masculino</option>
                                <option value='Feminino'>Feminino</option>
                            </Field>
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label htmlFor="Email">E-MAIL*</label>
                            <Field type="text" id="Email" placeholder="E-mail"
                                name='email' />
                            <ErrorMessage component='span' name='email' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label htmlFor="CPF">CPF*</label>
                            <Field type="text" id="CPF" placeholder="CPF (Apenas número)"
                                name='cpf' />
                            <ErrorMessage component='span' name='cpf' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label htmlFor="Password">SENHA*</label>
                            <Field type="password" name="senha" id="Password"
                                placeholder="********" />
                            <ErrorMessage component='span' name='senha' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label htmlFor="ConfirmaPassword">CONFIRMAÇÃO DA SENHA*</label>
                            <Field type="password" id="ConfirmaSenha"
                                placeholder="confirmar Senha" name='ConfirmaSenha' />
                            <ErrorMessage component='span' name='ConfirmaSenha' />
                        </div>
                    </div>

                    <div className="row mt-2 mr-2">
                        <div className="col text-center">
                            <button type='submit'
                                className="btn btn-secondary">
                                CRIAR
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





