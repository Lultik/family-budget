import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { NavigationBar } from "../../components";

export const Layout = () => (
  <>
    <Box
      minHeight="calc(100vh)"
      height="100%"
      sx={({ palette }) => ({
        background: palette.background.default,
        pb: "80px",
      })}
    >
      <Outlet />
    </Box>
    <NavigationBar />
  </>
);
