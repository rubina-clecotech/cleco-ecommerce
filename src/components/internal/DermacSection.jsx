import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import image1 from "../../assets/graphics/dermac.png";
import { NavigateButton } from "../shared/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const DermacSection = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const images = [image1, image1, image1, image1];
  return (
    <>
      <Stack
        className="dermac-container"
        alignItems="center"
        justifyContent="center"
      >
        <Box className={matches ? "center-column" : "center"}>
          <Box className="image-box">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {images.map((item) => (
                <SwiperSlide>
                  <img src={item} alt="" className="dermac-image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box className="content-box center">
            <Box className="inner-content-box">
              <Typography className="number">01</Typography>
              <Typography className="mt-18 title">
                Dermatology Care <br /> Made Simple
              </Typography>
              <Typography className="mt-18 sub-title">
                Start a virtual derm visit and share your <br />
                personal skin concerns. Persistent chin acne? <br />
                Dark spots on your cheeks?
              </Typography>
              <Typography className="mt-18 sub-title">
                Get customized care for your unique skin.
              </Typography>
              <NavigateButton title="Get Started" styling="mt-30 dermac-btn" />
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default DermacSection;
