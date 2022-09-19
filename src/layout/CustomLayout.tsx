import * as React from "react";

import { AppBar, Layout, LayoutProps } from "react-admin";

import { Menu } from "./Menu";

interface CustomLayoutProps extends LayoutProps {}

export const CustomLayout = ({ ...props }: CustomLayoutProps) => {
  return <Layout {...props} appBar={AppBar} menu={Menu} />;
};
