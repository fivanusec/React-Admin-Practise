import * as React from "react";

import { SimpleForm, TextInput } from "react-admin";

import { DashboardAnalytics } from "./DashboardAnalytics";
import { RichTextInput } from "ra-input-rich-text";

interface DashboardProps {}

export const Dashboard = ({}: DashboardProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1em",
      }}
    >
      <DashboardAnalytics />
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex" }}>
          <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="body" />
          </SimpleForm>
        </div>
      </div>
    </div>
  );
};
