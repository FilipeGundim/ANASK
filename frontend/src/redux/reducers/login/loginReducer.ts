import { IUser } from '../../../models/models'

interface IAction {
    type: string;
    payload: IUser;
}

interface IInitalState {
    user: IUser;
}

const INITIAL_STATE = {
    user: {}
}

export default function (state = INITIAL_STATE, action: IAction) {

    switch (action.type) {

        case 'LOG_IN':
            return { ...state, user: action.payload }

        default:
            return { ...state }
    }
}