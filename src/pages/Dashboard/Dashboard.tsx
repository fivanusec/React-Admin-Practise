import * as React from "react";

import { MonthlyRevenue } from "./MonthlyRevenue";

interface DashboardProps {}

export const Dashboard = ({}: DashboardProps) => {
  const styles = {
    flex: { display: "flex", marginTop: "1em" },
    flexColumn: { display: "flex", flexDirection: "column" },
    leftCol: { flex: 1, marginRight: "0.5em" },
    rightCol: { flex: 1, marginLeft: "0.5em" },
    singleCol: { marginTop: "1em", marginBottom: "1em" },
  };
  return (
    <div style={styles.flex}>
      <div style={styles.leftCol}>
        <div style={styles.flex}>
          <MonthlyRevenue value="1000" />
        </div>
        <div style={styles.singleCol}></div>
        <div style={styles.singleCol}>
          {/* <PendingOrders orders={pendingOrders} /> */}
        </div>
      </div>
      <div style={styles.rightCol}>
        <div style={styles.flex}>
          {/* <PendingReviews />
          <Spacer />
          <NewCustomers /> */}
        </div>
      </div>
    </div>
  );
};
