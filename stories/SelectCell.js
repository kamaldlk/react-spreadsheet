import React, { Component } from "react";

import Spreadsheet from "../src/SpreadsheetStateProvider";
import { range } from "../src/util";
import { INITIAL_ROWS, INITIAL_COLUMNS } from "./Basic";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./index.css";

const initialData = range(INITIAL_ROWS).map(() => Array(INITIAL_COLUMNS));

const OPTIONS = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "caramel", label: "Caramel" }
];

const SelectView = ({ cell, getValue }) => (
  <Select value={getValue({ data: cell })} options={OPTIONS} disabled style={{ width: 200 }} />
);

class SelectEdit extends Component {
  handleChange = selection => {
    const { onChange, cell } = this.props;
    onChange({ ...cell, value: selection ? selection.value : null });
  };

  render() {
    const { getValue, column, row, cell } = this.props;
    const value = getValue({ column, row, data: cell }) || 0;
    return (
      <Select
        value={value}
        onChange={this.handleChange}
        options={OPTIONS}
        style={{ width: 200 }}
      />
    );
  }
}

initialData[2][2] = {
  value: 0,
  DataViewer: SelectView,
  DataEditor: SelectEdit
};

const CustomCell = () => <Spreadsheet data={initialData} />;

export default CustomCell;
