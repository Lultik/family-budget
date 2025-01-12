import { withAccess } from "../../hoc";
import { Role } from "../../types";

const MoreComponent = () => <>More</>;

export const More = withAccess(MoreComponent, { role: Role.Admin });
