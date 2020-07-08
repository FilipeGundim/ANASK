import { IAtividade } from '../../../models/models'

interface IAction {
    type: string;
    payload: IAtividade[];
}

interface IInitalState {
    todasAtividades: IAtividade[];
}

const INITIAL_STATE: IInitalState = {
    todasAtividades: [],
}

export default function (state = INITIAL_STATE, action: IAction) {

    switch (action.type) {
        case 'GET_ATIVIDADES':

            return { ...state, todasAtividades: action.payload }

        default: return { ...state }
    }
}