import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  getTotal,
} from "../../features/products/CartItems";
import { ClickButton } from "../shared/Buttons";
import emptyCart from "../../assets/graphics/emptyCart.png";
import CartItem from "../internal/CartItem";

const CheckoutStart = ({ handleNext }) => {
  const { cart, total, shipping } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  // increase quantity
  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity(id));
  };
  // decrease quantity
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity(id));
  };
  const pricingDetails = [
    { text: "Total", price: total.toFixed(2) },
    { text: "Shipping Fee", price: shipping.toFixed(2) },
    { text: "subtotal", price: (total + shipping).toFixed(2) },
  ];
  useEffect(() => {
    dispatch(getTotal());
  });
  return (
    <>
      {cart.length === 0 ? (
        <Box className="no-cart-item">
          <img className="image" src={emptyCart} alt="" />
        </Box>
      ) : (
        <Box className="cart-box mt-30">
          <Container>
            <Grid container spacing={{ md: 12, xs: 4 }}>
              <Grid item xs={12} md={8}>
                <Typography className="heading">Your Cart Items</Typography>
                {cart.map((item) => (
                  <CartItem
                    item={item}
                    handleDecreaseQuantity={() =>
                      handleDecreaseQuantity(item.id)
                    }
                    handleIncreaseQuantity={() =>
                      handleIncreaseQuantity(item.id)
                    }
                  />
                ))}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
                        <Typography className="price">${item.price}</Typography>
                      </Stack>
                    ))}
                  </Box>
                  <ClickButton
                    title="Place Order"
                    styling="order-btn  mt-10"
                    onClick={handleNext}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default CheckoutStart;
