import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import close from "../Images/IconButton.png";
import rectangle from "../Images/Rectangle 51.png";
import { useNavigate } from "react-router-dom";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const pages = [
    { name: "Services",link:'/services'},
    { name: "About us",link:'/about' },
    { name: "Blogs",link:'/blogs' },
    { name: "Contact us",link:'/contact' },
  ];
  return (
    <>
      <Box>
        <Drawer
          PaperProps={{
            sx: {
              width: { xs: 390, md: 480, lg: 530 },
              backgroundColor: "#301E4E",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
          }}
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            className="close"
            sx={{
              display: "flex",
              justifyContent: "space-between",

              padding: 5,
              marginBottom: 5,
            }}
          >
            <img
              className="rectangle"
              src={rectangle}
              alt="rectangle"
              height={50}
              width={50}
            />
            <img
              src={close}
              alt="close"
              height={50}
              width={50}
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          </Box>

          <List sx={{}}>
            {pages.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText
                    sx={{ color: "white", margin: 2, fontSize: 50 }}
                  >
                    <Typography onClick={()=>navigate(page.link)} variant="h2">{page.name}</Typography>
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
          <Button
          onClick={()=>navigate('/audit')}
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#FF6E6C", margin: 5, borderRadius: 2 }}
          >
            BOOK A FREE MARKETING AUDIT
          </Button>
        </Drawer>
        <IconButton
          sx={{
            border: "1px solid #E7D7F6",
            borderRadius: "50%",
            backgroundColor: "#E7D7F6",
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon sx={{ color: "black", fontSize: 40 }} />
        </IconButton>
      </Box>
    </>
  );
};

export default DrawerComp;
