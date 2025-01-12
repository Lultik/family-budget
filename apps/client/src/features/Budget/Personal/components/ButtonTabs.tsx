import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
} from "@mui/material";
import { useCallback, useState } from "react";

export const ButtonTabs = () => {
  const [section, setSection] = useState("transactions");

  const handleChange = useCallback<NonNullable<ToggleButtonGroupProps["onChange"]>>(
    (_event, newSection) => {
      if (newSection !== null) {
        setSection(newSection);
      }
    },
    [],
  );

  return (
    <ToggleButtonGroup value={section} exclusive onChange={handleChange} fullWidth>
      <ToggleButton value="transactions">Transactions</ToggleButton>
      <ToggleButton value="expenses">Expenses</ToggleButton>
      <ToggleButton value="goals">Goals</ToggleButton>
    </ToggleButtonGroup>
  );
};
