import { useEffect, useState } from "react";
import { axiosGet } from "../../../api";
import PedidoList from "./PedidoList";
import { PedidoType } from "./PedidoTypes";
import './style.css'

interface props{
    id:string
}
function Pedido(props:props) {
        
    const [PedidoType, setPedidoType] = useState<PedidoType[]>([]);
  
    useEffect(() => {
    
        axiosGet(`/pedido/${props.id}/client`)
            .then(response => setPedidoType(response.data))
            .catch(error => console.log(error))
    }, );

    return (
        <div>
            <ul className="nav nav-primary fundo">
                <li className="nav-item mt-2 ml-4">
                  <h5>Meus Pedidos</h5>
                </li>
            </ul>

            <PedidoList pedido={PedidoType} />

        </div>
    )
}
export default Pedido