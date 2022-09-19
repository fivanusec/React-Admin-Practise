import * as React from "react";

import {
  DashboardMenuItem,
  MenuItemLink,
  useSidebarState,
  useTranslate,
} from "react-admin";
import { FaMapPin, FaRegIdCard, FaUserAlt } from "react-icons/fa";

import Box from "@mui/material/Box";
import LabelIcon from "@mui/icons-material/Label";
import { SubMenu } from "./SubMenu";

interface MenuProps {
  dense?: boolean;
}
type MenuName = "menuCatalog" | "menuSales" | "menuCustomers";

export const Menu = ({ dense = false }: MenuProps) => {
  const [open] = useSidebarState();
  const translate = useTranslate();

  const [state, setState] = React.useState({
    menuCatalog: true,
    menuSales: true,
    menuCustomers: true,
  });

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <Box
      sx={{
        width: open ? 230 : 50,
        marginTop: 1,
        marginBottom: 1,
        height: "90vh",
        borderRight: "1px solid #D9D9D9",
        transition: (theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      <SubMenu
        handleToggle={() => handleToggle("menuSales")}
        isOpen={state.menuSales}
        name="pos.menu.workers"
        icon={<FaUserAlt />}
        dense={dense}
      >
        <MenuItemLink
          to="#"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.commands.name`, {
            smart_count: 2,
          })}
          leftIcon={<FaRegIdCard />}
          dense={dense}
        />
        <MenuItemLink
          to="#"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.invoices.name`, {
            smart_count: 2,
          })}
          leftIcon={<FaRegIdCard />}
          dense={dense}
        />
        <MenuItemLink
          to="#"
          state={{ _scrollToTop: true }}
          primaryText={translate(`resources.sickDays.name`, {
            smart_count: 2,
          })}
          leftIcon={<FaRegIdCard />}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuCatalog")}
        isOpen={state.menuCatalog}
        name="pos.menu.employers"
        icon={<FaUserAlt />}
        dense={dense}
      >
        {/*  */}
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuCustomers")}
        isOpen={state.menuCustomers}
        name="pos.menu.places"
        icon={<FaMapPin />}
        dense={dense}
      >
        {/*  */}
      </SubMenu>
    </Box>
  );
};
