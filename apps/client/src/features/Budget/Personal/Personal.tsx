import { Container, Paper, Stack, type ToggleButtonGroupProps } from "@mui/material";
import { useCallback, useState } from "react";
import { Transaction } from "../../../components/Transaction";
import { ButtonTabs } from "./components/ButtonTabs.tsx";
import { Overview } from "./components/Overview.tsx";
import { transactions } from "./mockData.ts";

export const PersonalBudget = () => {
  const [section, setSection] = useState("transactions");

  const handleChange = useCallback<NonNullable<ToggleButtonGroupProps["onChange"]>>((_event, newSection) => {
    if (newSection !== null) {
      setSection(newSection);
    }
  }, []);

  const data = transactions;

  return (
    <Container
      sx={({ spacing }) => ({
        padding: spacing(4, 2),
      })}
    >
      <Paper
        sx={({ spacing }) => ({
          padding: spacing(4),
          mb: spacing(4),
        })}
      >
        <Overview />
      </Paper>
      <ButtonTabs section={section} handleChange={handleChange} />

      <Stack direction="column" spacing={2} mt={2}>
        {data.map(({ id, ...transaction }) => (
          <Transaction key={id} {...transaction} />
        ))}
      </Stack>
    </Container>
  );
};
