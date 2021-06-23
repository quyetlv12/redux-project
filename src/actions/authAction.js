import * as actionType from '../contants/actionType'
export const Login = (data) =>{
    return {
        type : actionType.LOGIN,
        data
    }
}