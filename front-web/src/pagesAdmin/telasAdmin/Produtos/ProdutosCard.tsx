import { AxiosError, AxiosResponse } from "axios";
import { axiosDelete } from "../../../api";
import { ProdutosType } from "./produtosTypes"

type Props = {
    produtos: ProdutosType
}
const ProdutosCard = ({ produtos }: Props) => {

    function btnApagar() {
        axiosDelete(`/products/ ${produtos.id}`)
            .then(function (response: AxiosResponse) {
                alert('Dados apagado com sucesso');
            })
            .catch(function (error: AxiosError) {
                alert(error.message)
            });
    }

    return (
        <tbody>
            <tr>
                <th scope="row">
                    <button className='btn btn-outline-primary w-100' data-toggle="modal"
                        data-target="#ProdutosModal"
                        title="Inserir">
                        <i className="fas fa-plus "></i>
                    </button>
                </th>

                <td>
                    <button className='btn btn-outline-danger w-100' onClick={btnApagar}
                        title="Apagar">
                        <i className="fas fa-times "></i>
                    </button>
                </td>

                <td>
                    <button
                        className='btn btn-outline-success w-100' title="Editar"
                    >
                        <i className="fas fa-user-edit"></i>
                    </button>
                </td>
                <td> {produtos.id}</td>
                <td> {produtos.name}</td>
                <td> R${produtos.price}</td>
                <td> {produtos.description}</td>
                <td> <img width={100} src={produtos.imageUri} alt={produtos.name} /></td>
            </tr>
        </tbody >
    )
}
export default ProdutosCard