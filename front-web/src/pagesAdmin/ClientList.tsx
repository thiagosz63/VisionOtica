import ClientCard from "./ClientCard";
import { Client } from "./types";

type Props = {
    clients: Client[];
}

function ProductsList({clients}: Props) {

    return (
        <div>
            <div>
                {clients.map(client => (
                    <ClientCard key={client.id} client={client}/>
                ))}   
            </div>

        </div>
    );
}
export default ProductsList;