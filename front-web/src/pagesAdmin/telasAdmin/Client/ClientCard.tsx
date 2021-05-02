import { ClientType } from './types';

type Props = {
    client: ClientType;
}

const ClientCard = ({ client }: Props) => {

    return (
        <tbody>
            <tr>
                <th scope="row">{client.id}</th>
                <td>{client.nome}</td>
                <td>{client.email}</td>
                <td>{client.cpf}</td>
                <td>{client.sexo}</td>
                <td>{client.senha}</td>
                <td>{client.categoria}</td>
            </tr>
        </tbody>
    );
}
export default ClientCard;