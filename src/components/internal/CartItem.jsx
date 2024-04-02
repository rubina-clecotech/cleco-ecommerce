import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { ClickButton } from "../shared/Buttons";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../features/products/CartItems";

const CartItem = ({ handleDecreaseQuantity, handleIncreaseQuantity, item }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(RemoveItem(id));
  };
  return (
    <>
      <Box className="cart-item-container">
        <Box className="cart-item">
          <Grid container spacing={2}>
            <Grid item  xs={2.5} sm={2}>
              <Box className="image-box">
                <Link to="#">
                  <img src={item.image} alt="" className="product-image" />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={7} sm={8.5}>
              <Stack className="product-detail">
                <Typography className="heading">{item.title}</Typography>
                <Typography className="price mt-5">
                  <span className="bold-text">Price</span> : ${item.price}
                </Typography>
                <Typography className="price ">
                  <span className="bold-text">Qty</span> : {item.qty}
                </Typography>
                  <Typography className="availablity" color="green">In stock</Typography>
              </Stack>
            </Grid>
            <Grid item xs={2.5} sm={1.2} className="product-total">
              <Stack className="total-box" justifyContent="space-between">
                <Typography className="total mt-5">
                  ${(item.price * item.quantity).toFixed(2)}
                </Typography>
                <Stack
                  className="mt-18"
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box
                    className="btn-box center"
                    onClick={handleIncreaseQuantity}
                  >
                    <AddOutlinedIcon fontSize="small" className="icon" />
                  </Box>
                  <Typography className="quantity">{item.quantity}</Typography>
                  <Box
                    className="btn-box center"
                    onClick={handleDecreaseQuantity}
                  >
                    <RemoveOutlinedIcon fontSize="small" className="icon" />
                  </Box>
                </Stack>
              </Stack>
              <ClickButton
                styling="mt-10 btn"
                color="error"
                title={<DeleteIcon fontSize="samll" className="dlt-icon" />}
                onClick={() => handleRemove(item.id)}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CartItem;
