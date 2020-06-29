const INITIAL_STATE = {
    user: {}
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        
        case 'LOG_IN': 
            console.log(action.payload.id)      
            return { ...state, user: action.payload }

        default:
            return { ...state }
    }
}