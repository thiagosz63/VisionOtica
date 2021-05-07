import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import './style.css';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { History } from '../history';
import clientepng from './cliente.png';

function PageUser() {
    function logout() {
        localStorage.removeItem('client-logado')
        History.push('/');
    }

    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {
        axios.post('http://localhost:8080', Values)

        .then(function (response : AxiosResponse) {
            alert('Dados Enviados com sucesso');  
            History.push('/');     
        })
        .catch(function (error: AxiosError) {
            alert('Error: Mensagem não enviada')
        });
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

        const validaCont = Yup.object().shape({
        nome: Yup.string().required(),
        telefone: Yup.string().matches(phoneRegExp, 'O número de telefone não é válido.')
    })

    return (
        <div className='container'>
           <div className="cliente-margem">
                <img src={clientepng} width="40px" height="40px" alt="" />
                <h4 className="h4-margem">Minha Conta</h4>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="list-group" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active "
                            id="list-home-list" data-toggle="list" href="#list-home" role="tab"
                            aria-controls="home">
                            Minha conta <span className=' fas fa-caret-right'></span>
                        </a>

                        <a className="list-group-item list-group-item-action"
                            id="list-profile-list" data-toggle="list" href="#list-profile" role="tab"
                            aria-controls="profile">
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
                <div className="col-md-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">home</div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
            <body>
                <div className="form-group row" id="agenda-espaco">
                    <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validaCont}>
                        <Form className="col-md-6">
                            <div>
                            <label><strong>Nome</strong><span className="spanRed">*</span></label>
                                <Field type="text" className="Contato-box" name="nome" placeholder="Digite seu Nome" />
                                <ErrorMessage className="spanRed" component='span' name='nome'/>
                            </div>
                            
                            <div>
                            <label className="top-label"><strong>Telefone</strong><span className="spanRed">*</span><br></br></label>
                            <Field type="text" name="telefone" className="contato-telefone" placeholder="(99) 99999-9999"/> 
                            <ErrorMessage className="spanRed" component='span' name='telefone'/>
                            </div>

                            <div>
                            <label className="top-label"><strong>Dia</strong><span className="spanRed">*</span></label>
                            <Field type="date" name="dia" className="contato-box"/>
                            <ErrorMessage className="spanRed" component='span' name='dia'/>
                            </div>

                            <div>
                            <label className="top-label"><strong>Horário</strong><span className="spanRed">*</span></label>
                            <Field id='hora' name='hora' as="select"
                                className='form-control form-control-sm'>
                                <option>08:30</option>
                                <option>09:00</option>
                                <option>09:30</option>
                                <option>10:00</option>
                                <option>10:30</option>
                                <option>11:00</option>
                                <option>11:30</option>
                                <option>12:00</option>
                            </Field>
                            <ErrorMessage className="spanRed" component='span' name='hora'/>
                            </div>

                            <div className="centralizar"> 
                                <button className="btn btn-info" type="submit" id="btnContEnviar" >Enviar</button>
                            </div>
                        </Form>
                    </Formik>       
                </div>          
            </body>
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageUser;