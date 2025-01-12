import type { Components } from "@mui/material/styles/components";
import type theme from "../index.ts";

export const MuiBottomNavigation: Components<typeof theme>["MuiBottomNavigation"] = {
  defaultProps: {
    showLabels: true,
  },
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      backgroundColor: palette.background.nav,
      height: "100%",
    }),
  },
};

export const MuiBottomNavigationAction: Components<typeof theme>["MuiBottomNavigationAction"] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      "&.Mui-selected": {
        color: palette.common.white,
      },
    }),
  },
};
