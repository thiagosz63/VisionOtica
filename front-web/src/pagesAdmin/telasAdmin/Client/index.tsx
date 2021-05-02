import { useEffect, useState } from "react";
import { fetchClient } from "../../../api";
import ClientList from "./ClientList";
import { ClientType } from "./types";

function Client() {
    const [ClientType, setClient] = useState<ClientType[]>([]);

    useEffect(() => {
        fetchClient()
            .then(response => setClient(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <ClientList clients={ClientType} />
        </div>
    );
}
export default Client;