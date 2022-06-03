import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
const DashboardLayout = () => {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item sm={3}>
          <Sidebar />
        </Grid>
        <Grid item sm={9}>
          <Header />
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardLayout;
