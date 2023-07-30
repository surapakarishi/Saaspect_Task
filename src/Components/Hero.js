import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import hero from "../Images/Hero.png";
import "../App.css";

const Hero = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <img
          className="hero"
          src={hero}
          alt="hero"
          height="100%"
          width="100%"
        />
        <Box
          id="heroText1"
          sx={{
            backgroundColor: "#FFFFFF",
            opacity: 0.5,
            position: "absolute",
            bottom: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            paddingLeft: 7,
            height: "494px",
            width: "732px",
          }}
        >
          <Typography
            variant="h1"
            sx={{ color: "#301E4E", fontWeight: "bold" }}
          >
            We are
          </Typography>
          <Typography
            variant="h1"
            sx={{ color: "#B7364A", fontWeight: "bold" }}
          >
            Extensive.
          </Typography>
          <Typography variant="h2" sx={{ color: "#301E4E" }}>
            Helping you stand out in a{" "}
          </Typography>
          <Typography variant="h2" sx={{ color: "#301E4E", marginBottom: 6 }}>
            crowded market
          </Typography>
        </Box>
        <Box
          id="heroText2"
          sx={{
            backgroundColor: "#FFFFFF",
            opacity: 0.5,
            position: "absolute",
            bottom: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            paddingLeft: 7,
            height: "240px",
            width: "376px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#301E4E", fontWeight: "bold" }}
          >
            We are
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#B7364A", fontWeight: "bold" }}
          >
            Extensive.
          </Typography>
          <Typography variant="h5" sx={{ color: "#301E4E" }}>
            Helping you stand out in a{" "}
          </Typography>
          <Typography variant="h5" sx={{ color: "#301E4E", marginBottom: 6 }}>
            crowded market
          </Typography>
        </Box>
        <Box
          id="heroText3"
          sx={{
            backgroundColor: "#FFFFFF",
            opacity: 0.5,
            position: "absolute",
            bottom: 110,

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 7,
            height: "90px",
            width: "310px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#301E4E", fontWeight: "bold" }}
          >
            We are <span style={{ color: "#B7364A" }}> Extensive.</span>
          </Typography>

          <Typography variant="h6" sx={{ color: "#301E4E" }}>
            Helping you stand out in a crowded market
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
