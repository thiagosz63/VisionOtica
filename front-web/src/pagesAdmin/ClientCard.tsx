import { Client } from './types';

type Props = {
    client: Client;
}

function ClientCard({client}: Props) {

    return (
        <div className="eu">
            <div id="margem-id">{client.id}</div>
                <div id="margem-nome">{client.nome} </div>
                <div id="margem-email">{client.email}</div>
                <div id="margem-sexo">{client.sexo} </div>
                <div id="margem-cpf">{client.cpf}</div>
                <div id="margem-senha">{client.senha}</div>            
                <div id="margem-categoria"> {client.categoria}</div>    
        </div>
    );
}
export default ClientCard;