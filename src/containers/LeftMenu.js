import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

import { setMenu } from "../actions";

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: "100%"
  }
}));

const productLabels = [
  {
    code: "lfhk",
    label: "立方黑卡"
  },
  {
    code: "timi",
    label: "提米钱包"
  },
  {
    code: "duolai",
    label: "多来贷"
  },
  {
    code: "crm",
    label: "crm"
  }
];

const LeftMenu = function(props) {
  const { activedMenu, dispatch } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <MenuList>
        {productLabels.map((item, index) => (
          <MenuItem
            key={index}
            selected={activedMenu === item.code}
            onClick={() => dispatch(setMenu(item.code))}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

const mapStateToProps = ({ activedMenu }) => ({
  activedMenu
});

export default connect(mapStateToProps)(LeftMenu);

// const StyledMenuItem = withStyles(theme => ({
//   root: {
//     color: "black",
//     "&:focus": {
//       color: theme.palette.primary.main,
//       backgroundColor: "transparent"
//     },
//     "&.MuiListItem-root.Mui-selected": {
//       color: theme.palette.primary.main,
//       backgroundColor: "transparent"
//     }
//   }
// }))(MenuItem);
