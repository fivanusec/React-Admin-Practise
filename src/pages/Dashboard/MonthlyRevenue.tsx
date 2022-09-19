import * as React from "react";

import { CardWithIcon } from "../../components/CardWithIcon";
import { UserIcon } from "../../icons/UserIcon";
import { useTranslate } from "react-admin";

interface MonthlyRevenueProps {
  value?: string;
}

export const MonthlyRevenue = ({ value }: MonthlyRevenueProps) => {
  const translate = useTranslate();
  return (
    <CardWithIcon to="#" icon={UserIcon} title="Revenue" subtitle={value} />
  );
};
