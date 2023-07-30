import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, createTheme, Paper, Link, ThemeProvider } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import testimonial from "../Images/testimonial.png";
import pin from "../Images/Vector-pin.png";
import fLogo from "../Images/flogo.png";
import saas from "../Images/Vector-saas.png";
import vLetter from "../Images/vue.png";
import Pwa from "../Images/PWA.png";
import pinsm from "../Images/Vector-pinmobile.png";
import square from "../Images/Vector-square.png";
import paypal from "../Images/Vector-paypal.png";
import slack from "../Images/mobile slack.png";
// import { useNavigate } from "react-router-dom";
import "../App.js";
const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#301E4E",
    color: "white",
    padding: 3,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    height: "150px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 55,
    marginBottom: 1,
  },
  centerLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
    gap: 15,
    paddingRight: 30,
    fontSize: 16,
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
  },
  copyright: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    marginLeft: 1,
    marginRight: 1,
    color: "white",
    "&:hover": {
      color: "red",
    },
  },
}));

const Footer = () => {
  const Large = [
    { image: pin, caption: "Pinterest" },
    { image: fLogo, caption: "Pinterest" },
    { image: Pwa, caption: "Pinterest" },
    { image: saas, caption: "saas" },
    { image: vLetter, caption: "Pinterest" },
  ];
  const small = [
    { image: pinsm, caption: "Pinterest" },
    { image: square, caption: "square" },
    { image: paypal, caption: "paypal" },
    { image: slack, caption: "slack" },
  ];

  const footerLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Contact us", link: "/contact" },
    { name: "Book Audit", link: "/audit" },
    { name: "Our Services", link: "/services" },
    { name: "Blogs", link: "/blogs" },
  ];
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair Display"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "white",
          p: 6,
          marginBottom: 3,
          marginTop: 3,
        }}
        maxWidth="auto"
      >
        <Box className="partners" marginBottom={5}>
          <Typography
            className="partners"
            variant="h2"
            sx={{
              color: "#301E4E",
              fontSize: {
                xs: 30,
                sm: 60,
                md: 80,
                lg: 100,
              },
            }}
          >
            <b>Our</b>
          </Typography>
          <Typography
            className="partners"
            variant="h2"
            sx={{
              color: "#301E4E",
              fontSize: {
                xs: 30,
                sm: 60,
                md: 80,
                lg: 100,
              },
            }}
          >
            <b>Partners.</b>
          </Typography>
          <Typography
            id="PartnerSubtext1"
            variant="h5"
            color="error"
            sx={{ fontFamily: "sans-serif" }}
          >
            Your success is our success
          </Typography>
          <Typography
            id="PartnerSubtext2"
            variant="h5"
            color="error"
            sx={{ fontFamily: "sans-serif" }}
          >
            We do lots of stuffs, basically adding value to your product
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {Large.map((item, index) => {
            return (
              <figure key={index} className="OurPartnerimagesLargeRow">
                <img src={item.image} alt="pin" height={100} width={100} />
                <figcaption>{item.caption} </figcaption>
              </figure>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {Large.map((item, index) => {
            return (
              <figure key={index} className="OurPartnerimagesLargeRow">
                <img src={item.image} alt="pin" height={100} width={100} />
                <figcaption>{item.caption} </figcaption>
              </figure>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {small.map((item, index) => {
            return (
              <figure key={index} className="OurPartnerimagesSmallRow">
                <img src={item.image} alt="pin" height={100} width={100} />
                <figcaption>{item.caption} </figcaption>
              </figure>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {small.map((item, index) => {
            return (
              <figure key={index} className="OurPartnerimagesSmallRow">
                <img src={item.image} alt="pin" height={100} width={100} />
                <figcaption>{item.caption} </figcaption>
              </figure>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          p: 6,
          marginBottom: 3,
        }}
        maxWidth="auto"
      >
        <Typography
          variant="h1"
          sx={{
            color: "#301E4E",
            marginBottom: 8,
            fontSize: {
              xs: 30,
              sm: 60,
              md: 80,
              lg: 100,
            },
          }}
        >
          <b> Testimonials</b>
        </Typography>
        <Box component={Paper} elevation={2} sx={{ padding: 5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <img
              id="testimonial"
              src={testimonial}
              alt="pic"
              height="150px"
              width="150px"
              style={{ borderRadius: "50%" }}
            />
            <Typography
              variant="h3"
              sx={{
                color: "#301E4E",
                fontSize: {
                  xs: 20,
                  sm: 30,
                  md: 50,
                  lg: 80,
                },
              }}
            >
              "Working with Extensive is great"
            </Typography>
          </Box>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "black",
                fontSize: {
                  xs: 20,
                  sm: 30,
                  md: 40,
                  lg: 50,
                },
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Hershel
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "red",
                fontSize: {
                  xs: 10,
                  sm: 15,
                  md: 20,
                  lg: 25,
                },
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Head of director
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "red",
                fontSize: {
                  xs: 10,
                  sm: 15,
                  md: 20,
                  lg: 25,
                },
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              GGPL PVT.LTD
            </Typography>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#301E4E",
          p: 6,
          marginBottom: 3,
        }}
        maxWidth="auto"
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontSize: {
              xs: 30,
              sm: 60,
              md: 80,
              lg: 100,
            },
          }}
        >
          Looking to drive
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontSize: {
              xs: 30,
              sm: 60,
              md: 80,
              lg: 100,
            },
          }}
        >
          results?{" "}
          <Link
            href="/chat"
            style={{ color: "orangered", textDecoration: "underline" }}
          >
            Lets Chat
          </Link>
        </Typography>
      </Box>

      <Box height="150px" width="100%" className={classes.footer}>
        <Grid container>
          <Grid item xs={12} sm={4} className={classes.logo}>
            <Typography variant="h3">Logo</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.centerLinks}>
            {footerLinks.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  style={{ color: "white", textDecoration: "none", fontSize:{xs:2,sm:4,md:10,lg:16} }}
                >
                  {item.name}
                </Link>
              );
            })}
          </Grid>

          <Grid item xs={12} sm={2} md={4} className={classes.socialLinks}>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>

          <Grid item xs={12} className={classes.copyright}>
            <Typography variant="body2" sx={{ color: "white" }} align="center">
              {"Copyright © "}

              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
