import * as acType from "../contants/actionType";
const initialState = {
  list: [],
  listProduct: [],
  activeID: null,
  detail: {},
};
const ProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case acType.ADD_PRODUCT: {
      return {
        ...state,
        list: payload,
      };
    }
    case acType.ACTIVE_ID: {
      const id = payload.product._id;
      console.log(id);
      return {
        ...state,
        activeId: id,
      };
    }
    case acType.LOAD_PRODUCT: {
      const newList = [...payload];
      return {
        ...state,
        listProduct: newList,
      };
    }
    case acType.SHOW_PRODUCT: {
      const newData = [...payload];
      return {
        ...state,
        detail: newData,
      };
    }
    case acType.DETAIL_PRODUCT: {
      const product = { ...payload };
      return {
        ...state,
        detail: product,
      };
    }
    case acType.DELETE_PRODUCT: {
      const newList = state.listProduct.filter(product=> product._id != payload);
      return {
        ...state,
        listProduct : newList
      }
    }
    default:
      return state;
  }
};
export default ProductReducers;
