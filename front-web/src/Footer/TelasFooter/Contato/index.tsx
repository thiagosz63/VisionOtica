import './style.css';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import axios from 'axios';


function Contato() {
    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {
        axios.post('http://localhost:8080', Values)
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

        const validaCont = Yup.object().shape({
        Nome: Yup.string().required(),
        Email: Yup.string().email().required(),
        Telefone: Yup.string().matches(phoneRegExp, 'O número de telefone não é válido.')
    })

    return (
    <body >
        <div className='container '>
            <div>
                <h2 className="contato-h2">
                        Contato
                 </h2>
            </div>

            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validaCont}>
                <Form className="col-md-6">
                    <div>
                       <label>Nome <span className="spanRed">*</span></label>
                        <Field type="text" className="Contato-box" name="Nome" id="Nome" placeholder="Digite seu Nome" />
                        <ErrorMessage className="spanRed" component='span' name='Nome'/>
                    </div>

                    <div>
                    <label className="top-label">Email <span className="spanRed">*</span></label>
                    <Field type="text" className="Contato-box" name="Email"  id="Email" placeholder="Digite seu e-mail" />
                    <ErrorMessage className="spanRed" component='span' name='Email'/>
                    </div>
                    
                    <div>
                    <label className="top-label">Telefone <span className="spanRed">*</span><br></br></label>
                    <Field type="text" name="Telefone" id="Telefone" className="contato-telefone" placeholder="(__) _____-_____"  /> 
                    <ErrorMessage className="spanRed" component='span' name='Telefone'/>
                    </div>

                    <div>
                    <label htmlFor="mensagem" className="top-label">Tire suas dúvidas conosco <span className="spanRed">*</span></label>
                    <textarea className="contato-msn" name="Mensagem"  id="Mensagem"  rows={8} cols={5} placeholder="Escreva sua Mensagem..." />
                    </div>

                    <div className="centralizar"> 
                        <input className="btn btn-info" type="submit" id="btnContEnviar" value="Enviar" />
                    </div>
                </Form>
            </Formik>
        </div>
    </body>
    )
}
export default Contato;