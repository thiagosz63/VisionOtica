export type PedidoType = {
    id: number;
    quantidade: number;
    preco: number;
    dataVenda: Date;
    status: string;
    client: client; 
    products:products[]
}

type client ={   
        id: number,
        nome: string,
        email: string,
        cpf: string,
        sexo: string,
        senha: string,
        categoria: string
    }

    export type products = {
    id: number,
    name: string,
    price: number,
    description:string,
    imageUri: string,
    categoria: string
}
