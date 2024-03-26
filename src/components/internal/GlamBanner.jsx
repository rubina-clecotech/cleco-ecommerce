import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import React from "react";
import { NavigateButton } from "../shared/Buttons";
import skinCare from "../../assets/graphics/skinCare.png";
import stepsImage from "../../assets/graphics/4steps.png";
import skinQuiz from "../../assets/graphics/quiz.png";
import user01 from "../../assets/graphics/user01.png";
import user02 from "../../assets/graphics/user02.png";
import user03 from "../../assets/graphics/user03.png";
import user04 from "../../assets/graphics/user04.png";
import microsoft from "../../assets/graphics/microsoft.png";
import ibm from "../../assets/graphics/ibm.png";
import amazon from "../../assets/graphics/amazon.png";
import ebay from "../../assets/graphics/ebay.png";
import dropbox from "../../assets/graphics/dropbox.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Testimonials } from "../../constant";

const GlamBanner = () => {
  const users = [user01, user02, user03, user04];
  const socials = [microsoft, ibm, amazon, ebay, dropbox];
  return (
    <>
      <Box className="glam-container">
        <Container>
          <Stack
            className="glam-box"
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
          >
            <Box className="left-section">
              <Typography className="heading">
                How Glam* <br /> Works
              </Typography>
              <Typography className="sub-heading mt-10">
                No bots or algorithms here. We get to <br /> know you, your skin
                and goals.
              </Typography>
              <NavigateButton title="Get Started" styling="glam-btn mt-30" />
            </Box>
            <Box className="right-section">
              <Grid container>
                <Grid item xs={4.5}>
                  <Box className="box1">
                    <img src={skinCare} className="right-image" alt="" />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box className="box1">
                    <img src={stepsImage} className="right-image" alt="" />
                  </Box>
                </Grid>
                <Grid item xs={4.5}>
                  <Box className="box1">
                    <img src={skinQuiz} className="right-image" alt="" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Stack>
          {/* healthy skin */}
          <Box className="healthy-skin-container">
            <Typography className="text">
              Healthy <span className="highlighted-text">Skin</span> Wasn’t
              Built In A Day
            </Typography>
            <Typography className="sub-text mt-10">
              All patients must complete a virtual consultation, which will{" "}
              <br /> be reviewed by a dermatology provider who will determine if{" "}
              <br /> a prescription treatment is right for you.
            </Typography>
          </Box>
          {/*user review */}
          <Box className="user-review-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4.5}>
                <Stack
                  className="user-images"
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >
                  {users.map((item) => (
                    <Box className="image-box">
                      <img src={item} className="image" alt="" />
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={7.5}>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  modules={[Pagination]}
                >
                  {Testimonials.map((user) => (
                    <SwiperSlide>
                      <Box className="review-box">
                        <Typography className="review">
                          {user.review}
                        </Typography>
                        <Typography className="reviewer mt-18">
                          {user.userName}, {user.userDetail} @{user.city}
                        </Typography>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </Grid>
          </Box>
          {/* logo */}
          <Box className="sources-container">
            <Grid container spacing={{ lg: "6", md: "4", xs: "2" }}>
              {socials.map((item) => (
                <Grid item xs={2.4}>
                  <Box className="source-box center">
                    <img src={item} className="logo" alt="" />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GlamBanner;
