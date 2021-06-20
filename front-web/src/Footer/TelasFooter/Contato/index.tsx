import './style.css';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { History } from '../../../history';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { axiosPost } from '../../../api';

function Contato() {
    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {
        
        axiosPost('/contato', Values)

            .then(function (response: AxiosResponse) {
                toast.success('Dados Enviados com sucesso');
                History.push('/');
            })
            .catch(function (error: AxiosError) {
                toast.error("Sistema Indisponivel")
            });
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validaCont = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        telefone: Yup.string().matches(phoneRegExp, 'O número de telefone não é válido.'),
        texto: Yup.string().required()
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
                            <Field type="text" className="Contato-box" name="nome" placeholder="Digite seu Nome" />
                            <ErrorMessage className="spanRed" component='span' name='nome' />
                        </div>

                        <div>
                            <label className="top-label">Email <span className="spanRed">*</span></label>
                            <Field type="text" className="Contato-box" name="email" placeholder="Digite seu e-mail" />
                            <ErrorMessage className="spanRed" component='span' name='email' />
                        </div>

                        <div>
                            <label className="top-label">Telefone <span className="spanRed">*</span><br></br></label>
                            <Field type="text" name="telefone" className="contato-telefone" placeholder="(99) 99999-9999" />
                            <ErrorMessage className="spanRed" component='span' name='telefone' />
                        </div>

                        <div>
                            <label htmlFor="mensagem" className="top-label">Tire suas dúvidas conosco <span className="spanRed">*</span></label>
                            <Field as="textarea" className="contato-msn" name="texto" rows={8} cols={5} placeholder="Escreva sua Mensagem..." />
                            <ErrorMessage className="spanRed" component='span' name='texto' />
                        </div>

                        <div className="centralizar">
                            <button className="btn btn-info" type="submit" id="btnContEnviar" >Enviar</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </body>
    )
}
export default Contato;