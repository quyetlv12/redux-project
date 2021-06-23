import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({loginActs}) => {
    const {register , handleSubmit } = useForm()
    const login = (data) =>{
        const email = data.email
        const password = data.password
        loginActs(email,password)
    }
    return (
        <form action="" onSubmit={handleSubmit(login)}>
            <input type="text" placeholder="tên đăng nhập" {...register("email")}/>
            <input type="password" placeholder="*******************" {...register("password")}/>
            <button type="submit">Đăng nhập</button>
        </form>
    )
}

export default Form
