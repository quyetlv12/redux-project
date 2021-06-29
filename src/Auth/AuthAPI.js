const user = JSON.parse(localStorage.getItem("user"))

export const isAuthenticate = () =>{
    if (user) {
        return user.token
    } else {
        return
    }
}
export const isUserId = () =>{
    return user.id
}
export const isRole = () =>{
    return user.role
}