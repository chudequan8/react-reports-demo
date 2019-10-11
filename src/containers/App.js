import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { fetchReportsIfNeeded } from "../actions";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import LeftMenu from "./LeftMenu";
import ControlBar from "./ControlBar";
import RefreshBtn from "./RefreshBtn";
import TableWrapper from "./TableWrapper/index";
import Loading from "../components/Loading";

const MainContainer = withStyles(() => ({
  mainStyle: {
    position: "relative",
    padding: "0 0 0 128px",
    minHeight: "400px",
    height: "100%"
  }
}))(props => {
  const { classes, ...restProps } = props;
  return (
    <Container
      {...restProps}
      maxWidth="lg"
      className={classes.mainStyle}
    ></Container>
  );
});

const StyledPaper = withStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}))(props => {
  const { classes, ...restProps } = props;
  return <Paper {...restProps} className={classes.paper}></Paper>;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWrapperHeight: 600
    };
  }

  componentDidMount() {
    const { dispatch, activedMenu } = this.props;
    dispatch(fetchReportsIfNeeded(activedMenu));

    this.setState({
      tableWrapperHeight: document.body.clientHeight - 77 - 24
    })
    window.addEventListener('resize', () => {
      this.setState({
        tableWrapperHeight: document.body.clientHeight - 77 - 24
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activedMenu !== this.props.activedMenu || prevProps.date !== this.props.date) {
      const { dispatch, activedMenu } = this.props;
      dispatch(fetchReportsIfNeeded(activedMenu));
    }
  }

  render() {
    return (
      <MainContainer>
        <LeftMenu />
        <StyledPaper>
          <ControlBar />
          <div style={{
            position: 'relative',
            height: this.state.tableWrapperHeight
          }}>
            {
              this.props.isFetching ? <Loading /> : this.props.rows.length ? <TableWrapper /> : <RefreshBtn />
            }
          </div>
        </StyledPaper>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  const { activedMenu, reportsByMenu } = state
  const { isFetching, rows } = reportsByMenu[activedMenu] || {
    isFetching: true,
    rows: []
  }
  return {
    ...state,
    isFetching,
    rows
  }
};

export default connect(mapStateToProps)(App);
