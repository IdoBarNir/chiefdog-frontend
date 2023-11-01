import { createTheme } from "@mui/material/styles";

import { colors, customBreakpoints } from "@styles/index";

const lightTheme = createTheme({
  breakpoints: customBreakpoints,
  palette: {
    mode: "light",
    background: {
      default: colors.white,
      paper: colors.light,
    },
  },
});

export default lightTheme;
