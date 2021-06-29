import ProductAPI from "../api/productAPI";
import UserAPI from "../api/userAPI";
import AuthAPI from "../Auth";
import { isRole } from "./authAction";
import {
  addProduct,
  deleteProduct,
  detailProduct,
  loadProduct,
} from "./product";
import { loadUser, statusLogin } from "./userAcrtion";

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

export const detailProductItem = (id) => {
  return (dispatch) => {
    return ProductAPI.detail(id).then(({ data }) =>
      dispatch(detailProduct(data))
    );
  };
};

//login action
export const Login = (email, password) => {
  return (dispatch) => {
    return AuthAPI.login(email, password).then(({ data }) => {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(statusLogin(true));
      dispatch(isRole(data.role))
    });
  };
};
//logout

export const Logout = () => {
  return (dispatch) => {
    return AuthAPI.signout().then(({ data }) => {
      localStorage.removeItem("user");
      dispatch(statusLogin(false));;
    });
  };
};

//delete product
export const RemoveProduct = (id) => {
  return (dispatch) => {
    return ProductAPI.remove(id).then(({ data }) => {
      dispatch(deleteProduct(id));
    });
  };
};
//add product
export const AddProduct = (product) => {
  return (dispatch) => {
    return ProductAPI.add(product).then(({ data }) => {
      dispatch(addProduct(data));
    });
  };
};
