const initialState = {
  list: [],
  lisProducts : [],
  activeId: null,
};
const hobbyReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case "ADD_PRODUCT": {
      const newList = [...state.lisProducts];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case "ACTIVE_ID": {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }

    default:
      return state;
  }
};

export default hobbyReducers;
