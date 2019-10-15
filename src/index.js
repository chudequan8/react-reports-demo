import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import reducer from "./reducers";
import theme from "./utils/theme";
import Routes from "./Routes";
import "./styles/index.css";
import './mock';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
