import { combineReducers } from 'redux'
import loginReducer from './login/loginReducer'
import atividadeReducer from './atividades/atividadeReducer'

const reducers = combineReducers({
    login: loginReducer,
    atividades: atividadeReducer
})

export default reducers;