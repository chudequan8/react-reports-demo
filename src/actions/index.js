import { getReportsData } from "../api";
import { forMatDate } from "../utils";

export const setDate = date => ({
  type: 'SET_DATE',
  date
});

export const setMenu = menu => ({
  type: 'SET_MENU',
  menu
});

export const setActiveCell = (data) => {
  return data ? {
    type: 'SET_ACTIVE_CELL',
    data
  } : {
    type: 'CLEAR_ACTIVE_CELL'
  }
};

export const setMsg = (status, msg, msgType) => {
  return status === 1 ? {
    type: 'OPEN_MESSAGE',
    msg,
    messageType: msgType || 'error'
  } : {
    type: 'CLOSE_MESSAGE',
  }
}

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
  return dispatch(receiveReports(activedMenu, rows))
};

export const requestReports = menu => ({
  type: 'REQUEST_REPORTS',
  menu
});

export const receiveReports = (menu, data) => ({
  type: 'RECEIVE_REPORTS',
  menu,
  data
});

export const canFetchReports = () => (dispatch, getState) => {
  const state = getState();
  const reports = state.reportsByMenu[state.activedMenu] || {};
  if (reports.isFetching) {
    return Promise.resolve();
  }
  return dispatch(fetchReports());
}

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