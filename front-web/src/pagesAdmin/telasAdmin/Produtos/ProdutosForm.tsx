
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import { AxiosError, AxiosResponse } from 'axios';
import { axiosPost, axiosPut } from '../../../api';
import { toast } from 'react-toastify';

interface props {
    id?: string
    titulo?: string
    name?: string
    price?: number,
    description?: string,
    imageUri?: string,
    categoria?: string
    fechaModal: () => void

}

function ProdutosForm(props: props) {
    const {
        id, titulo = 'Novo Produto',
        name, price, description, imageUri, categoria = "grau", fechaModal
    } = props;

    Yup.setLocale(pt);
    const handleSubmit = (Values: FormikValues) => {
        const file = Values.imageUri;
        const fileRead = new FileReader();

        if (id === undefined) {
            fileRead.onloadend = function () {
                Values.imageUri = fileRead.result
                axiosPost('/products', Values)
                    .then(function (response: AxiosResponse) {
                        toast.success('Dados inseridos com sucesso');
                        fechaModal();
                    })
                    .catch(function (error: AxiosError) {
                        alert(error.message)
                    });
            }
            fileRead.readAsDataURL(file)

        } else {
            if (file.name !== undefined) {
                fileRead.onloadend = function () {
                    Values.imageUri = fileRead.result
                    axiosPut(`/products/${id}`, Values)
                        .then(function (response: AxiosResponse) {
                            toast.success('Produto Atualizado com sucesso');
                            fechaModal();
                        })
                        .catch(function (error: AxiosError) {
                            toast.error("Sistema Indisponivel")
                        });
                }
                fileRead.readAsDataURL(file)
            } else {
                axiosPut(`/products/${id}`, Values)
                    .then(function (response: AxiosResponse) {
                        toast.success('Produto Atualizado com sucesso');
                        fechaModal();
                    })
                    .catch(function (error: AxiosError) {
                        toast.error("Sistema Indisponivel")
                    });
            }

        }
    }

    const validations = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.string().required(),
        description: Yup.string().required(),
        imageUri: Yup.string().required()
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

            <Formik initialValues={{
                name: name, price: price, description: description,
                imageUri: imageUri, categoria: categoria
            }}
                onSubmit={handleSubmit} validationSchema={validations}>
                {(formProps) => (
                    <Form>
                        <div className="row mt-2 ml-2 mr-2">
                            <div className="col">
                                <label >NOME*
                                    <Field type="text" name='name'
                                        placeholder="Nome" />
                                </label>
                                <ErrorMessage component='span' name='name' />
                            </div>

                            <div className="col">
                                <label>Preço*
                                    <Field type="text" placeholder="Preço"
                                        name='price' />
                                </label>
                                <ErrorMessage component='span' name='price' />
                            </div>
                        </div>

                        <div className="row mt-2 ml-2 mr-2">
                            <div className="col-md-12">
                                <label>Descrição*
                                    <Field type="text" placeholder="Descrição"
                                        name='description' />
                                </label>
                                <ErrorMessage component='span' name='description' />
                            </div>
                        </div>

                        <div className="row mt-2 ml-2 mr-2">
                            <div className="col-md-12">
                                <label>Imagem
                                    <input type="file" name="imageUri"
                                        // @ts-ignore
                                        onChange={(event) => formProps.setFieldValue('imageUri', event.target.files[0])} />
                                </label>
                                <ErrorMessage component='span' name='imageUri' />
                            </div>
                        </div>
                        <div className="col">
                            <label>Categoria
                                <Field name='categoria' as="select"
                                    className='form-control form-control-sm'>
                                    <option value={categoria}>{categoria}</option>
                                    <option value='grau'> Grau</option>
                                    <option value='sol'> Sol</option>
                                    <option value='lenteContato'>LenteContato</option>
                                </Field>
                            </label>
                        </div>
                        <div className="row mt-2 mr-2">
                            <div className="col text-center">
                                <button type='submit'
                                    className="btn btn-primary">
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    );
}

export default ProdutosForm;





