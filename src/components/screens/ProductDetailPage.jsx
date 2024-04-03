import React from "react";
import Navbar from "../layout/Navbar";
import UpperNav from "../layout/UpperNav";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDispatch, useSelector } from "react-redux";
import { DecreaseQuantity, IncreaseQuantity } from "../../features/products/ProductDetail";
import { addToCart } from "../../features/products/CartItems";

const ProductDetailPage = () => {
  const { product } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const handleIncrease = (item) => {
    dispatch(IncreaseQuantity(item));
  };
  const handleDecrease = (item) => {
    dispatch(DecreaseQuantity(item));
  };
  const handleCart = (item) => {
    dispatch(addToCart(item))
  }
  return (
    <>
      <Box className="product-detail-container">
        <UpperNav />
        <Navbar />
        <Container>
          <Box className="detail-box">
            <Grid container>
              <Grid item xs={12} sm={5}>
                <Box className="image-box">
                  <img src={product?.image} alt="" className="image" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4.5}>
                <Stack className="content-box" justifyContent="space-between">
                  <Box>
                    <Typography className="title">{product?.title}</Typography>
                    <Stack
                      className="mt-10"
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
                      <Typography className="discounted-price">
                        ${product?.price}
                      </Typography>
                      <del className="mrp">${product?.mrp}</del>
                    </Stack>
                    <Typography className="qty">
                      Quantity : {product?.qty}
                    </Typography>
                    <Typography className="description mt-10">
                      {product?.description}
                    </Typography>
                    <Rating
                      className="mt-10"
                      value={product.rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography
                      className="availability mt-10"
                      color={product?.availability > 0 ? "green" : "red"}
                    >
                      {product?.availability > 0 ? "In Stock" : "Out of Stock"}
                    </Typography>
                  </Box>
                  <Box>
                    <Stack
                      className="mt-30"
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box className="btn-box center" onClick={()=>handleIncrease(product)}>
                        <AddOutlinedIcon fontSize="small" className="icon" />
                      </Box>
                      <Typography className="quantity center">{product.quantity}</Typography>
                      <Box className="btn-box center" onClick={()=>handleDecrease(product)}>
                        <RemoveOutlinedIcon fontSize="small" className="icon" />
                      </Box>
                    </Stack>
                    <Button
                      disabled={product?.availability <= 0}
                      className={product?.availability <= 0?"disabled-cart-btn mt-10":"cart-btn mt-10"}
                      variant="contained"
                      disableElevation
                      onClick={()=>handleCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetailPage;
