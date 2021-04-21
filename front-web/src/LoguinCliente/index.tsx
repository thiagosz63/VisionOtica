import { AxiosResponse, AxiosError } from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function LoguinCliente() {

    const [dadosForm, setDadosForm] = useState({
        loguinEmail: '',
        loguinSenha: ''
    })

    const onChangeInput = (e: { target: { name: string; value: string }; }) =>
        setDadosForm({ ...dadosForm, [e.target.name]: e.target.value });

    const axios = require('axios').default;

    const submit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (dadosForm.loguinEmail !== '') {
            axios.get(`http://localhost:8080/client/${dadosForm.loguinEmail}`)

                .then(function (response: AxiosResponse) {
                    // handle success
                    if (response.data.senha === dadosForm.loguinSenha) {
                        alert('as senha sao iguais')
                    } else {
                        // window.location.assign("/");
                        alert('as senha sao diferente')
                    }
                })
                .catch(function (error: AxiosError) {
                    // handle error

                    console.log(error.message);

                })
        } else { alert("preencha os campos") }

    }
    return (
        <div className='container Caixa'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='align-self-center'>
                        <h1 className='Titulo'>Já sou cadastrado</h1>
                        <p>Se você tiver uma conta, acesse com seu
                        endereço de e-mail e senha.
                        </p>

                        <form onSubmit={submit}>
                            <div>
                                <label htmlFor='loguinEmail'>E-MAIL*</label>
                                <input id='loguinEmail' placeholder='DIGITE SEU EMAIL'
                                    type='email' name='loguinEmail' onChange={onChangeInput} />
                            </div>

                            <div className='Caixa'>
                                <label htmlFor='loguinSenha'>SENHA*</label>
                                <input id='loguinSenha' placeholder='DIGITE SUA SENHA'
                                    name='loguinSenha' type='password' onChange={onChangeInput} />
                            </div>


                            <div className='row Caixa'>
                                <div className='col-md-6'>
                                    <button type="submit" className="btn btn-warning">Entrar</button>
                                </div>

                                <div className='col-md-6'>
                                    <a href='/'>Esqueceu sua Senha?</a>
                                </div>

                                <div id='tteste'></div>
                            </div>
                        </form>
                    </div>

                </div>

                <div className='col-md-2' />

                <div className='col-md-5'>
                    <h1 className='Titulo'>Sou um novo cliente</h1>
                    <p>Criar uma nova conta tem muitos benefícios:
                    fechar pedidos mais rapidamente, registrar mais endereços,
                    acompanhar pedidos e muito mais.
                    </p>

                    <Link to='/cadastrar' type="submit" className="btn btn-warning">Criar Conta</Link>
                </div>

            </div>

        </div>
    );
}

export default LoguinCliente;