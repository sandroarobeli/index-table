import React, { useState, useMemo } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styles } from "./styles";
import { generateInclusiveSeries, marks } from "../../utilities/dataProcessors";
import StyledTableCell from "../styledTableCell/StyledTableCell";
import StyledSlider from "../styledSlider/StyledSlider";

const columns = [
  { id: "year", label: "Year" },
  { id: "totalReturn", label: "Total Return" },
  { id: "cumulativeReturn", label: "Cumulative Return" },
];

const TableComponent = () => {
  const [yearRange, setYearRange] = useState([1970, 2021]);

  const inclusiveSeries = useMemo(() => generateInclusiveSeries(yearRange), [yearRange]);

  const handleChange = (event, newRange) => {
    setYearRange(newRange);
  };

  return (
    <Paper variant="square" sx={styles.paper}>
      <Box sx={styles.sliderBox}>
        <Typography variant="h6" component="h2" sx={styles.sliderInstruction}>
          Use slider to set desired interval
        </Typography>
        <StyledSlider
          color="primary"
          value={yearRange}
          onChange={handleChange}
          marks={marks}
          min={1970}
          max={2021}
          step={1}
          valueLabelDisplay="auto"
          getAriaLabel={(index) => (index === 0 ? "Beginning year" : "Ending year")}
          getAriaValueText={(value) => value.toString()}
        />
      </Box>
      <TableContainer sx={styles.tableBox}>
        <Table stickyHeader aria-label="S&P 500 index performance">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={"left"} sx={styles.headCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {inclusiveSeries.map((row) => (
              <TableRow key={row.year} hover>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <StyledTableCell
                      key={column.id}
                      align={"left"}
                      isColorCoded={column.id === "totalReturn"}
                      positiveReturn={value > 0}
                    >
                      {value}
                      {typeof value === "string" && "%"}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableComponent;
