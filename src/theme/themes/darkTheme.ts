import { createTheme } from "@mui/material/styles";

import { colors, customBreakpoints } from "@styles/index";

const darkTheme = createTheme({
  breakpoints: customBreakpoints,
  palette: {
    mode: "dark",
    background: {
      default: colors.black,
      paper: colors.dark,
    },
  },
});

export default darkTheme;
