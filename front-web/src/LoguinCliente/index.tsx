import { Link } from 'react-router-dom';
import './style.css'


function LoguinCliente() {
    return (
        <div className='container Caixa'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='align-self-center'>
                        <h1 className='Titulo'>Já sou cadastrado</h1>
                        <p>Se você tiver uma conta, acesse com seu
                        endereço de e-mail e senha.
                        </p>

                        <form>
                            <div>
                                <label htmlFor='loguinEmail'>E-MAIL*</label>
                                <input id='loguinEmail' placeholder='DIGITE SEU EMAIL' type='text' />
                            </div>

                            <div className='Caixa'>
                                <label htmlFor='loguinSenha'>SENHA*</label>
                                <input id='loguinSenha' placeholder='DIGITE SUA SENHA' type='password' />
                            </div>
                        </form>

                        <div className='row Caixa'>
                            <div className='col-md-6'>
                                <button type="submit" className="btn btn-warning">Entrar</button>
                            </div>

                            <div className='col-md-6'>
                                <a href='/'>Esqueceu sua Senha?</a>
                            </div>
                        </div>
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





