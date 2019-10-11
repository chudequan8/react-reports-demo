import { combineReducers } from "redux";
import {
  REQUEST_REPORTS,
  RECEIVE_REPORTS,
  RECEIVE_ERROR,
  SET_MENU,
  SET_DATE,
  SET_ACTIVE_CELL,
  CLEAR_ACTIVE_CELL
} from "../actions";

const date = (state = new Date(), action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
};

const activedMenu = (state = "lfhk", action) => {
  switch (action.type) {
    case SET_MENU:
      return action.menu;
    default:
      return state;
  }
};

const reports = (
  state = {
    isFetching: true,
    rows: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_REPORTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_REPORTS:
      return {
        ...state,
        isFetching: false,
        rows: action.data
      };
    default:
      return state;
  }
};

const reportsByMenu = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPORTS:
    case REQUEST_REPORTS:
      return {
        ...state,
        [action.menu]: reports(state[action.menu], action)
      };
    default:
      return state;
  }
};

const activeCell = (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_CELL:
      return action.data;
    case CLEAR_ACTIVE_CELL: 
      return {};
    default:
        return state;
  }
}

const editMsg = (state = '', action) => {
  switch (action.type) {
    case 'EDIT_ERROR':
      return action.msg;
    default:
        return state;
  }
}

const rootReducer = combineReducers({
  reportsByMenu,
  activedMenu,
  date,
  activeCell,
  editMsg
});

export default rootReducer;
