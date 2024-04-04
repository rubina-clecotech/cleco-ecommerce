import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClickButton } from "../shared/Buttons";
import { getTotal } from "../../features/products/CartItems";

const ConfirmCheckout = ({handleNext}) => {
  const { cart, total, shipping } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
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
      <Box className="confirm-checkout-container">
        <Container>
          <Box className="confirm-details mt-60">
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6}>
                {cart.map((item) => (
                  <>
                    <Grid container spacing={2}>
                      <Grid item sm={3} xs={5}>
                        <Box className="product-image">
                          <img src={item.image} className="image" alt=""/>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box className="product-detail">
                          <Typography className="title">
                            {item.title}
                          </Typography>
                          <Typography className="qty">
                            qty:{item.qty}
                          </Typography>
                          <Typography className="qty">
                            Quantity:{item.quantity}
                          </Typography>
                          <Typography className="price">
                            Price:$ <span className="bold">{item.price}</span>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                ))}
              </Grid>
              <Grid item xs={12} md={4}>
                <Box className="subtotal-box">
                  <Typography className="pricing">Confirm Checkout</Typography>
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
                  <ClickButton title="Place Order" styling="order-btn  mt-10" onClick={handleNext}/>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ConfirmCheckout;
