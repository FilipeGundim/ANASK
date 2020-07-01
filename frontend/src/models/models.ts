export interface IAtividade {
    id?: number;
    titulo: string;
    descricao: string;
    data_ini: string
    data_fim: string;
    user?: IUser;
}

export interface IProjeto {
    id?: number;
    titulo: string;
    descricao: string;
    data_ini: string
    data_fim: string;
    user?: IUser;
}

export interface IUser {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    sexo: string;
    datanasc: Date;
    atividades?: IAtividade[];
}