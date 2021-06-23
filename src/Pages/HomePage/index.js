import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from '../../components/Form'
import {
  detailProductItem,
  fetchProductAPI,
  fetchUserAPI,
  Login,
  RemoveProduct,
} from "../../actions/FETCH_API";
import Card from "../../components/card";
import Detail from "../../components/detailProduct";
import { isAuthenticate } from "../../Auth/AuthAPI";

const HomePage = (props) => {
  const products = useSelector((state) => state.product.listProduct);
  const detailProduct = useSelector((state) => state.product.detail);
  console.log("đây là sản phẩm", detailProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductAPI());
    dispatch(fetchUserAPI());
  }, []);
  const idProduct = (id) => {
    dispatch(detailProductItem(id));
  };
  const removeProduct = (id) =>{
    dispatch(RemoveProduct(id))
  }
  const login = (email , password) =>{
    dispatch(Login(email,password))
  }
  return (
    <div>
      <form action="">
        <input
          className=" bg-red-500  text-white  border-gray-900  mt-1"
          type="text"
        />
        <button className="" type="submit">
          Thêm sản phẩm
        </button>
      </form>
      <div className="grid  grid-cols-2">
        <Card list={products} detail={detailProduct} delete={removeProduct} getId={idProduct}></Card>
        <Detail detail={detailProduct}></Detail>
        <Form loginActs={login}/>
      </div>
    </div>
  );
};

export default HomePage;
