import originalSeries from "../data/sp500.json";
// Current app only uses data between 1970 and 2021 and displays it in ascending order
const ascendingOrder = originalSeries.slice(0, 52).reverse();

// Auxiliary function to derive cumulative returns
const getCumulative = (arr) => {
  let result = [];
  let sum = 0;

  arr.forEach((element) => {
    sum = sum + element;
    result.push(sum);
  });

  return result;
};

// Generates an array of objects with added cumulative returns property
export const generateInclusiveSeries = (range) => {
  // Filters out a new array based on modified range of years
  const newRangeStart = ascendingOrder.find((year) => year.year === range[0]);
  const newRangeEnd = ascendingOrder.find((year) => year.year === range[1]);
  const filteredPerNewRange = ascendingOrder.slice(
    ascendingOrder.indexOf(newRangeStart),
    ascendingOrder.indexOf(newRangeEnd) + 1
  );

  // Turns totalReturn strings into numbers
  const totalReturnsPerYear = filteredPerNewRange.map((year) =>
    Number.parseFloat(year.totalReturn)
  );

  // Generates an array of corresponding years' cumulative returns. AA
  const cumulativeReturnsPerYear = getCumulative(totalReturnsPerYear);

  // Appends cumulative returns to each year object as a new property
  const inclusiveSeries = filteredPerNewRange.map((year, index) => ({
    ...year,
    cumulativeReturn: cumulativeReturnsPerYear[index].toFixed(2),
  }));

  return inclusiveSeries;
};

// Generates an array of value labels for Slider component
export const marks = ascendingOrder
  .map((year) => ({
    value: year.year,
    label: year.year.toString(),
  }))
  .filter((year) => (year.value % 10 === 0 && year.value !== 2020) || year.value === 2021);
