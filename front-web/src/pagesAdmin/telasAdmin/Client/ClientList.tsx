import ClientCard from "./ClientCard";
import { ClientType } from "./types";

type Props = {
    clients: ClientType[];
}

function ClientList({ clients }: Props) {

    return (
        <div>
            <table className="table table-bordered table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">CPF</th>
                        <th scope="col">sexo</th>
                        <th scope="col">senha</th>
                        <th scope="col">categoria</th>
                    </tr>
                </thead>

                {clients.map(client => (
                    <ClientCard key={client.id} clients={client} />
                ))}
            </table>
        </div>
    );
}
export default ClientList;