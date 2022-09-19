import * as React from "react";

import {
  Collapse,
  List,
  ListItemIcon,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSidebarState, useTranslate } from "react-admin";

import ExpandMore from "@mui/icons-material/ExpandMore";

interface SubMenuProps {
  dense: boolean;
  handleToggle: () => void;
  icon?: React.ReactElement;
  isOpen: boolean;
  name: string;
  children: React.ReactNode;
}

export const SubMenu = ({
  dense,
  handleToggle,
  icon,
  isOpen,
  name,
  children,
}: SubMenuProps) => {
  const [sidebarIsOpen] = useSidebarState();
  const translate = useTranslate();

  const header = (
    <MenuItem dense={dense} onClick={handleToggle}>
      <ListItemIcon sx={{ minWidth: 5 }}>
        {isOpen ? <ExpandMore /> : icon}
      </ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {translate(name)}
      </Typography>
    </MenuItem>
  );

  return (
    <div>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip title={translate(name)} placement="right">
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense={dense}
          component="div"
          disablePadding
          sx={{
            "& a": {
              transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
              paddingLeft: sidebarIsOpen ? 4 : 2,
            },
          }}
        >
          {children}
        </List>
      </Collapse>
    </div>
  );
};
