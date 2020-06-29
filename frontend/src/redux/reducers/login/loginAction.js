export function loGin(e){
    console.log(e);
    return{
        type: 'LOG_IN',
        payload: e
    }
}

