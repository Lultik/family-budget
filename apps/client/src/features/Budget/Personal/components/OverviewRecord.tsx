import { Stack, Typography } from "@mui/material";
import { useCurrency } from "../../../../hooks";

type OverviewRecordProps = {
  title: string;
  amount: string;
};

export const OverviewRecord = ({ title, amount }: OverviewRecordProps) => {
  const currency = useCurrency();

  return (
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Typography>{title}:</Typography>
      <Typography>
        {amount} {currency}
      </Typography>
    </Stack>
  );
};
