import React from "react";

import Spreadsheet from "../src/SpreadsheetStateProvider";
import { range } from "../src/util";
import "./index.css";

export const INITIAL_ROWS = 6;
export const INITIAL_COLUMNS = 4;

const initialData = range(INITIAL_ROWS).map(() => Array(INITIAL_COLUMNS));

const Basic = () => <Spreadsheet data={initialData} />;

export default Basic;
