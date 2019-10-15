import { randInt } from "@/utils";

export default {
  expense: {
    reg: /\/app\/api\/report\/expense/,
    res: options => generatePayRes(options)
  }
};

function generatePayRes(options) {
  const searchParams = parseParams(options.url);
  return {
    code: 200,
    msg: "操作成功",
    data: generateReportData(searchParams.productList)
  }
}

function parseParams(url) {
  let searchStr = url.split("?")[1];
  if (!searchStr) {
    return {};
  }
  let ret = {};
  searchStr.split("&").forEach(n => {
    ret[n.split("=")[0]] = n.split("=")[1];
  });
  return ret;
}

function generateReportData(code) {
  let arrLength = 0;

  switch (code) {
    case "lfhk":
      arrLength = 338;
      break;
    case "timi":
      arrLength = 3;
      break;
    case "duolai":
      arrLength = 9;
      break;
    default:
      arrLength = 10;
  }

  return [...new Array(arrLength)].map((n, i) => {
    const registerCount = randInt(0, 99);
    const registerUnitPrice = randInt(0, 20);
    return {
      channelCode: "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .sort(() => Math.random() - 0.5)
        .slice(0, 7),
      summaryDate: "2019-09-05",
      createdTime: "2019-09-06 00:01:30",
      updatedTime: "2019-09-26 21:01:15",
      id: i,
      product: code,
      registerCountOriginal: registerCount,
      registerCountReal: registerCount,
      registerExpenseOriginal: registerCount * registerUnitPrice,
      registerUnitPrice,
      totalExpense: registerCount * registerUnitPrice,
      uvContributionRate: randInt(303, 560) + "%",
      uvCountOriginal: 0,
      uvCountReal: null,
      uvExpenseOriginal: 0,
      uvUnitPrice: 0
    };
  });
}
