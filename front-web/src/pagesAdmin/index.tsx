import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { axiosGet } from '../api';
import Cadastrar from '../cadastrar';
import { History } from '../history';
import adm from './adm.png';
import './style.css';
import Agendamento from './telasAdmin/Agendamento';
import Client from './telasAdmin/Client';
import Pedidos from './telasAdmin/Pedidos';
import Produtos from './telasAdmin/Produtos';

function PagesAdmin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // @ts-ignore
    const [id] = useState<string>((localStorage.getItem("id")));
    const [nome, setNome] = useState<string>();
    const [sexo, setSexo] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [cpf, setCpf] = useState<string>();
    const [senha, setSenha] = useState<string>();
    const [categoria, setCategoria] = useState<string>();

    useEffect(() => {
        axiosGet(`/client/${id}`)
            .then(function (response: AxiosResponse) {
                setNome(response.data.nome)
                setSexo(response.data.sexo)
                setEmail(response.data.email)
                setCpf(response.data.cpf)
                setSenha(response.data.senha)
                setCategoria(response.data.categoria)

            })
            .catch(function (error: AxiosError) {
            });

    });

    function logout() {
        localStorage.removeItem('admin-logado')
        History.push('/');
        localStorage.removeItem("id")
    }

    return (
        <div className='container'>
            <div className="adm-margem">
                <img src={adm} width="40px" height="40px" alt="" />
                <h4 className="h4-margem">
                    Adm
                    <span> {nome}</span>
                </h4>
                
                <div className='col-md-4'>
                    <button className="btn btn-outline-primary" onClick={handleShow}>
                        <i className="fas fa-user-circle"></i>Minha conta
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active "
                            id="list-Pedido-list" data-toggle="list" href="#list-Pedido" role="tab"
                            aria-controls="Pedido">
                            Pedidos <span className=' fas fa-caret-right'></span>
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
                        <div className="tab-pane fade show active" id="list-Pedido" role="tabpanel" aria-labelledby="list-Pedido-list"><Pedidos/></div>
                        <div className="tab-pane fade" id="list-Agendamentos" role="tabpanel" aria-labelledby="list-Agendamentos-list"><Agendamento /></div>
                        <div className="tab-pane fade" id="list-produtos" role="tabpanel" aria-labelledby="list-produtos-list"><Produtos /></div>
                        <div className="tab-pane fade" id="list-usuarios" role="tabpanel" aria-labelledby="list-usuarios-list"><Client /></div>
                        <div className="tab-pane fade" id="list-mensagens" role="tabpanel" aria-labelledby="list-mensagens-list">mensagens</div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                    <button type="button" className="close btn btn-secondary" onClick={handleClose}
                        aria-label="Close">
                        Cancelar
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <Cadastrar titulo="Atualizar Minha Conta" id={id} fechaModal={handleClose}
                        nome={nome} sexo={sexo} email={email} cpf={cpf}
                        senha={senha} categoria={categoria} />
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default PagesAdmin;