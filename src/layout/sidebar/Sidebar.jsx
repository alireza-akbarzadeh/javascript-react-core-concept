import { Paper } from "@mui/material";
import React from "react";
import MenuData from "../../data";
import Scrollbar from "../../components/Scrollbar";
import { Stack, MenuItem } from "@mui/material";
const Sidebar = () => {
  const { nav } = MenuData.Menu.default;
  return (
    <Paper sx={{ height: "100vh", overflow: "auto" }} elevation={3}>
      <Scrollbar>
        {nav.map((link, i) => (
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems="flex-start"
            key={i}
            spacing={8}
          >
            <MenuItem sx={{ width: "100%" }}>{link.title}</MenuItem>
          </Stack>
        ))}
      </Scrollbar>
    </Paper>
  );
};

export default Sidebar;
