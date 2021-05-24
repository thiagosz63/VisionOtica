
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosPost, axiosPut } from '../../../api';



interface props {
    id?: string
    titulo?: string
}

function ProdutosForm(props: props) {
    const {
        id, titulo = 'Novo Produto'
    } = props;

    Yup.setLocale(pt);

    const handleSubmit = (Values: FormikValues) => {

        if (id === undefined) {
            axiosPost('/products', Values)
                .then(function (response: AxiosResponse) {
                    alert('Dados inseridos com sucesso');

                })
                .catch(function (error: AxiosError) {
                    alert('Error: client ja cadastrado' + error)
                });
        } else {
            axiosPut(`/products/${id}`, Values)
                .then(function (response: AxiosResponse) {
                    alert('Dados Atualizados com sucesso');
                })
                .catch(function (error: AxiosError) {
                    alert('Error: client ja cadastrado' + error)
                });
        }


    }

    const validations = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.string().required(),
        description: Yup.string().required(),
        imageUri:Yup.string().required()

    })

    return (
        <div className='container homeCad'>
            <div className='row'>
                <div className='col text-center'>
                    <h5>
                        {titulo}
                    </h5>
                </div>
            </div>

            <Formik initialValues={{}} onSubmit={handleSubmit} validationSchema={validations}>
                <Form>
                    <div className="row mb-4 mt-2 ml-2 mr-2">
                        <div className="col">
                            <label >NOME*
                            <Field type="text" name='name'
                                    placeholder="Nome" />
                            </label>
                            <ErrorMessage component='span' name='name' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>Preço
                            <Field type="text" placeholder="Preço"
                                    name='price' />
                            </label>
                            <ErrorMessage component='span' name='price' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>Descrição
                             <Field type="text" placeholder="Descrição"
                                    name='description' />
                            </label>
                            <ErrorMessage component='span' name='description' />
                        </div>
                    </div>

                    <div className="row mt-2 ml-2 mr-2">
                        <div className="col-md-12">
                            <label>Imagem
                            <Field type="text" name="imageUri"
                                    placeholder="Caminho da imagem" />
                            </label>
                            <ErrorMessage component='span' name='imageUri' />
                        </div>
                    </div>
                    <div className="row mt-2 mr-2">
                        <div className="col text-center">
                            <button type='submit'
                                className="btn btn-secondary">
                                Salvar
                             </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div >
    );
}

export default ProdutosForm;





