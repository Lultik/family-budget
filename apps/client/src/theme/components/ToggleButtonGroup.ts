import type { Components } from "@mui/material/styles/components";
import type theme from "../index.ts";

export const MuiToggleButtonGroup: Components<typeof theme>["MuiToggleButtonGroup"] = {
  styleOverrides: {
    root: () => ({
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
    }),
  },
};

export const MuiToggleButton: Components<typeof theme>["MuiToggleButton"] = {
  styleOverrides: {
    root: ({ theme: { palette, typography } }) => ({
      fontWeight: typography.fontWeightMedium,
      border: `1px solid ${palette.primary.light}`,

      "@media (hover: none)": {
        "&:hover": {
          backgroundColor: `${palette.primary.light} !important`,
        },
      },

      "&.Mui-selected": {
        backgroundColor: palette.primary.light,
        color: palette.common.white,
      },
    }),
  },
};
