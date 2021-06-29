import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProduct,
  detailProductItem,
  fetchProductAPI,
  fetchUserAPI,
  Login,
  RemoveProduct,
} from "../actions/FETCH_API";
import { statusLogin } from "../actions/userAcrtion";
import '../asset/css/style.css';
import Routes from "../routes";
function App() {
  const products = useSelector((state) => state.product.listProduct);
  const detailProduct = useSelector((state) => state.product.detail);
  const status = useSelector((state) => state.user.status)
  const role = useSelector((state) => state.user.role)
  console.log("role app",role);
  const dispatch = useDispatch();
  if (localStorage.getItem("user")) {
      dispatch(statusLogin(true))
    } else {
      dispatch(statusLogin(false))
    }
  useEffect(() => {
    dispatch(fetchProductAPI());
    dispatch(fetchUserAPI());
  }, []);
  const idProduct = (id) => {
    dispatch(detailProductItem(id));
  };
  const addProduct = (data) => {
    dispatch(AddProduct(data));
  };
  const removeProduct = (id) => {
    dispatch(RemoveProduct(id));
  };
  const login = (email, password) => {
    dispatch(Login(email, password));
  };
  return (
    <div className="App">
      <Routes product={products} statusLogin={status} role={role}/>
    </div>
  );
}

export default App;
