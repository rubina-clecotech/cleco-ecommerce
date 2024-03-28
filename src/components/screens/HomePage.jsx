import React from "react";
import Banner from "../internal/Banner";
import { Box, Container, Grid, Typography } from "@mui/material";
import DermacSection from "../internal/DermacSection";
import Categories from "../internal/Categories";
import Complexion from "../internal/Complexion";
import GlamBanner from "../internal/GlamBanner";
import Footer from "../layout/Footer";
import { shop } from "../../constant";

const HomePage = () => {
  return (
    <>
      {/* <UpperNav />
      <Navbar /> */}
      <Banner />
      <Box className="stress-container">
        <Container>
          <Box className="title-box center">
            <Typography className="title">
              Name your stress.
              <span className="highlighted-title mr-10">Find</span> your relief
            </Typography>
          </Box>
          <Grid container className="boxes-container center" spacing={4}>
            {shop.map((item) => (
              <Grid item xs={6} sm={4} lg={2.4}>
                <Box className="relief-box center-column">
                  <Box className="image-box center">
                    <img src={item.image} alt={item.title} />
                  </Box>
                  <Typography className="mt-18 text">{item.title}</Typography>
                  <Typography className="sub-text">
                    {item.desciption}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <DermacSection />
      <Categories />
      <Complexion />
      <GlamBanner />
      <Footer />
    </>
  );
};

export default HomePage;
