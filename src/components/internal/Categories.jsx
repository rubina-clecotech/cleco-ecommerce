import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { products } from "../../constant";
import { useDispatch } from "react-redux";
import { getProduct } from "../../features/products/ProductDetail";

const Categories = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const productDetail = (item) => {
    dispatch(getProduct(item));
  };
  return (
    <>
      <Box className="categories-container">
        <Container>
          <Box className={matches ? "title-box" : "title-box center-column"}>
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
              {products.slice(0, 4).map((item) => (
                <Grid item xs={6} md={3}>
                  <Box className="product-image">
                    <Link
                      to={"/product-detail"}
                      onClick={() => productDetail(item)}
                    >
                      <img className="image" src={item.image} alt="" />
                    </Link>
                  </Box>
                  <Typography className="product-rating mt-18">
                    {" "}
                    <StarIcon
                      className="star-icon mr-5"
                      fontSize="small"
                    />{" "}
                    {item.rating}{" "}
                    <CheckCircleIcon
                      color="primary"
                      fontSize="small"
                      className="ml-18 mr-5"
                    />{" "}
                    {item.review} Reviews
                  </Typography>
                  <Typography className="product-title mt-5">
                    {item.title}
                  </Typography>
                  <Typography className="product-description mt-5">
                    {item.description.substring(0, 75)}...
                  </Typography>
                  <Typography className="product-rate mt-18">
                    <sup>$</sup>
                    {item.price}{" "}
                    <del className="mrp">
                      <sup>$</sup>
                      {item.mrp}
                    </del>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Categories;
