import React from "react";
import UpperNav from "../layout/UpperNav";
import Navbar from "../layout/Navbar";
import Banner from "../internal/Banner";
import { Box, Container, Grid,  Typography } from "@mui/material";
import stress from "../../assets/graphics/SHOP STRESS.png";
import sleep from "../../assets/graphics/SHOP SLEEP.png";
import recovery from "../../assets/graphics/SHOP RECOVERY.png";
import mood from "../../assets/graphics/SHOP MOOD.png";
import health from "../../assets/graphics/SKIN HEALTH.png";
import DermacSection from "../internal/DermacSection";
import Categories from "../internal/Categories";
import Complexion from "../internal/Complexion";
import GlamBanner from "../internal/GlamBanner";
import Footer from "../layout/Footer";

const HomePage = () => {
  return (
    <>
      {/* header */}
      <UpperNav />
      <Navbar />
      {/* banner */}
      <Banner />
      {/* name you stress */}
      <Box className="stress-container">
        <Container>
          <Box className="title-box center">
            <Typography className="title">
              Name your stress. <span className="highlighted-title mr-10">Find</span> your relief
            </Typography>
          </Box>
          <Grid container className="boxes-container center" spacing={4}>
            <Grid item xs={6} sm={4} lg={2.4}>
              <Box className="relief-box center-column">
                <Box className="image-box center">
                  <img src={stress} alt=""/>
                </Box>
                <Typography className="mt-18 text">SHOP STRESS</Typography>
                <Typography className="sub-text">
                  Make everyday a healthy skin <br className="line-break" /> day with uncomplicated
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2.4}>
              <Box className="relief-box center-column">
                <Box className="image-box center">
                  <img src={sleep} alt=""/>
                </Box>
                <Typography className="mt-18 text">SHOP SLEEP</Typography>
                <Typography className="sub-text">
                  Make everyday a healthy skin <br className="line-break" /> day with uncomplicated
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2.4}>
              <Box className="relief-box center-column">
                <Box className="image-box center">
                  <img src={recovery} alt=""/>
                </Box>
                <Typography className="mt-18 text">SHOP RECOVERY</Typography>
                <Typography className="sub-text">
                  Make everyday a healthy skin <br className="line-break" /> day with uncomplicated
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2.4}>
              <Box className="relief-box center-column">
                <Box className="image-box center">
                  <img src={mood} alt=""/>
                </Box>
                <Typography className="mt-18 text">SHOP MOOD</Typography>
                <Typography className="sub-text">
                  Make everyday a healthy skin <br className="line-break" /> day with uncomplicated
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} lg={2.4}>
              <Box className="relief-box center-column">
                <Box className="image-box">
                  <img src={health} alt=""/>
                </Box>
                <Typography className="mt-18 text">SHOP HEALTH</Typography>
                <Typography className="sub-text">
                  Make everyday a healthy skin <br className="line-break" /> day with uncomplicated
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* dermac section */}
      <DermacSection />
      {/* categories */}
      <Categories/>
      {/* complexion */}
      <Complexion/>
      {/* glam banner */}
      <GlamBanner/>
      {/* footer */}
      <Footer/>
    </>
  );
};

export default HomePage;
