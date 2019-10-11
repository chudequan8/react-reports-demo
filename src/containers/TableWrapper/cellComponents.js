import React, { useState } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHeaderRow,
  TableBandHeader
} from "@devexpress/dx-react-grid-material-ui";
import { formatNumber } from "../../utils";
import { editReports, setActiveCell } from "../../actions";
import TextField from "@material-ui/core/TextField";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

export const HeaderCell = withStyles(
  () => ({
    cellStyle: {
      borderLeft: "1px solid rgba(224, 224, 224, 1)"
    }
  }),
  { name: "HeaderCell" }
)(({ children, classes, column, ...restProps }) => {
  return (
    <TableHeaderRow.Cell
      {...restProps}
      column={column}
      className={classes.cellStyle}
    >
      {children}
    </TableHeaderRow.Cell>
  );
});

export const BandCell = withStyles(
  () => ({
    titleStyle: {
      textAlign: "center",
      borderRight: 0,
      borderLeft: "1px solid rgba(224, 224, 224, 1)"
    }
  }),
  { name: "BandCell" }
)(({ children, tableRow, tableColumn, column, classes, ...restProps }) => {
  return (
    <TableBandHeader.Cell
      {...restProps}
      column={column}
      className={classes.titleStyle}
    >
      {children}
    </TableBandHeader.Cell>
  );
});

const mapStateToProps = state => {
  const { activeCell } = state;
  return {
    ...state,
    activeCell
    // rows: reportsByMenu[activedMenu].rows
  };
};

const StyledCell = withStyles(
  () => ({
    cellStyle: {
      fontWeight: 700
    },
    greyCell: {
      backgroundColor: "#f5f5f5",
      fontStyle: "oblique"
    },
    fontBlue: {
      color: blue[500]
    },
    fontGreen: {
      color: green[500]
    },
    inputStyle: {
      padding: 0
    }
  }),
  { name: "dq-Cell" }
)(({ column, value, classes, row, dispatch, activeCell, ...restProps }) => {
  if (activeCell.rowId === row.id && activeCell.name === column.name) {
    const [val, setVal] = useState(value === 0 ? value : value || "");
    return (
      <Table.Cell>
        <TextField
          value={val}
          autoFocus={true}
          onInput={e => setVal(e.target.value)}
          onBlur={() => {
            dispatch(setActiveCell());
            if (String(val) === String(value)) {
              return false;
            }
            const data = {
              id: row.id,
              [column.name]: val
            }
            if (column.needCalc) {
              data.totalExpense = calcTotalExpanse(row);
            }
            dispatch(editReports(data));
          }}
          inputProps={{
            className: classes.inputStyle
          }}
          onKeyPress={e =>
            e.nativeEvent.keyCode === 13 && e.nativeEvent.target.blur()
          }
        />
      </Table.Cell>
    );
  }
  return (
    <Table.Cell
      className={generateClass(column, classes)}
      onClick={() => {
        !column.disabled &&
          dispatch(
            setActiveCell({
              rowId: row.id,
              name: column.name
            })
          );
      }}
    >
      {!(
        column.title === "U" ||
        column.title === "A" ||
        column.title === "实际支出"
      )
        ? value
        : value === undefined || value === null
        ? "-"
        : value + ""}
    </Table.Cell>
  );
});

export const Cell = connect(mapStateToProps)(StyledCell);

function generateClass(column, classes) {
  let className = classes.cellStyle;
  if (column.disabled) {
    className = className + " " + classes.greyCell;
  }
  if (column.title === "U") {
    className = className + " " + classes.fontBlue;
  }
  if (column.title === "A") {
    className = className + " " + classes.fontGreen;
  }
  return className;
}

function calcTotalExpanse(row) {
  const uvExpanse =
    !row.uvUnitPrice || !row.uvCountReal
      ? 0
      : row.uvUnitPrice * row.uvCountReal;
  const registerExpanse =
    !row.registerUnitPrice || !row.registerCountReal
      ? 0
      : row.registerUnitPrice * row.registerCountReal;
  return formatNumber(uvExpanse + registerExpanse);
}