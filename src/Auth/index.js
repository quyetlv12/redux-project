import axiosClient from "../api/axiosClient";


const AuthAPI = {
    login(email, password) {
        const url = `/signin?_email=${email}&_password=${password}`
        return axiosClient.post(url)
    }
}

export default AuthAPI;