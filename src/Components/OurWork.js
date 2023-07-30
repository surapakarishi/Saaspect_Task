import { Box, Button, Typography } from "@mui/material";
import React from "react";
import starbucks from "../Images/starbucks.png";
import nike from "../Images/Nike.png";
import nikeMobile from "../Images/Nike mobile.png";
import { useNavigate } from "react-router-dom";
const OurWork = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        width="100%"
        height="auto"
        sx={{ backgroundColor: "#301E4E" }}
        marginTop={10}
      >
        {/* smallDevices */}
        <Box className="smallDevicesOurWork">
          <Box sx={{ padding: 5 }}>
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: {
                  xs: 40,
                },
              }}
            >
              OUR
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: {
                  xs: 40,
                },
              }}
            >
              WORK.
            </Typography>
          </Box>

          <Box className="WorkimagesMobile">
            <img
              className="starbucksMobile"
              src={starbucks}
              alt="starbucks"
              height={300}
              width={350}
            />
            <Typography
              sx={{ fontSize: 15, fontFamily: "sans-serif", color: "#FF6E6C" }}
            >
              DIGITAL MARKETING
            </Typography>
            <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2 }}>
              STARBUCKS
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginBottom: 5,
                marginTop: 2,
                fontSize: 15,
              }}
            >
              our ad campaign brought 80% footfall to the company
            </Typography>

            <img
              className="nikeMobile"
              src={nikeMobile}
              alt="nikeMobile"
              height={300}
              width={350}
            />
            <Typography
              sx={{ fontSize: 15, fontFamily: "sans-serif", color: "#FF6E6C" }}
            >
              DIGITAL MARKETING
            </Typography>
            <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2 }}>
              NIKE
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginBottom: 5,
                marginTop: 2,
                fontSize: 15,
              }}
            >
              our ad campaign brought 80% footfall to the company
            </Typography>

            <img
              className="starbucksMobile"
              src={starbucks}
              alt="starbucks"
              height={300}
              width={350}
            />
            <Typography
              sx={{ fontSize: 15, fontFamily: "sans-serif", color: "#FF6E6C" }}
            >
              DIGITAL MARKETING
            </Typography>
            <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2 }}>
              STARBUCKS
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                marginBottom: 5,
                marginTop: 2,
                fontSize: 15,
              }}
            >
              our ad campaign brought 80% footfall to the company
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="error"
              onClick={() => navigate("/work")}
              sx={{
                fontFamily: "sans-serif",
                borderRadius: 2,
                fontWeight: "bold",
                backgroundColor: "#FF6E6C",
                marginBottom: 5,
                width: "95%",
              }}
            >
              VIEW ALL
            </Button>
          </Box>
        </Box>

        {/* LargeAndMedium */}
        <Box className="LargeAndMediumOurWork">
          <Box sx={{ padding: 5 }}>
            <Typography
              variant="h1"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              OUR
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              WORK.
            </Typography>
            <Button
              variant="contained"
              size="medium"
              color="error"
              onClick={() => navigate("/work")}
              sx={{
                fontFamily: "sans-serif",
                borderRadius: 2,
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#FF6E6C",
              }}
            >
              VIEW ALL
            </Button>
          </Box>

          <Box
            className="Workimagesrow1"
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Box>
              <img
                className="starbucks"
                src={starbucks}
                alt="starbucks"
                height={700}
                width={600}
              />
              <Typography
                sx={{
                  fontSize:{xs:10,sm:10,md:10,lg:15},
                  fontFamily: "sans-serif",
                  color: "#FF6E6C",
                }}
              >
                DIGITAL MARKETING
              </Typography>
              <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                STARBUCKS
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                our ad campaign brought 80% footfall to
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginBottom: 5 ,fontSize:{xs:10,sm:20,md:30,lg:40}}}>
                the company
              </Typography>
            </Box>
            <Box>
              <img
                className="nike"
                src={nike}
                alt="nike"
                height={500}
                width={600}
              />
              <Typography
                sx={{
                  fontSize:{xs:10,sm:10,md:10,lg:15},
                  fontFamily: "sans-serif",
                  color: "#FF6E6C",
                }}
              >
                DIGITAL MARKETING
              </Typography>
              <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                NIKE
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                our ad campaign brought 80% footfall to
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginBottom: 5,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                the company
              </Typography>
            </Box>
          </Box>

          <Box
            className="Workimagesrow2"
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Box>
              <img
                className="nike"
                src={nike}
                alt="nike"
                height={500}
                width={600}
              />
              <Typography
                sx={{
                  fontSize:{xs:10,sm:10,md:10,lg:15},
                  fontFamily: "sans-serif",
                  color: "#FF6E6C",
                }}
              >
                DIGITAL MARKETING
              </Typography>

              <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                NIKE
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                our ad campaign brought 80% footfall to
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginBottom: 5,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                the company
              </Typography>
            </Box>
            <Box>
              <img
                className="starbucks"
                src={starbucks}
                alt="starbucks"
                height={700}
                width={600}
              />
              <Typography
                sx={{
                  // fontSize: 15,
                  fontFamily: "sans-serif",
                  color: "#FF6E6C",
                  fontSize:{xs:10,sm:10,md:10,lg:15}
                }}
              >
                DIGITAL MARKETING
              </Typography>

              <Typography variant="h3" sx={{ color: "#E7D7F6", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                STARBUCKS
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginTop: 2,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                our ad campaign brought 80% footfall to
              </Typography>
              <Typography variant="h4" sx={{ color: "white", marginBottom: 5,fontSize:{xs:10,sm:20,md:30,lg:40} }}>
                the company
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurWork;
