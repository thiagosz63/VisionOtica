import { History } from '../history';
import adm from './adm.png';
import './style.css';
import Agendamento from './telasAdmin/Agendamento';
import Client from './telasAdmin/Client';
import Produtos from './telasAdmin/Produtos';

function PagesAdmin() {
    function logout() {
        localStorage.removeItem('admin-logado')
        History.push('/');
    }

    return (
        <div className='container'>
            <div className="adm-margem">
                <img src={adm} width="40px" height="40px" alt="" />
                <h4 className="h4-margem">Adm</h4>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active "
                            id="list-Pedido-list" data-toggle="list" href="#list-Pedido" role="tab"
                            aria-controls="Pedido">
                            Meus Pedido <span className=' fas fa-caret-right'></span>
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-Venda-list" data-toggle="list" href="#list-Venda" role="tab"
                            aria-controls="Venda">
                            Efetua Venda <span className=' fas fa-caret-right'></span>
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-Agendamentos-list" data-toggle="list" href="#list-Agendamentos" role="tab"
                            aria-controls="Agendamentos">
                            Agendamentos <span className=' fas fa-caret-right' />
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-produtos-list" data-toggle="list" href="#list-produtos" role="tab"
                            aria-controls="usuarios">
                            Produtos <span className=' fas fa-caret-right' />
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-usuarios-list" data-toggle="list" href="#list-usuarios" role="tab"
                            aria-controls="usuarios">
                            usuarios <span className=' fas fa-caret-right' />
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-mensagens-list" data-toggle="list" href="#list-mensagens" role="tab"
                            aria-controls="usuarios">
                            mensagens <span className=' fas fa-caret-right' />
                        </a>

                        <a className="list-group-item list-group-item-action" onClick={logout}
                            id="list-settings-list" data-toggle="list" href="#list-settings" role="tab"
                            aria-controls="settings">
                            SAIR <span className=' fas fa-caret-right' />
                        </a>
                    </div>
                </div>

                <div className="col-md-10">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-Pedido" role="tabpanel" aria-labelledby="list-Pedido-list">Pedido</div>
                        <div className="tab-pane fade" id="list-Venda" role="tabpanel" aria-labelledby="list-Venda-list">Venda</div>
                        <div className="tab-pane fade" id="list-Agendamentos" role="tabpanel" aria-labelledby="list-Agendamentos-list"><Agendamento /></div>
                        <div className="tab-pane fade" id="list-produtos" role="tabpanel" aria-labelledby="list-produtos-list"><Produtos/></div>
                        <div className="tab-pane fade" id="list-usuarios" role="tabpanel" aria-labelledby="list-usuarios-list"><Client /></div>
                        <div className="tab-pane fade" id="list-mensagens" role="tabpanel" aria-labelledby="list-mensagens-list">mensagens</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PagesAdmin;