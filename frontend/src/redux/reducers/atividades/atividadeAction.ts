import { IAtividade } from "../../../models/models"

export const setAtividades = (e: IAtividade[]) => {
    return {
        type: 'GET_ATIVIDADES',
        payload: e
    }
}