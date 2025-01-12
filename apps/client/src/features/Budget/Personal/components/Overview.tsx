import { Stack } from "@mui/material";
import { OverviewRecord } from "./OverviewRecord.tsx";

const data = [
  { title: "Total balance", amount: "1100" },
  { title: "Revolut", amount: "600" },
  { title: "Pekao", amount: "400" },
  { title: "Cash", amount: "100" },
];

export const Overview = () => {
  return (
    <Stack>
      {data.map((record) => (
        <OverviewRecord key={record.title} {...record} />
      ))}
    </Stack>
  );
};
