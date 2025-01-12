import type { Components } from "@mui/material/styles/components";
import type theme from "../index.ts";

export const MuiTabs: Components<typeof theme>["MuiTabs"] = {
  styleOverrides: {
    root: ({ theme: { palette } }) => ({
      variants: [
        {
          props: { variant: "fullWidth" },
          style: {
            backgroundColor: palette.background.header,
          },
        },
      ],
    }),
    indicator: ({ theme: { spacing, palette } }) => ({
      height: spacing(3.75 / 8),
      borderRadius: spacing(1),
      backgroundColor: palette.common.main,
    }),
    flexContainer: ({ theme: { palette, spacing } }) => ({
      variants: [
        {
          props: { variant: "fullWidth" },
          style: {
            justifyContent: "space-evenly",
            borderBottom: `${spacing(3.75 / 16)} solid ${palette.common.white}`,
          },
        },
      ],
    }),
  },
};

export const MuiTab: Components<typeof theme>["MuiTab"] = {
  styleOverrides: {
    textColorPrimary: ({ theme }) => ({
      color: theme.palette.common.main,
      "&.Mui-selected": {
        color: theme.palette.primary.dark,
        fontWeight: theme.typography.fontWeightBold,
      },
    }),
  },
};
