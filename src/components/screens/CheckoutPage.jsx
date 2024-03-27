import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CartItem from "../internal/CartItem";
import { ClickButton } from "../shared/Buttons";
import { cartItems } from "../../constant";

const CheckoutPage = () => {
  const [quantity,setQuantity] = useState(1)
  // increase quantity
  const handleIncreaseQuantity = () => {
    setQuantity(quantity+1)
  }
  // decrease quantity
  const handleDecreaseQuantity = () => {
    if(quantity > 0){
      setQuantity(quantity-1)
    }
  }

  const items = [1, 2, 3];
  const pricingDetails = [
    { text: "subtotal", price: "$140.00" },
    { text: "Shipping Fee", price: "$9.00" },
    { text: "subtotal", price: "$149.00" },
  ];
  return (
    <>
      <Box className="checkout-container">
        <Box className="cart-box mt-30">
          <Container>
            <Grid container spacing={12}>
              <Grid item xs={8}>
                <Typography className="heading">Your Cart Items</Typography>
                {cartItems.map((item) => (
                  <CartItem item={item} quantity={quantity} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity}/>
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
