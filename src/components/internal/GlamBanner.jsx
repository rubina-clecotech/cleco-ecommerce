import { Box, Grid, Stack, Typography,Container } from "@mui/material";
import React from "react";
import { NavigateButton } from "../shared/Buttons";
import skinCare from "../../assets/graphics/skinCare.png";
import stepsImage from "../../assets/graphics/4steps.png";
import skinQuiz from "../../assets/graphics/quiz.png";
import user01 from "../../assets/graphics/user01.png"
import user02 from "../../assets/graphics/user02.png"
import user03 from "../../assets/graphics/user03.png"
import user04 from "../../assets/graphics/user04.png"
import microsoft from "../../assets/graphics/microsoft.png"
import ibm from "../../assets/graphics/ibm.png"
import amazon from "../../assets/graphics/amazon.png"
import ebay from "../../assets/graphics/ebay.png"
import dropbox from "../../assets/graphics/dropbox.png"

const GlamBanner = () => {
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
                  <img src={skinCare} className="right-image" alt=""/>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box className="box1">
                  <img src={stepsImage} className="right-image" alt=""/>
                </Box>
              </Grid>
              <Grid item xs={4.5}>
                <Box className="box1">
                  <img src={skinQuiz} className="right-image" alt=""/>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Stack>
        {/* healthy skin */}
          <Box className="healthy-skin-container">
            <Typography className="text">Healthy <span className="highlighted-text">Skin</span> Wasn’t Built In A Day</Typography>
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
                    <Stack className="user-images" direction="row" spacing={2} alignItems="center">
                        <Box className="image-box">
                            <img src={user01} className="image" alt=""/>
                        </Box>
                        <Box className="image-box">
                            <img src={user02} className="image" alt=""/>
                        </Box>
                        <Box className="image-box">
                            <img src={user03} className="image" alt=""/>
                        </Box>
                        <Box className="image-box">
                            <img src={user04} className="image" alt=""/>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7.5}>
                    <Box className="review-box">
                        <Typography className="review">
                            "After attempting to manage my adult acne for over 6 months on my own, I decided to take a <br/>
                            chance on Apostrophe. I can now say 8 months into my treatment plan that i have never had more <br/>
                            flawless skin in my entire life."
                        </Typography>
                        <Typography className="reviewer mt-18">Maureen Herben, Product Designer @Zalando</Typography>
                    </Box>
                </Grid>
            </Grid>
          </Box>
          {/* logo */}
          <Box className="sources-container">
            <Grid container spacing={{lg:"6",md:"4",xs:"2"}}>
                <Grid item xs={2.4}>
                    <Box className="source-box center">
                        <img src={microsoft} className="logo" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={2.4}>
                    <Box className="source-box center">
                        <img src={ibm} className="ibm-logo" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={2.4}>
                    <Box className="source-box center">
                        <img src={amazon} className="logo" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={2.4}>
                    <Box className="source-box center"> 
                        <img src={ebay} className="logo" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={2.4}>
                    <Box className="source-box center">
                        <img src={dropbox} className="logo" alt=""/>
                    </Box>
                </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GlamBanner;
