import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Loading from "@/components/Loading";

import LeftMenu from "./components/LeftMenu";
import ControlBar from "./components/ControlBar";
import RefreshBtn from "./components/RefreshBtn";
import TableWrapper from "./components/TableWrapper/index";

import { canFetchReports } from "@/actions";

const MainContainer = withStyles(() => ({
  mainStyle: {
    position: "relative",
    padding: "0 0 0 136px",
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

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWrapperHeight: 600
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(canFetchReports());

    this.setState({
      tableWrapperHeight: document.body.clientHeight - 64 - 32 - 32 - 53
    });
    window.addEventListener("resize", () => {
      this.setState({
        tableWrapperHeight: document.body.clientHeight - 64 - 32 - 32 - 53
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activedMenu !== this.props.activedMenu || prevProps.date !== this.props.date) {
      const { dispatch, activedMenu } = this.props;
      dispatch(canFetchReports(activedMenu));
    }
  }

  render() {
    return (
      <MainContainer>
        <LeftMenu />
        <StyledPaper>
          <ControlBar />
          <div
            style={{
              position: "relative",
              height: this.state.tableWrapperHeight
            }}
          >
            {this.props.isFetching ? (
              <Loading />
            ) : this.props.rows.length ? (
              <TableWrapper />
            ) : (
              <RefreshBtn />
            )}
          </div>
        </StyledPaper>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  const { activedMenu, reportsByMenu } = state;
  const { isFetching, rows } = reportsByMenu[activedMenu] || {
    isFetching: true,
    rows: []
  };
  return {
    ...state,
    isFetching,
    rows
  };
};

export default connect(mapStateToProps)(Dashboard);
