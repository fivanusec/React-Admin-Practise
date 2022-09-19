import { defaultTheme } from "react-admin";

export const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
        },
      },
    },
  },
};
