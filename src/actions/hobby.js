//action creater
export const addNewHobby = (hoddby) =>{
    return {
        type : 'ADD_HOBBY',
        payload : hoddby
    }
}
export const activeId = (hoddby) =>{
    return {
        type : 'ACTIVE_ID',
        payload : hoddby
    }
}