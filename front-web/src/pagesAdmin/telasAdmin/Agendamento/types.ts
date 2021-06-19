export type AgendamentoType = {
    id: number;
    nome: string;
    telefone: string;
    data: Date;
    horario: string;
    status: string; 
    client:client
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