import { Header } from "../../components";
import { withAccess } from "../../hoc";
import { Role } from "../../types";

const AddRecordComponent = () => (
  <>
    <Header title="Add transaction" />
  </>
);

export const AddRecord = withAccess(AddRecordComponent, { role: Role.Admin });
