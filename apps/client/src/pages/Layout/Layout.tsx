import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { NavigationBar } from "../../components";

export const Layout = () => (
  <>
    <main>
      <Box
        minHeight="100vh"
        height="100%"
        sx={({ palette }) => ({
          background: palette.background.default,
        })}
      >
        <Outlet />
      </Box>
    </main>
    <NavigationBar />
  </>
);
