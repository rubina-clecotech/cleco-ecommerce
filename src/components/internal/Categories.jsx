import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import acneCleanser from "../../assets/graphics/Acne Cleanser.png";

const Categories = () => {
    const products =[1,2,3,4]
  return (
    <>
      <Box className="categories-container">
        <Container>
          <Box className="title-box center-column">
            <Typography className="title">
              Routine add-ons{" "}
              <span className="highlighted-title">Products</span>
            </Typography>
            <Typography className="sub-title">
              Build your box with our line of trusted essentials.
            </Typography>
          </Box>
          <Box className="product-box">
            <Grid container spacing={4}>
              {
                products.map((item) => (
                    <Grid item xs={6} md={3}>
                <Box className="product-image">
                  <img className="image" src={acneCleanser} alt=""/>
                </Box>
                <Typography className="product-rating mt-18"> <StarIcon className="star-icon mr-5" fontSize="small"/> 4.5 <CheckCircleIcon color="primary" fontSize="small" className="ml-18 mr-5"/> 96 Reviews</Typography>
                <Typography className="product-title mt-5">Acne Cleanser</Typography>
                <Typography className="product-description mt-5">Shut down persistent pimples while being <br/> kind to your skin with Curology’s...</Typography>
                <Typography className="product-rate mt-18"><sup>$</sup>149.00 <del className="mrp"><sup>$</sup>699.00</del></Typography>
              </Grid>
                ))
              }
              </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Categories;
