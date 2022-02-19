import React from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { lightTheme } from "../../theme/theme";
import originalSeries from "../../data/sp500.json";

// STYLED BLOCK START
const CustomTableCell = ({ isColorCoded, positiveReturn, ...props }) => <TableCell {...props} />;

const StyledTableCell = styled(CustomTableCell, {
  name: "StyledTableCell",
  slot: "Root",
})((props) => ({
  padding: "1rem 1rem 1rem 1.5rem",
  //color: props.coloring === "true" ? (props.gainer === "true" ? "#19B64E" : "#FF0039") : "inherit",
  color: props.isColorCoded ? (props.positiveReturn ? "#19B64E" : "#FF0039") : "inherit",
  fontSize: "0.75rem",
  [lightTheme.breakpoints.up("mobile")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("tablet")]: {
    fontSize: "1.25rem",
  },
}));

// STYLED BLOCK END

// Below functionality could be extracted into a separate file...
// originalSeries is what starts...

// auxiliary function to derive cumulative returns:
const getCumulative = (arr) => {
  let result = [];
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
    //console.log(sum);
    result.push(sum);
    //console.log(result);
  });

  return result;
};

const testData = originalSeries.slice(0, 5);
const ascending = testData.reverse();
console.log("ascending"); // test
console.log(ascending); // test
const testTotalReturns = ascending.map((year) => Number.parseFloat(year.totalReturn)); // test
console.log("testTotalReturns"); // test test
console.log(testTotalReturns); // test test
const testCumulative = getCumulative(testTotalReturns);
console.log("testCumulative"); // test
console.log(testCumulative); // test
const testModified = ascending.map((year, index) => ({
  ...year,
  cumulativeReturn: testCumulative[index].toFixed(2),
})); // test
console.log("testModified"); //test
console.log(testModified); // test

// totalReturns numberizes and returns and separates them into an array
const reversedSeries = originalSeries.slice().reverse();
const totalReturns = reversedSeries.map((year) => Number.parseFloat(year.totalReturn));
// this array consists of cumulative returns derived from above function
const cumulativeReturns = getCumulative(totalReturns);
// adds cumulative returns to originalSeries..
const modifiedSeries = reversedSeries.map((year, index) => ({
  ...year,
  cumulativeReturn: cumulativeReturns[index].toFixed(2),
}));
//console.log(totalReturns); // test
//console.log(modifiedSeries); // test

const columns = [
  { id: "year", label: "Year" },
  { id: "totalReturn", label: "Total Return" },
  { id: "cumulativeReturn", label: "Cumulative Return" },
];

const styles = {
  headCell: {
    minWidth: "3rem",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "1rem 1rem 1rem 1.5rem",
    [lightTheme.breakpoints.up("mobile")]: {
      minWidth: "5rem",
      fontSize: "1rem",
    },
    [lightTheme.breakpoints.up("tablet")]: {
      minWidth: "10rem",
      fontSize: "1.25rem",
    },
  },
};

// THEN GET TO THE SLIDER PART... GOOD LUCK ALEX!
const TableComponent = () => {
  return (
    <Paper
      variant="square"
      sx={{
        width: "100%",
        overflow: "auto", // test
        margin: "3rem auto auto auto", // test
      }}
    >
      <Box
        sx={{
          border: "1px solid yellow",
          width: "100%",
        }}
      >
        SLIDER SLIDE SLIDER
      </Box>
      <TableContainer sx={{ margin: "auto", maxHeight: "80vh" }}>
        <Table stickyHeader aria-label="index performance">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} sx={styles.headCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {modifiedSeries.map((row) => (
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
