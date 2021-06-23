import { combineReducers } from "redux";
import hobbyReducers from "./HobbyReducers";
import ProductReducers from "./productReducers";
import userReducers from "./userReducers";
const rootReducer = combineReducers({
  hobby: hobbyReducers,
  product : ProductReducers,
  user : userReducers
});

export default rootReducer;
