import * as acType from "../contants/actionType";
const initialState = {
  listUser: [],
  status : false,
  role : null
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
    case acType.STATUS_LOGIN: {
      const status_login = user
      console.log(status_login);
      return {
        state ,
        status : status_login
      }
    }
    case acType.ROLE_USER : {
      const role = user
      console.log("reducers" ,role);
      return {
        state ,
        status : role
      }
    }
    default:
      return state;
  }
};

export default userReducers;
