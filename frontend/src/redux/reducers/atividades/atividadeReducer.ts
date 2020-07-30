import { Reducer } from 'redux'
import { AtividadeStateReducer, atividadeActionReducer } from '../types'

const INITIAL_STATE: AtividadeStateReducer = {
    todasAtividades: [],
}

const reducer: Reducer<AtividadeStateReducer, atividadeActionReducer> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ATIVIDADES':

            return {
                ...state,
                todasAtividades: action.payload
            }

        default: return { ...state }
    }
}

export default reducer;