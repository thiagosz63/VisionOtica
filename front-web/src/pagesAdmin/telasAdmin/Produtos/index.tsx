import { useEffect, useState } from "react";
import { axiosGet } from "../../../api";
import ProdutosList from "./ProdutoList";
import { ProdutosType } from "./produtosTypes";

function Produtos(){
    const [ProdutosType, setProdutosType] = useState<ProdutosType[]>([]);

    useEffect(() => {
        axiosGet("/products")
            .then(response => setProdutosType(response.data))
            .catch(error => console.log(error))
    }, [ProdutosType]);

    return(
        <div>
            <ProdutosList produtos={ProdutosType}/>
        </div>
    )
}
export default Produtos