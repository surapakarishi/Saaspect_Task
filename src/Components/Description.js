import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ellipse from "../Images/Ellipse.png";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: 1, sm: 6, md: 8, lg: 10 },
          display: "flex",
          flexDirection: "column",
          padding: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: {
              xs: 4,
              sm: 6,
              md: 8,
              lg: 10,
            },
            color: "#63517f",
            fontSize: {
              xs: 10,
              sm: 15,
              md: 25,
              lg: 40,
            },
          }}
        >
          WHO WE ARE
        </Typography>
        <Typography
          variant="h2"
          sx={{
            marginBottom: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
            },
            color: "#301E4E",
            fontWeight: "bold",
            fontSize: {
              xs: 35,
              sm: 60,
              md: 80,
              lg: 100,
              fontWeight: "bold",
            },
          }}
        >
          We are Extensive.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "sans-serif",
            color: "#63517f",
            fontSize: {
              xs: 10,
              sm: 20,
              md: 30,
              lg: 40,
            },
          }}
        >
          Amet minim mollit non deserunt ullamo est sit aliqua dolor do amet
          sint. Velit official conssequat duis enim velit mollit. Exercitaton
          veniam consequat nostrud amet.
        </Typography>
        <Button
          variant="contained"
          size="medium"
          onClick={() => navigate("/audit")}
          sx={{
            backgroundColor: "#301E4E",
            fontSize: 20,
            width: { xs: 320, sm: 450, md: 450, lg: 450 },

            padding: 2,

            borderRadius: 3,
            marginTop: { xs: 4, sm: 6, md: 8, lg: 10 },
            ":hover": {
              bgcolor: "#63517f",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: { xs: 15, sm: 20, md: 20, lg: 20 },
            }}
          >
            BOOK A FREE MARKETING AUDIT
          </Typography>
        </Button>
      </Box>

      {/* Ellipse */}

      <Box
        className="mobileScreen"
        width="auto"
        height="auto"
        sx={{ backgroundColor: "#E7D7F6", padding: 2 }}
      >
        <Typography
          variant="h1"
          sx={{ color: "#301E4E", fontSize: { xs: 40 }, fontWeight: "bold" }}
        >
          {" "}
          WHAT
        </Typography>
        <Typography
          variant="h1"
          sx={{ color: "#301E4E", fontSize: { xs: 40 }, fontWeight: "bold" }}
        >
          WE DO
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#0C0525",
            fontFamily: "sans-serif",
            fontSize: { xs: 10 },
            fontWeight: "bold",
          }}
        >
          We do lots of stuffs, basically adding value to your product.
        </Typography>
      </Box>
      <Box
        width="100%"
        height="auto"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: { xs: 5, sm: 10, md: 15, lg: 20 },
        }}
      >
        <Box
          className="LargeScreen"
          width="auto"
          height="auto"
          sx={{ position: "relative" }}
        >
          <img
            id="ellipse"
            src={ellipse}
            alt="ellipse"
            height={550}
            width={550}
          />
          <Box
            sx={{ position: "absolute", top: 1, marginTop: 10, marginLeft: 5 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#301E4E",
                fontWeight: "bold",
                fontSize: {
                  xs: 25,
                  sm: 50,
                  md: 60,
                  lg: 80,
                },
              }}
            >
              WHAT
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "#301E4E",
                fontWeight: "bold",
                fontSize: {
                  xs: 25,
                  sm: 50,
                  md: 60,
                  lg: 80,
                },
              }}
            >
              WE DO
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#63517f",
                fontFamily: "sans-serif",
                fontSize: {
                  xs: 12,
                  sm: 20,
                  md: 20,
                  lg: 30,
                },
                marginTop: 3,
              }}
            >
              We do lots of stuffs, basically
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#63517f",
                fontFamily: "sans-serif",
                fontSize: {
                  xs: 12,
                  sm: 20,
                  md: 20,
                  lg: 30,
                },
              }}
            >
              adding value to your product.
            </Typography>
          </Box>
        </Box>
        <Box
          width="auto"
          height="auto"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, sm: 4, md: 6, lg: 8 },
            paddingRight: { xs: 5, sm: 10, md: 15, lg: 20 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#301E4E",
              fontSize: {
                xs: 23,
                sm: 30,
                md: 40,
                lg: 60,
              },
            }}
          >
            Digital Marketing
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#301E4E",
              fontSize: {
                xs: 23,
                sm: 30,
                md: 40,
                lg: 60,
              },
            }}
          >
            Digital Marketing
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#301E4E",
              fontSize: {
                xs: 23,
                sm: 30,
                md: 40,
                lg: 60,
              },
            }}
          >
            Digital Marketing
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#301E4E",
              fontSize: {
                xs: 23,
                sm: 30,
                md: 40,
                lg: 60,
              },
            }}
          >
            Digital Marketing
          </Typography>
          <Button
            onClick={() => navigate("/work")}
            sx={{
              backgroundColor: "#301E4E",
              color: "white",
              ":hover": {
                bgcolor: "#63517f",
              },
              fontFamily: "sans-serif",
              fontSize: {
                xs: 10,
                sm: 15,
                md: 15,
                lg: 15,
              },
              width: 100,
              borderRadius: 2,
            }}
          >
            VIEW ALL
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Description;
