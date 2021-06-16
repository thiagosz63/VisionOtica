import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosPost } from '../../../api';
import { toast } from 'react-toastify';

interface props {
    fechaModal: () => void
    idClient:string
}
function AgendamentoForm(props: props) {
    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {

        axiosPost('/agendamento', Values)
            .then(function (response: AxiosResponse) {
                toast.success('Agendamento Efetuado com sucesso')
                props.fechaModal();
            })
            .catch(function (error: AxiosError) {
                toast.error("Error: Sistema Indisponivel")
            });
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validaCont = Yup.object().shape({
        nome: Yup.string().required(),
        telefone: Yup.string().matches(phoneRegExp, 'O número de telefone não é válido.'),
        data: Yup.date().required("Data Obrigatória").nullable()
    })

    return (
        <div className='container'>
        <div className="row form-group " id="agenda-espaco">
            <Formik initialValues={{client:{ "id": props.idClient}}} onSubmit={handleSubmit} validationSchema={validaCont}>
                <Form className="col-md-6">
                    <div>
                        <label><strong>Nome</strong><span className="spanRed">*</span></label>
                        <Field type="text" className="Contato-box" name="nome" placeholder="Digite seu Nome" />
                        <ErrorMessage className="spanRed" component='span' name='nome' />
                    </div>

                    <div>
                        <label className="top-label"><strong>Telefone</strong><span className="spanRed">*</span><br></br></label>
                        <Field type="text" name="telefone" className="contato-telefone" placeholder="(99) 99999-9999" />
                        <ErrorMessage className="spanRed" component='span' name='telefone' />
                    </div>

                    <div>
                        <label className="top-label"><strong>Dia</strong><span className="spanRed">*</span></label>
                        <Field type="date" name="data" className="contato-box" />
                        <ErrorMessage className="spanRed" component='span' name='data' />
                    </div>

                    <div>
                        <label className="top-label"><strong>Horário</strong><span className="spanRed">*</span></label>
                        <Field id='horario' name='horario' as="select"
                            className='form-control form-control-sm'>
                            <option selected>Escolha um Horario</option>
                            <option value="horario">08:30</option>
                            <option value="horario">09:00</option>
                            <option value="horario">09:30</option>
                            <option value="horario">10:00</option>
                            <option value="horario">10:30</option>
                            <option value="horario">11:00</option>
                            <option value="horario">11:30</option>
                            <option value="horario">12:00</option>
                        </Field>
                        <ErrorMessage className="spanRed" component='span' name='horario' />

                        <Field name="client" type="hidden"/>
                    </div>

                    <div className="centralizar">
                        <button className="btn btn-info" type="submit" id="btnContEnviar" >Enviar</button>
                    </div>
                </Form>
            </Formik>
        </div>
        </div>

    )
}

export default AgendamentoForm