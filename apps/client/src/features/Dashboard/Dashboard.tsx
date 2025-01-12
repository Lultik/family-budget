import { Header } from "../../components";
import { withAccess } from "../../hoc";
import { Role } from "../../types";

const DashboardComponent = () => (
  <>
    <Header title="Dashboard" />
  </>
);

export const Dashboard = withAccess(DashboardComponent, { role: Role.Admin });
