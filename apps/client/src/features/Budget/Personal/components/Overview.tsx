import { Stack } from "@mui/material";
import { OverviewRecord } from "./OverviewRecord.tsx";

export const Overview = () => {
  return (
    <Stack>
      <OverviewRecord title="Total balance" amount="$1100" />

      <OverviewRecord title="Revolut" amount="$600" />
      <OverviewRecord title="Pekao" amount="$400" />

      <OverviewRecord title="Cash" amount="$100" />
    </Stack>
  );
};
