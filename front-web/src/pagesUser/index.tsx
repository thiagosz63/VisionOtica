import './style.css';
import { History } from '../history';
import clientepng from './cliente.png';
import AgendamentoCliente from './telasClientes/Agendamento';
import Cart from './telasClientes/Cart';

function PageUser() {
    function logout() {
        localStorage.removeItem('client-logado')
        History.push('/');
    }

    return (
        <div className='container'>
            <div className="cliente-margem">
                <img src={clientepng} width="40px" height="40px" alt="" />
                <h4 className="h4-margem">Minha Conta</h4>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active"
                            id="list-cart-list" data-toggle="list" href="#list-cart" role="tab"
                            aria-controls="cart">
                            Meus Pedido <span className=' fas fa-caret-right'></span>
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-home-list" data-toggle="list" href="#list-home" role="tab"
                            aria-controls="home">
                            Minha conta <span className=' fas fa-caret-right'></span>
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-messages-list" data-toggle="list" href="#list-messages" role="tab"
                            aria-controls="messages">
                            Agendamentos <span className=' fas fa-caret-right' />
                        </a>

                        <a className="list-group-item list-group-item-action" onClick={logout}
                            id="list-settings-list" data-toggle="list" href="#list-settings" role="tab"
                            aria-controls="settings">
                            SAIR <span className=' fas fa-caret-right' />
                        </a>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-cart"
                            role="tabpanel" aria-labelledby="list-cart-list">
                            <Cart />
                        </div>

                        <div className="tab-pane fade " id="list-home"
                            role="tabpanel" aria-labelledby="list-home-list">
                            
                        </div>

                        <div className="tab-pane fade" id="list-messages"
                            role="tabpanel" aria-labelledby="list-messages-list">
                            <AgendamentoCliente />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageUser;