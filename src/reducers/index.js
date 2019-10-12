import { combineReducers } from "redux";
// import { setList } from "../actions";

const list = (state = [], action) => {
  switch (action.type) {
    case "SET_LIST":
      return action.list;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  list
});

export default rootReducer;
