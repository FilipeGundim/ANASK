import { Reducer } from 'redux'
import { loginStateReducer, loginActionReducer } from '../types'
import { IUser } from '../../../models/models'

const INITIAL_STATE: loginStateReducer = {
    user: {} as IUser
}

const reducer: Reducer<loginStateReducer, loginActionReducer> = 
(state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'LOG_IN':
            return {
                ...state,
                user: action.payload
            }

        default:
            return { ...state }
    }
}

export default reducer;