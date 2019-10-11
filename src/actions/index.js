import { getReportsData, editReportsData } from "../api";
import { forMatDate } from "../utils";
export const REQUEST_REPORTS = "REQUEST_REPORTS";
export const RECEIVE_REPORTS = "RECEIVE_REPORTS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const SET_MENU = "SET_MENU";
export const SET_DATE = "SET_DATE";
export const SET_ACTIVE_CELL = "SET_ACTIVE_CELL";
export const CLEAR_ACTIVE_CELL = "CLEAR_ACTIVE_CELL";


export const setDate = date => ({
  type: SET_DATE,
  date
});

export const setMenu = menu => ({
  type: SET_MENU,
  menu
});

export const requestReports = menu => ({
  type: REQUEST_REPORTS,
  menu
});

export const receiveReports = (menu, data) => ({
  type: RECEIVE_REPORTS,
  menu,
  data
});

export const receiveError = (msg) => (
  {
    type: RECEIVE_ERROR,
    msg
  }
)

export const editError = (msg) => (
  {
    type: 'EDIT_ERROR',
    msg
  }
)

export const setActiveCell = (data) => (data ? {
  type: SET_ACTIVE_CELL,
  data
} : {
  type: CLEAR_ACTIVE_CELL
});

// const fetchPosts = subreddit => dispatch => {
//   dispatch(requestPosts(subreddit))
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)))
// }

const fetchReports = () => (dispatch, getState) => {
  const { date, activedMenu } = getState();
  dispatch(requestReports(activedMenu));
  return getReportsData({
    summaryDate: forMatDate(date),
    productList: activedMenu
  }).then(res => {
    dispatch(receiveReports(activedMenu, res.data));
  });
};

export const editReports = (rowData) => (dispatch, getState) => {
  const { reportsByMenu, activedMenu } = getState();
  let rows = reportsByMenu[activedMenu].rows.slice();
  rows.forEach((row) => {
    if (row.id === rowData.id) {
      Object.keys(rowData).forEach((key) => {
        row[key] = rowData[key]
      })
    }
  })
  return editReportsData(rowData).then(res => {
    dispatch(res.code === 200 ? fetchReportsIfNeeded() : editError(res.msg));
  });
};

const shouldFetchReports = state => {
  const reports = state.reportsByMenu[state.activedMenu];
  if (!reports) {
    return true;
  }
  if (reports.isFetching) {
    return false;
  }
  return true;
};

export const fetchReportsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchReports(getState())) {
    return dispatch(fetchReports());
  }
};
