import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CartItem from "../internal/CartItem";
import { ClickButton } from "../shared/Buttons";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreaseQuantity,
  IncreaseQuantity,
} from "../../features/products/CartItems";
import emptyCart from "../../assets/graphics/emptyCart.png";
import UpperNav from "../layout/UpperNav";
import Navbar from "../layout/Navbar";

const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  // increase quantity
  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity(id));
  };
  // decrease quantity
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity(id));
  };
  // total
  let total = 0;
  const totalPrice1 = () => {
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  // shipping
  let shippingPrice = 9;
  const shipping = () => {
    if (total > 20) {
      shippingPrice = 0;
    }
    return shippingPrice.toFixed(2);
  };
  const pricingDetails = [
    { text: "Total", price: totalPrice1() },
    { text: "Shipping Fee", price: shipping() },
    { text: "subtotal", price: (total + shippingPrice).toFixed(2) },
  ];
  return (
    <>
      <Box className="checkout-container">
        <UpperNav />
        <Navbar />
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
                          <Typography className="price">
                            ${item.price}
                          </Typography>
                        </Stack>
                      ))}
                    </Box>
                    <ClickButton
                      title="Place Order"
                      styling="order-btn  mt-10"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        )}
      </Box>
    </>
  );
};

export default CheckoutPage;
