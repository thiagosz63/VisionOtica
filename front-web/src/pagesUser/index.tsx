import './style.css';
import { History } from '../history';
import clientepng from './cliente.png';
import Cadastrar from '../cadastrar';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { axiosGet } from '../api';
import { AxiosError, AxiosResponse } from 'axios';
import Agendamento from './telasClientes/Agendamento';
import Pedidos from './telasClientes/Pedidos';


function PageUser() {

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
        localStorage.removeItem('client-logado')
        localStorage.removeItem("id")
        History.push('/');
    }

    return (
        <div className='container'>
            <div className="row cliente-margem">
                <img src={clientepng} width="40px" height="40px" alt="" />
                <h4 className="h4-margem">
                    Bem Vindo
                    <span> {nome}</span>
                </h4>

                <div className='col-md-4'>
                    <button className="btn btn-outline-primary" onClick={handleShow}>
                        <i className="fas fa-user-circle"></i>Minha conta
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active"
                            id="list-cart-list" data-toggle="list" href="#list-cart" role="tab"
                            aria-controls="cart">
                            Meus Pedido <span className=' fas fa-caret-right'></span>
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
                <div className="col-md-9">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-cart"
                            role="tabpanel" aria-labelledby="list-cart-list">
                            <Pedidos id={id}/>
                        </div>

                        <div className="tab-pane fade" id="list-messages"
                            role="tabpanel" aria-labelledby="list-messages-list">
                            <Agendamento idClient={id}/>
                        </div>
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
export default PageUser;