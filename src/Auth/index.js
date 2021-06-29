import { Logout } from "../actions/FETCH_API";
import axiosClient from "../api/axiosClient";


const AuthAPI = {
    login(email, password) {
        const url = `/signin?_email=${email}&_password=${password}`
        return axiosClient.post(url)
<<<<<<< HEAD
    }
=======
    }  ,
    signout(){
        const url = `/signout`
        return axiosClient.post(url)
    }  
>>>>>>> 9ec9138 (update)
}

export default AuthAPI;