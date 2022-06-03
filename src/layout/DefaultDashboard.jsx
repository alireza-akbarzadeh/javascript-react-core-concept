import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
const DefaultDashboard = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid sx={{ padding: 0 }} item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10}>
          <Header />
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default DefaultDashboard;
