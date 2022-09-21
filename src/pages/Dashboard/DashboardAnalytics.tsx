import * as React from "react";

import { Theme, useMediaQuery } from "@mui/material";

import { DisplayCard } from "./DisplayCard";
import { Spacer } from "../../components/Spacer";
import { UserIcon } from "../../icons/UserIcon";

// TODO: Use generics to improve rendering to by using rendering functions to improve media query handling

interface DashboardAnalyticsProps extends React.HTMLAttributes<HTMLElement> {}

export const DashboardAnalytics = ({}: DashboardAnalyticsProps) => {
  const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  if (isXs || isSm) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
          style={{ marginTop: "1em" }}
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
          style={{ marginTop: "1em" }}
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1em ",
        }}
      >
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
        <Spacer />
        <DisplayCard
          icon={UserIcon}
          title="resources.customers.cardDisplay"
          value="1000"
        />
      </div>
    </>
  );
};
