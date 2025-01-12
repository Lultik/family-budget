import { Tab, Tabs, type TabsProps } from "@mui/material";
import type { TabOwnProps } from "@mui/material/Tab/Tab";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

export interface HeaderTabsProps {
  tabs: TabOwnProps[];
}

export const HeaderTabs = ({ tabs }: HeaderTabsProps) => {
  const navigate = useNavigate();

  const [value, setValue] = useState("/budget/personal");

  const handleChange = useCallback<NonNullable<TabsProps["onChange"]>>(
    (_event, newValue) => {
      navigate(newValue);
      setValue(newValue);
    },
    [navigate],
  );

  return (
    <Tabs value={value} onChange={handleChange} variant="fullWidth">
      {tabs.map((tab) => (
        <Tab key={tab.value} {...tab} />
      ))}
    </Tabs>
  );
};
