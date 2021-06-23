import ProductAPI from "../api/productAPI";
import UserAPI from "../api/userAPI";
import AuthAPI from "../Auth";
import { deleteProduct, detailProduct, loadProduct } from "./product";
import { loadUser } from "./userAcrtion";


// get product
export const fetchProductAPI = () => {
  return (dispatch) => {
    return ProductAPI.getAll()
      .then(({ data }) => dispatch(loadProduct(data)))
      .catch((error) => {
        console.log(error.response.error.data);
      });
  };
};

//get user
export const fetchUserAPI = () => {
  return (dispatch) => {
    return UserAPI.getAll().then(({ data }) => {
      dispatch(loadUser(data));
    });
  };
};


//detail product

export const detailProductItem = (id) =>{
    return (dispatch) =>{
        return ProductAPI.detail(id)
            .then(({data}) => dispatch(detailProduct(data)))
    }
}


//login action 
export const Login = (email,password) =>{
  return (dispatch) =>{
    return AuthAPI.login(email,password)
      .then(({data}) =>{localStorage.setItem("user",JSON.stringify(data))})
  }
}

//delete product
export const RemoveProduct = (id) =>{
  return (dispatch) =>{
    return ProductAPI.remove(id)
     .then(({data}) => {dispatch(deleteProduct(id))})
  }
}

//add product
export const AddProduct = (product) =>{
  
}