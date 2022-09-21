import * as React from "react";

import { CardWithIcon } from "../../components/CardWithIcon";
import { useTranslate } from "react-admin";

interface DisplayCardProps extends React.HTMLAttributes<HTMLElement> {
  value?: string;
  /**
   * @type Title: string
   * Input title from i18n file
   */
  title?: string;
  icon?: React.FC<any>;
}

export const DisplayCard = ({
  value,
  title,
  icon,
  ...props
}: DisplayCardProps) => {
  const translate = useTranslate();

  return (
    <CardWithIcon
      to="#"
      icon={icon as React.FC<any>}
      title={translate(title!)}
      subtitle={value}
      {...props}
    />
  );
};
