import * as acType from '../contants/actionType'


export const loadUser = (user) =>{
    return {
        type : acType.LOAD_USER,
        user
    }
}
export const statusLogin = (user) =>{
    return {
        type  :acType.STATUS_LOGIN,
        user
    }
}
