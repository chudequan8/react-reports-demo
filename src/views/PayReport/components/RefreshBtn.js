import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const ColorButton = withStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: purple["A200"]
    }
  }
}))(Button);

const RefreshBtn = function(props) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <ColorButton
        variant="contained"
        color="primary"
        size="large"
        // onClick={() => {!isFetching && dispatch(fetchReportsIfNeeded())}}
        >
        同步数据
      </ColorButton>
    </Grid>
  );
}

const mapStateToProps = state => {
  const { activedMenu, reportsByMenu } = state;
  const { isFetching } = reportsByMenu[activedMenu] || {
    isFetching: true
  }
  return {
    ...state,
    isFetching
  };
};

export default connect(mapStateToProps)(RefreshBtn);