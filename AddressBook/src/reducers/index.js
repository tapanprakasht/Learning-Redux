import { combineReducers } from "redux";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contact: dataReducer
});

export default rootReducer;
