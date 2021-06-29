import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Logout } from "../../actions/FETCH_API";
import { isAuthenticate, isRole } from "../../Auth/AuthAPI";
import Button from "../button";

const Header = (props) => {
  console.log("role header",props.role);
  console.log(isRole());
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch(Logout());
    history.push("/signin");
  };
  console.log(props.statusLogin);
  return (
    <header className="text-white bg-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link
            to="/"
            className="mr-5 hover:text-gray-900 transition delay-300 duration-300 ease-in-out "
          >
            Trang chủ
          </Link>
          <Link
            to="/product"
            className="mr-5 hover:text-gray-900 transition delay-300 duration-300 ease-in-out "
          >
            Sản phẩm
          </Link>
          <Link
            to="/news"
            className="mr-5 hover:text-gray-900 transition delay-300 duration-300 ease-in-out "
          >
            Bài viết
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-900 transition delay-300 duration-300 ease-in-out "
          >
            Về chúng tôi
          </Link>
        </nav>
        <Link
          to="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl text-white">Heaphone</span>
        </Link>
        {props.role == 0 ? (
          <Button
            content="Quản Trị"
            textClass="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
            href="/admin/"
          />
        ) : (
          ""
        )}
        {props.statusLogin ? (
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <Button
              content="Đăng xuất"
              textClass="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
              action={logout}
            />
          </div>
        ) : (
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-5">
            <Button
              content="Đăng nhập"
              textClass="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0"
              href="/signin"
            />
            <Button
              content="Đăng kí"
              textClass="inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
              href="/signup"
            />
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
