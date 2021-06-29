import * as actionType from '../contants/actionType'
export const Login = (data) =>{
    return {
        type : actionType.LOGIN,
        data
    }
}
export const signOut = (data) =>{
    return {
        type : actionType.LOGOUT,
        data
    }
}
export const isRole = (data) =>{
    console.log("role" ,data);
    return {
       type : actionType.ROLE_USER,
    data
    } 
}