import { createTheme } from "@mui/material/styles";
import { components } from "./components";
import { palette } from "./palette.ts";
import { typography } from "./typography.ts";

const theme = createTheme({
  palette,
  typography,
  components,
});

export default theme;
