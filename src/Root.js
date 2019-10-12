import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import reducer from "./reducers";
import theme from './utils/theme';
import Routes from './Routes';
// import Home from "../views/Home";

const store = createStore(reducer);

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          {/* <Route path="/" exact component={Home} /> */}
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// };

export default Root;
