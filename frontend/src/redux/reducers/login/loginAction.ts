import { IUser } from "../../../models/models";

export function loGin(e: IUser){
    return{
        type: 'LOG_IN',
        payload: e
    }
}

