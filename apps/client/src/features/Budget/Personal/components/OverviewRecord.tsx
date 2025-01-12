import { Stack, Typography } from "@mui/material";

type OverviewRecordProps = {
  title: string;
  amount: string;
};

export const OverviewRecord = ({ title, amount }: OverviewRecordProps) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Typography>{title}:</Typography>
      <Typography>{amount}</Typography>
    </Stack>
  );
};
