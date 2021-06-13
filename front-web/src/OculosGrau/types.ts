export type Product = {
    id: number; 
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

type ProductId = {
    id:number
}

type ClientId = {
    id:number
}

export type Pedido = {
    productId : ProductId[];
    quantidade: number;
    preco: number;
    client: ClientId
}