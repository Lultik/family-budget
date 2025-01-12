import { Outlet } from "react-router";
import { Header } from "../../components";
import { HeaderTabs } from "../../components/HeaderTabs";
import { withAccess } from "../../hoc";
import { Role } from "../../types";
import { tabs } from "./Budget.config.ts";

const BudgetComponent = () => {
  return (
    <>
      <Header title="Budget" />
      <HeaderTabs tabs={tabs} />
      <Outlet />
    </>
  );
};

export const Budget = withAccess(BudgetComponent, { role: Role.Admin });
