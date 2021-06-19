import { useEffect, useState } from "react";
import { axiosGet } from "../../../api";
import MensagemList from "./MensagemList";
import { MensagemType } from "./MensagemTypes";
import './style.css'

function Mensagem() {  
    const [MensagemType, setMensagemType] = useState<MensagemType[]>([]);
  
    useEffect(() => {    
        axiosGet('/contato')
            .then(response => setMensagemType(response.data))
            .catch(error => console.log(error))
    }, );

    return (
        <div>
            <MensagemList contato={MensagemType} />
        </div>
    )
}
export default Mensagem;