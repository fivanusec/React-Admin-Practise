import * as React from "react";

import { Admin, Resource } from "react-admin";

import { CustomLayout } from "./layout/CustomLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { QueryClient } from "react-query";
import customEnglishMessages from "./i18n/en";
import polyglotI18nProvider from "ra-i18n-polyglot";
import theme from "./theme";

const App = () => {
  const queryClient = new QueryClient();

  const i18nProvider = polyglotI18nProvider(() => {
    return customEnglishMessages;
  }, "en");

  return (
    <Admin
      i18nProvider={i18nProvider}
      theme={theme}
      queryClient={queryClient}
      layout={CustomLayout}
      dashboard={Dashboard}
    >
      <Resource name="name" />
    </Admin>
  );
};

export default App;
