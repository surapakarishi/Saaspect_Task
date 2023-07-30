import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import "../App.css";

import DrawerComp from "./Drawer";

function Nav() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        width: "auto",
        margin: 0,
        height: "119px",
        padding: "48px 72px 24px 72px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "44px",
            height: "44px",
            backgroundColor: "#301E4E",
            borderRadius: "17px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        ></Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}
            className="nav"
            variant="h4"
            color={"black"}
          >
            Contact
          </Typography>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/work")}
            className="nav"
            variant="h4"
            color={"black"}
          >
            Work
          </Typography>

          <DrawerComp />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Nav;
