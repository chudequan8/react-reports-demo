# react-reports-demo
a demo about my company statement by using react

## 开发
```
  # 克隆项目
  git clone https://github.com/chudequan8/react-reports-demo.git
  
  # 安装依赖
  yarn 或cnpm install
  
  # 启动服务
  yarn start 或 npm start
```
浏览器会自动打开 http://localhost:3000 访问页面。

## 说明
* 所有数据由mockjs随机生成
* 表格中实际数据都可以像excel一样点击编辑，然后自动计算出总支出。
* h5页面的金额和期限都可以修改，系统会自动计算出利息和还款额。

## 目录结构

```
.
├── README.md
├── config-overrides.js
├── package.json
├── public
│   └── index.html
├── release.js
├── src
│   ├── Routes.js
│   ├── actions
│   │   └── index.js
│   ├── api
│   │   └── index.js
│   ├── assets
│   │   ├── default-avatar.jpg
│   │   └── hydrus_logo.svg
│   ├── components
│   │   ├── Loading.js
│   │   ├── Picker.js
│   │   ├── Posts.js
│   │   ├── RouteWithLayout
│   │   │   ├── RouteWithLayout.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── index.js
│   ├── layouts
│   │   ├── Main
│   │   │   ├── Main.js
│   │   │   ├── components
│   │   │   │   ├── Sidebar
│   │   │   │   │   ├── Sidebar.js
│   │   │   │   │   ├── components
│   │   │   │   │   │   ├── Profile
│   │   │   │   │   │   │   ├── Profile.js
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   ├── SidebarNav
│   │   │   │   │   │   │   ├── SidebarNav.js
│   │   │   │   │   │   │   └── index.js
│   │   │   │   │   │   └── index.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── Topbar
│   │   │   │   │   ├── Topbar.js
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── mock
│   │   ├── index.js
│   │   └── modules
│   │       ├── income.js
│   │       ├── index.js
│   │       └── pay.js
│   ├── reducers
│   │   └── index.js
│   ├── styles
│   │   └── index.css
│   ├── utils
│   │   ├── fetch.js
│   │   ├── index.js
│   │   └── theme.js
│   └── views
│       ├── H5Page
│       │   └── index.js
│       ├── PayReport
│       │   ├── PayReport.js
│       │   ├── components
│       │   │   ├── ControlBar.js
│       │   │   ├── LeftMenu.js
│       │   │   ├── RefreshBtn.js
│       │   │   └── TableWrapper
│       │   │       ├── cellComponents.js
│       │   │       ├── columnData.js
│       │   │       └── index.js
│       │   └── index.js
│       └── index.js
└── yarn.lock
```

