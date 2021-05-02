import axios, { AxiosError, AxiosResponse } from 'axios';
import { Form, Formik, FormikValues } from 'formik';
import { History } from '../history';
import adm from './adm.png';
import './style.css';

import { useEffect, useState } from 'react';
import { fetchClient } from '../api';
import ClientList from './ClientList';
import { Client } from './types';

function PagesAdmin() {
    function logout() {
        localStorage.removeItem('admin-logado')
        History.push('/');
    }
    const handleSubmit = (Values: FormikValues) => {
        axios.get('http://localhost:8080/client', Values)

        .then(function (response : AxiosResponse) {
            alert('Dados Enviados com sucesso');  
            History.push('/');     
        })
        .catch(function (error: AxiosError) {
            alert('Error: Mensagem não enviada')
        });
    }


    const[clients,setClient] = useState<Client[]>([]);

    useEffect(() => {
        fetchClient()
        .then(response => setClient(response.data))
        .catch(error => console.log(error))

    }, [] );

    return (
        <div className='container'>
            
            <div className="adm-margem"> 
            <img src={adm} width="40px" height="40px" alt=""/>
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
                        <div className="tab-pane fade" id="list-Agendamentos" role="tabpanel" aria-labelledby="list-Agendamentos-list">Agendamentos</div>
                        
                    <Formik initialValues={{}} onSubmit={handleSubmit}>
                        <Form className="tab-pane fade" id="list-usuarios" role="tabpanel" aria-labelledby="list-usuarios-list">
                        <div className="row">
                                <div className="col">
                                <table className="table" >
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Sexo</th> 
                                        <th>Cpf</th>
                                        <th>Senha</th>
                                        <th>Categoria</th>                                        
                                    </tr>
                                    </thead>                 
                                </table>

                                <div>
                                    <ClientList clients={clients}/>
                                </div>

                                </div>
                            </div>                     
                        </Form>  
                    </Formik>

                        <div className="tab-pane fade" id="list-mensagens" role="tabpanel" aria-labelledby="list-mensagens-list">mensagens</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PagesAdmin;