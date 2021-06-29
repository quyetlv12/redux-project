import { isAdmin, isAuthenticate, isUserId } from "../Auth/AuthAPI";
import axiosClient from "./axiosClient";

const ProductAPI = {
  getAll() {
    const url = "/products";
    return axiosClient.get(url);
  },
  detail(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/products/${isUserId()}`;
    return axiosClient.post(url, data, {
      headers: {
        Authorization: "Bearer " + isAuthenticate(),
      },
    });
  },
  remove(id) {
    const url = `/products/${id}/${isUserId()}`;
    return axiosClient.delete(url, {
      headers: {
        Authorization: "Bearer " + isAuthenticate(),
      },
    });
  },
};
export default ProductAPI;
