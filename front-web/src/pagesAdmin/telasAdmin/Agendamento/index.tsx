import { useEffect, useState } from "react";
import { axiosGet} from "../../../api";
import AgendamentoList from "./AgendamentoList";
import { AgendamentoType } from "./types";


function Agendamento() {
    const [AgendamentoType, setAgendamento] = useState<AgendamentoType[]>([]);

    useEffect(() => {
        axiosGet('/agendamento')
            .then(response => setAgendamento(response.data))
            .catch(error => console.log(error))
    }, [AgendamentoType]);

    return (
        <div>
            <AgendamentoList agendamentos={AgendamentoType} />
        </div>
    );
}
export default Agendamento;