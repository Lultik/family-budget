import AddIcon from "@mui/icons-material/Add";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SavingsIcon from "@mui/icons-material/Savings";
import SchoolIcon from "@mui/icons-material/School";
import { AppBar, BottomNavigation, BottomNavigationAction } from "@mui/material";
import type { BottomNavigationOwnProps } from "@mui/material/BottomNavigation/BottomNavigation";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const navItems = [
  { label: "Dashboard", value: "dashboard", icon: <DashboardIcon /> },
  { label: "Budget", value: "budget", icon: <SavingsIcon /> },
  { label: "Add", value: "add", icon: <AddIcon /> },
  { label: "Advices", value: "advices", icon: <SchoolIcon /> },
  { label: "More", value: "more", icon: <MoreHorizIcon /> },
];

export const NavigationBar = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname);

  useEffect(() => {
    setPage(location.pathname.split("/")[1]);
  }, [location]);

  const navigate = useNavigate();

  const handleChangeTab = useCallback<NonNullable<BottomNavigationOwnProps["onChange"]>>(
    (_event, newValue) => {
      navigate(newValue);
    },
    [navigate],
  );

  return (
    <AppBar position="fixed" color="transparent" sx={{ top: "auto", bottom: 0, height: 80 }}>
      <BottomNavigation value={page} onChange={handleChangeTab}>
        {navItems.map((item) => (
          <BottomNavigationAction key={item.value} label={item.label} icon={item.icon} value={item.value} />
        ))}
      </BottomNavigation>
    </AppBar>
  );
};
