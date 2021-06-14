import { combineReducers } from "redux";
import hobbyReducers from "./HobbyReducers";

const rootReducer = combineReducers({
    hobby : hobbyReducers
})

export default rootReducer;
