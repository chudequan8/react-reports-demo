import fetch from "../utils/fetch";

// 获取报表数据
export function getReportsData(params) {
  return fetch({
    url: "/app/api/report/expense",
    method: "get",
    params
  });
}

// 修改报表数据
export function editReportsData(params) {
  return fetch({
    url: "/app/api/report/expense",
    method: "post",
    data: params,
    transformRequest: [
      function(data) {
        return Object.keys(data)
          .map(
            key =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    ]
  });
}

// 同步报表数据
export function transferReportsData(params) {
  return fetch({
    url: "/app/api/report/expense/transfer",
    method: "get",
    params
  });
}