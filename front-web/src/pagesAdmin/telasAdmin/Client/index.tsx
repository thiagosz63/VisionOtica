import { useEffect, useState } from "react";
import { axiosGet} from "../../../api";
import ClientList from "./ClientList";
import { ClientType } from "./types";

function Client() {
    const [ClientType, setClient] = useState<ClientType[]>([]);

    useEffect(() => {
        axiosGet('/client')
            .then(response => setClient(response.data))
            .catch(error => console.log(error))
    }, [ClientType]);

    return (
        <div>
            <ClientList clients={ClientType} />
        </div>
    );
}
export default Client;