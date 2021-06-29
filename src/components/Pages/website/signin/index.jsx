import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Login } from "../../../../actions/FETCH_API";
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
 const history =  useHistory()
  const handleOnSubmit = (data) => {
    const email = data.email 
    const password = data.password
    dispatch(Login(email,password))
    history.push("/")
  };
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.pexels.com/photos/1113804/pexels-photo-1113804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold text-center font-bold italic leading-tight mt-12">
            ĐĂNG NHẬP
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(handleOnSubmit)}>
            <div>
              <label className="block text-gray-700 font-bold">Email</label>
              <input
                type="text"
                name
                id
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 h-[60px] rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Email phải đúng định dạng hoặc không được bỏ trống
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 font-bold">Mật khẩu</label>
              <input
                type="password"
                name
                id
                placeholder="Enter Password"
                minLength={6}
                className="w-full h-[60px] px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                {...register("password", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Vui lòng nhập mật khẩu
                </span>
              )}
            </div>
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            >
              Đăng nhập
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Đăng nhập bằng Google</span>
            </div>
          </button>
          <p className="mt-8 text-center">
            Bạn chưa có tài khoản?{" "}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Tạo tài khoản !
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
