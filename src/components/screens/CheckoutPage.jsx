import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import UpperNav from "../layout/UpperNav";
import Navbar from "../layout/Navbar";
import CartItem from "../internal/CartItem";
import { ClickButton } from "../shared/Buttons";

const CheckoutPage = () => {
  const items = [1, 2, 3];
  const pricingDetails = [
    { text: "subtotal", price: "$140.00" },
    { text: "Shipping Fee", price: "$9.00" },
    { text: "subtotal", price: "$149.00" },
  ];
  return (
    <>
      <Box className="checkout-container">
        <UpperNav />
        <Navbar />
        <Box className="cart-box mt-30">
          <Container>
            <Grid container spacing={12}>
              <Grid item xs={8}>
                <Typography className="heading">Your Cart Items</Typography>
                {items.map((item) => (
                  <CartItem />
                ))}
              </Grid>
              <Grid item xs={4}>
                <Box className="subtotal-box">
                  <Typography className="pricing">Pricing Details</Typography>
                  <Box className="mt-18">
                    {pricingDetails.map((item) => (
                      <Stack
                        className="detail-box mt-5"
                        direction="row"
                        justifyContent="space-between"
                      >
                        <Typography className="text">{item.text}</Typography>
                        <Typography className="price">{item.price}</Typography>
                      </Stack>
                    ))}
                  </Box>
                  <ClickButton title="Place Order" styling="order-btn  mt-10" />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CheckoutPage;
