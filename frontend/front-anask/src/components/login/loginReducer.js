const INITIAL_STATE = {
    user_id: 1001
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'LOG_IN':       
            return { ...state, user_id: action.payload }

        default:
            return { ...state }
    }
}