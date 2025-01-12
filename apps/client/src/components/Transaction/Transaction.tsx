import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { useCurrency } from "../../hooks";

export interface TransactionProps {
  icon?: string;
  timestamp: string;
  title: string;
  amount: number;
}

export const Transaction = ({ icon, timestamp, amount, title }: TransactionProps) => {
  const currency = useCurrency();

  return (
    <Paper
      sx={({ spacing }) => ({
        p: spacing(1, 4.5),
      })}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={4} alignItems="center">
          <Avatar
            sx={{
              width: 50,
              height: 50,
            }}
            src={icon}
          >
            {title[0]}
          </Avatar>
          <Stack direction="column">
            <Typography variant="caption" color="textSecondary">
              {new Date(timestamp).toLocaleString("ru-RU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body1">{title}</Typography>
          </Stack>
        </Stack>
        <Typography>
          {amount} {currency}
        </Typography>
      </Stack>
    </Paper>
  );
};
