import { IAtividade, IUser } from "../../models/models";

export interface AtividadeStateReducer {
    todasAtividades: IAtividade[];
}

export interface atividadeActionReducer {
    type: string;
    payload: IAtividade[];
}

export interface loginStateReducer {
    user: IUser;
}

export interface loginActionReducer {
    type: string;
    payload: IUser;
}
