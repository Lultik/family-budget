import { Header } from "../../components";
import { withAccess } from "../../hoc";
import { Role } from "../../types";

const AdvicesComponent = () => (
  <>
    <Header title="Financial advices" />
  </>
);

export const Advices = withAccess(AdvicesComponent, { role: Role.Admin });
