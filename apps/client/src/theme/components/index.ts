import type { ThemeOptions } from "@mui/material/styles/createThemeNoVars";
import { MuiBottomNavigation, MuiBottomNavigationAction } from "./BottomNavigation";
import { MuiTab, MuiTabs } from "./Tabs.ts";
import { MuiToggleButton, MuiToggleButtonGroup } from "./ToggleButtonGroup.ts";

export const components: ThemeOptions["components"] = {
  MuiBottomNavigation,
  MuiBottomNavigationAction,
  MuiTabs,
  MuiTab,
  MuiToggleButtonGroup,
  MuiToggleButton,
};
