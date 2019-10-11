import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/zh-CN";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { setDate } from "../actions";

const localeMap = {
  cn: frLocale
};

const useStyles = makeStyles(theme => ({
  toobar: {
    position: "relative",
    marginBottom: theme.spacing(2)
  },
  datepickerContainer: {
    width: '240px',
    "&.MuiFormControl-root .MuiOutlinedInput-input": {
      padding: '9px 14px'
    }
  },
  quickOption: {
    position: "absolute",
    top: "5px",
    left: "140px"
  },
  quickBtn: {
    padding: "2px",
    minWidth: "44px",
    marginRight: "3px"
  },
  activeQuickBtnColor: {
    color: theme.palette.primary.main
  }
}));

const ControlBar = function(props) {
  const { date, dispatch } = props;
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.toobar} xs={8}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap["cn"]}>
          <DatePicker
            className={classes.datepickerContainer}
            disableToolbar
            label="选择日期"
            format="yyyy-MM-dd"
            value={date}
            onChange={date => dispatch(setDate(date))}
            autoOk="true"
            variant="inline"
            inputVariant="outlined"
          />
        </MuiPickersUtilsProvider>
        <div className={classes.quickOption}>
          <Button
            size="small"
            color={
              date.getDate() ===
              new Date(new Date().getTime() - 1000 * 3600 * 24 * 1).getDate()
                ? "primary"
                : "default"
            }
            className={classes.quickBtn}
            onClick={() =>
              dispatch(
                setDate(new Date(new Date().getTime() - 1000 * 3600 * 24 * 1))
              )
            }
          >
            昨天
          </Button>
          <Button
            size="small"
            color={
              date.getDate() ===
              new Date(new Date().getTime() - 1000 * 3600 * 24 * 2).getDate()
                ? "primary"
                : "default"
            }
            className={classes.quickBtn}
            onClick={() =>
              dispatch(
                setDate(new Date(new Date().getTime() - 1000 * 3600 * 24 * 2))
              )
            }
          >
            前天
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ date }) => ({
  date
});

export default connect(mapStateToProps)(ControlBar);
