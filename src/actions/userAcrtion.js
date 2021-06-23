import * as acType from '../contants/actionType'


export const loadUser = (user) =>{
    return {
        type : acType.LOAD_USER,
        user
    }
}
