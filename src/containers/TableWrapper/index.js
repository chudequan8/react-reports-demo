import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableBandHeader,
  TableSummaryRow
} from "@devexpress/dx-react-grid-material-ui";
import { SummaryState, IntegratedSummary } from "@devexpress/dx-react-grid";
import {
  columns,
  columnExtensions,
  columnBands,
  totalSummaryItems
} from "./columnData";
import {Cell, HeaderCell, BandCell} from './cellComponents';
import { formatNumber } from "../../utils";

function renderUAText(rows) {
  return (
    "合作单价 " +
    [
      rows.some(row => row.uvUnitPrice > 0) ? "U" : "",
      rows.some(row => row.registerUnitPrice > 0) ? "A" : ""
    ]
      .filter(n => n)
      .join("/")
  );
}

const TableWrapper = function(props) {
  const { rows } = props;
  columns[0].title = rows.length.toString();
  columnBands[0].title = renderUAText(rows);

  return (
    <Grid
      rows={rows}
      columns={columns}
      rootComponent={props => (
        <Grid.Root {...props} style={{ height: "100%" }} />
      )}
    >
      <SummaryState totalItems={totalSummaryItems} />
      <IntegratedSummary />
      <VirtualTable
        height="auto"
        cellComponent={Cell}
        columnExtensions={columnExtensions}
      />
      <TableHeaderRow cellComponent={HeaderCell} />
      <TableBandHeader columnBands={columnBands} cellComponent={BandCell} />
      <TableSummaryRow
        messages={{ sum: "总支出" }}
        itemComponent={({ getMessage, value }) => (
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.87)"
            }}
          >
            {getMessage("sum") + ": " + formatNumber(value)}
          </div>
        )}
      />
    </Grid>
  );
};

const mapStateToProps = state => {
  const { activedMenu, reportsByMenu } = state;
  return {
    ...state,
    rows: reportsByMenu[activedMenu].rows.map((row, index) => ({
      ...row,
      index
    }))
  };
};

export default connect(mapStateToProps)(TableWrapper);
