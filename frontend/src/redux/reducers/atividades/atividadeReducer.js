const INITIAL_STATE = {
    todasAtividades: []
}

export default function (state = INITIAL_STATE, action) {
 
    switch (action.type) {
        case 'GET_ATIVIDADES':
    
        return { ...state, todasAtividades: action.payload }

        default: return {...state}
    }
}