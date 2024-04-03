import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProductsNav from "../layout/ProductsNav";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/products/CartItems";
import Footer from "../layout/Footer";
import UpperNav from "../layout/UpperNav";
import Navbar from "../layout/Navbar";
import { getProduct } from "../../features/products/ProductDetail";

const ProductListingPage = () => {
  const { filteredProducts } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDetail = (item) => {
    dispatch(getProduct(item))
  }
  const allSameCategory = filteredProducts.every(
    (product) => product.category === filteredProducts[0].category
  );
  return (
    <>
      <Box className="product-list-container">
        <UpperNav />
        <Navbar />
        <ProductsNav />
        <Container>
          <Typography className="filter-heading mt-30">
            {allSameCategory && filteredProducts.length > 0 ? filteredProducts[0].category : filteredProducts.length > 0 ? "All Products":null }
          </Typography>
          <Box className="product-list-box">
            <Grid container spacing={4}>
              {filteredProducts.length > 0 ? 
              filteredProducts?.map((item) => (
                <Grid item xs={6} md={3}>
                  <Box className="product-image">
                    <Link to={"/product-detail"} onClick={()=>handleDetail(item)}>
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
                    {item.description.substring(0,74)}...
                  </Typography>
                  <Stack
                    className="mt-5"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <Typography className="product-rate">
                      <sup>$</sup>
                      {item.price}
                      <del className="mrp">
                        <sup>$</sup>
                        {item.mrp}
                      </del>
                    </Typography>
                    <IconButton
                      disabled={item.availability <= 0}
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingBagOutlinedIcon />
                    </IconButton>
                  </Stack>
                  {item.availability === 0 && (
                    <Stack alignItems="flex-end">
                      <Typography className="availability">
                        Out of stock
                      </Typography>
                    </Stack>
                  )}
                </Grid>
              )):(
                <Box className="no-product center">
                  <Typography className="text">No product found</Typography>
                </Box>
              )}
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default ProductListingPage;
