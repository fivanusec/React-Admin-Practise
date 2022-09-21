import React from "react";

interface SpacerProps extends React.HTMLAttributes<HTMLElement> {}

export const Spacer = ({}: SpacerProps) => {
  return (
    <span
      style={{
        width: "1em",
      }}
    />
  );
};
