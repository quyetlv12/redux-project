import { isAdmin, isAuthenticate } from "../Auth/AuthAPI";
import axiosClient from "./axiosClient";


const ProductAPI = {
  getAll() {
    const url = "/products";
    return axiosClient.get(url);
  },
  detail(id){
    const url = `/products/${id}`
    return axiosClient.get(url)
  },
  remove(id){
    const url = `/products/${id}/${isAdmin()}`
    return axiosClient.delete(url, {
      headers: {
        Authorization: "Bearer " + isAuthenticate(),
      },
    })
  }
};
export default ProductAPI;
