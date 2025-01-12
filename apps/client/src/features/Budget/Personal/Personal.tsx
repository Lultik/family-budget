import { Container, Paper } from "@mui/material";
import { ButtonTabs } from "./components/ButtonTabs.tsx";
import { Overview } from "./components/Overview.tsx";

export const PersonalBudget = () => {
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
      <ButtonTabs />
    </Container>
  );
};
