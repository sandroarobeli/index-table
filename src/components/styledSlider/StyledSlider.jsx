import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";

const StyledSlider = styled(Slider, {
  name: "StyledSlider",
  slot: "Root",
})(() => ({
  color: "primary",
  height: "0.25rem",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    color: "#96DBFA",
    height: "0.25rem",
  },
  "& .MuiSlider-thumb": {
    width: "1rem",
    height: "1rem",
    backgroundColor: "#FFFFFF",
    border: "2px solid currentColor",
  },
  "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
    boxShadow: "inherit",
  },
  "&:before": {
    display: "none",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.5,
    fontSize: "0.75rem",
  },
  "& .MuiSlider-mark": {
    width: "0.25rem",
    height: "0.25rem",
    borderRadius: "50%",
    color: "#FFFFFF",
  },
  "& .MuiSlider-markLabel": {
    fontSize: "1rem",
    fontWeight: 600,
  },
}));

export default StyledSlider;
