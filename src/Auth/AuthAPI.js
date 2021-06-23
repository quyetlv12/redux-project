const user = JSON.parse(localStorage.getItem("user"))

export const isAuthenticate = () =>{
    return user.token
}
export const isAdmin = () =>{
    return user.id
}