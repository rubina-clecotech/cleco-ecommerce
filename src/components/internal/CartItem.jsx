import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../assets/graphics/Acne Cleanser.png";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <>
      <Box className="cart-item-container">
           <Box className="cart-item">
           <Grid container>
              <Grid item xs={3}>
                <Box className="image-box">
                  <Link to="#"><img src={image} alt="" className="product-image" /></Link>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Stack className="product-detail">
                  <Typography className="heading">Acne Cleanser</Typography>
                  <Typography className="price mt-5"><span className="bold-text">Price</span> : $149.00</Typography>
                  <Typography className="price "><span className="bold-text">Qty</span> : 100gm</Typography>
                  <Typography className="availablity ">In stock</Typography>

                </Stack>
              </Grid>
              <Grid item xs={1} className="product-total">
                <Stack className="total-box" justifyContent="space-between">
                  <Typography className="total mt-5">$149.00</Typography>
                  <Stack>
                    <Stack className="mt-18" direction="row" alignItems="center" justifyContent="space-between">
                      <Box className="btn-box center">
                        <AddOutlinedIcon fontSize="small" className="icon"/>
                      </Box>
                      <Typography className="quantity">1</Typography>
                      <Box className="btn-box center">
                        <RemoveOutlinedIcon fontSize="small" className="icon"/>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              </Grid>
           </Box>
      </Box>
    </>
  );
};

export default CartItem;
