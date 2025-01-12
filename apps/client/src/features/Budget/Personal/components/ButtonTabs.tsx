import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
} from "@mui/material";

export interface ButtonTabsProps {
  section: string;
  handleChange: NonNullable<ToggleButtonGroupProps["onChange"]>;
}

export const ButtonTabs = ({ section, handleChange }: ButtonTabsProps) => {
  return (
    <ToggleButtonGroup value={section} exclusive onChange={handleChange} fullWidth>
      <ToggleButton value="transactions">Transactions</ToggleButton>
      <ToggleButton value="expenses">Expenses</ToggleButton>
      <ToggleButton value="goals">Goals</ToggleButton>
    </ToggleButtonGroup>
  );
};
