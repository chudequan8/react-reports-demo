import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

import { Sidebar, Topbar } from "./components";
import CustomizedSnackbars from "@/components/Toast";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 64,
    height: "100%"
  },
  shiftContent: {
    paddingLeft: 200
  },
  content: {
    height: "100%",
    padding: theme.spacing(2)
  }
}));

const Main = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: true
      })}
    >
      <Topbar />
      <Sidebar open={true} variant={"persistent"} />
      <main className={classes.content}>{children}</main>
      <CustomizedSnackbars />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
