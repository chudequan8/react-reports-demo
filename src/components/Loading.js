import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  shading: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, .9)"
  },
  icon: {
    position: "absolute",
    fontSize: "20px",
    top: "calc(45% - 10px)",
    left: "calc(50% - 10px)"
  }
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.shading}>
      <CircularProgress className={classes.icon} />
    </div>
  );
}
