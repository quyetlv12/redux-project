import * as acType from "../contants/actionType";
const initialState = {
  listUser: [],
};
const userReducers = (state = initialState, { type, user }) => {
  switch (type) {
    case acType.LOAD_USER:{
        const newList = [...user]
        return {
            state , 
            listUser : newList
        }
    }
    default:
      return state;
  }
};

export default userReducers;
