import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

class Dashboard extends Component {
  render() {
    return (
      <MainContainer>
        21321312
      </MainContainer>
    )
  }
}

export default Dashboard;
