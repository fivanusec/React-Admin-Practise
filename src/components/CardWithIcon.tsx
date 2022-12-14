import * as React from "react";

import { Box, Card, Divider, Typography } from "@mui/material";
import { FC, createElement } from "react";
import { Link, To } from "react-router-dom";
import { Theme, useMediaQuery } from "@mui/material";

import img from "../img/img.png";

interface CardWithIconProps extends React.HTMLAttributes<HTMLElement> {
  icon: FC<any>;
  to: To;
  title?: string;
  subtitle?: string | number;
}

export const CardWithIcon = ({
  icon,
  to,
  title,
  subtitle,
  children,
}: CardWithIconProps) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  return (
    <Card
      sx={{
        minHeight: 52,
        display: "flex",
        marginTop: isSm || isXs ? "1rem" : 0,
        flexDirection: "column",
        flex: "1",
        "& a": {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    >
      <Link to={to}>
        <Box
          sx={{
            overflow: "inherit",
            padding: "16px",
            background: (theme) => `url(${img}) no-repeat`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <Box width="3em" className="icon" sx={{ marginLeft: "2em" }}>
            {createElement(icon, { fontSize: "large" })}
          </Box>
          <Box textAlign="right">
            <Typography color="textSecondary">{title}</Typography>
            <Typography variant="h5" component="h2" sx={{ color: "black" }}>
              {subtitle || " "}
            </Typography>
          </Box>
        </Box>
      </Link>
      {children && <Divider />}
      {children}
    </Card>
  );
};
