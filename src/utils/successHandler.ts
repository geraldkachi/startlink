import UseAuth from '../hooks/useAuth';

type IData = {
    data: object;
    meta: object & IToken;
    message: string;
}


type IToken = {
    token: string;
    secretKey: string
}


export const success = (data: IData) => {

    if(data?.meta && data?.meta?.token) {
        // set token here;
    }

    return data;
}
