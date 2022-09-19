import * as React from "react";

import { AppBar, AppBarProps } from "react-admin";

import { Typography } from "@mui/material";

interface CustomAppBarProps extends AppBarProps {}

export const CustomAppBar = ({ ...props }: CustomAppBarProps) => {
  return (
    <AppBar color="secondary" {...props} enableColorOnDark>
      <Typography
        variant="h6"
        color="inherit"
        sx={{
          flex: 1,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        id="react-admin-title"
      />
    </AppBar>
  );
};
