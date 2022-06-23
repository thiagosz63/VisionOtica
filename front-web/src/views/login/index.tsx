import './style.css'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from 'components/register';

export default function Login() {
    Yup.setLocale(pt);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (values: FormikValues) => {
    }

    const validations = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required()
    });

    return (
        <div className='container login-caixa'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='align-self-center'>
                        <h1>Já sou cadastrado</h1>
                        <p>Se você tiver uma conta, acesse com seu
                            endereço de e-mail e senha.
                        </p>

                        <Formik initialValues={{}}
                            onSubmit={handleSubmit}
                            validationSchema={validations}>
                            <Form>
                                <div>
                                    <label htmlFor='email'>E-MAIL*</label>
                                    <Field type='email'
                                        name='email'
                                        id='email'
                                        placeholder='DIGITE SEU EMAIL'
                                        className="login-field"
                                    />
                                    <div>
                                        <ErrorMessage component='span' name='email' />
                                    </div>
                                </div>

                                <div className='login-caixa'>
                                    <label htmlFor='password'>SENHA*</label>
                                    <Field type='password'
                                        name='password'
                                        id='password'
                                        placeholder='DIGITE SUA SENHA'
                                        className="login-field"
                                    />
                                    <div>
                                        <ErrorMessage component='span' name='password' />
                                    </div>
                                </div>

                                <div className='row login-caixa'>
                                    <div className='col-md-6'>
                                        <button type="submit"
                                            className="btn btn-warning">
                                            Entrar
                                        </button>
                                    </div>

                                    <div className='col-md-6'>
                                        <Link to='/contato'>Esqueceu sua Senha?</Link>
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
                            onClick={handleShow}>
                            Criar Conta
                        </button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}>
                            <Modal.Header>
                                <Modal.Title></Modal.Title>
                                <button type="button"
                                    className="close btn btn-secondary"
                                    onClick={handleClose}
                                    aria-label="Close">
                                    Cancelar
                                </button>
                            </Modal.Header>
                            <Modal.Body>
                               <Register/>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}