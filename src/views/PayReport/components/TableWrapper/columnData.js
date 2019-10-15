export const columns = [
  { name: "index", title: "0", disabled: true },
  { name: "channelCode", title: "渠道", disabled: true },
  { name: "uvContributionRate", title: "UV贡献率(%)", disabled: true },
  { name: "uvUnitPrice", title: "U", needCalc: true },
  { name: "registerUnitPrice", title: "A", needCalc: true },
  { name: "uvCountOriginal", title: "U", disabled: true },
  { name: "registerCountOriginal", title: "A", disabled: true },
  { name: "uvCountReal", title: "U", needCalc: true },
  { name: "registerCountReal", title: "A", needCalc: true },
  { name: "uvExpenseOriginal", title: "U", disabled: true },
  { name: "registerExpenseOriginal", title: "A", disabled: true },
  { name: "totalExpense", title: "实际支出" }
];

export const columnExtensions = [
  { columnName: "index", width: 50, align: "center" },
  { columnName: "channelCode", width: 110 },
  { columnName: "uvContributionRate", width: 90, align: "right" },
  { columnName: "uvUnitPrice", width: 60, align: "right" },
  { columnName: "registerUnitPrice", width: 60, align: "right" },
  { columnName: "uvCountOriginal", width: 60, align: "right" },
  { columnName: "registerCountOriginal", width: 60, align: "right" },
  { columnName: "uvCountReal", width: 60, align: "right" },
  { columnName: "registerCountReal", width: 60, align: "right" },
  { columnName: "uvExpenseOriginal", width: 70, align: "right" },
  { columnName: "registerExpenseOriginal", width: 70, align: "right" },
  { columnName: "totalExpense", width: 130, align: "right" }
];

export const columnBands = [
  {
    title: "",
    children: [
      { columnName: "uvUnitPrice" },
      { columnName: "registerUnitPrice" }
    ]
  },
  {
    title: "系统数量",
    children: [
      { columnName: "uvCountOriginal" },
      { columnName: "registerCountOriginal" }
    ]
  },
  {
    title: "实际数量",
    children: [
      { columnName: "uvCountReal" },
      { columnName: "registerCountReal" }
    ]
  },
  {
    title: "系统支出",
    children: [
      { columnName: "uvExpenseOriginal" },
      { columnName: "registerExpenseOriginal" }
    ]
  }
];

export const totalSummaryItems = [{ columnName: "totalExpense", type: "sum" }];
