import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
};

const theme = extendTheme({ breakpoints, colors });

export default theme;
