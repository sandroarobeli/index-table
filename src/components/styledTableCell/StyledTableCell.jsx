import React from "react";
import { styled } from "@mui/system";
import TableCell from "@mui/material/TableCell";

import { lightTheme } from "../../theme/theme";

const CustomTableCell = ({ isColorCoded, positiveReturn, ...props }) => <TableCell {...props} />;

const StyledTableCell = styled(CustomTableCell, {
  name: "StyledTableCell",
  slot: "Root",
})((props) => ({
  padding: "1rem 1rem 1rem 1.5rem",
  color: props.isColorCoded ? (props.positiveReturn ? "#2D8806" : "#D12929") : "inherit",
  fontSize: "0.75rem",
  [lightTheme.breakpoints.up("mobile")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("tablet")]: {
    fontSize: "1.25rem",
  },
}));

export default StyledTableCell;
