import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProduct } from "../../features/products/ProductDetail";
import { products } from "../../constant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";

const RecommendedProducts = () => {
  const dispatch = useDispatch();
  const productDetail = (item) => {
    dispatch(getProduct(item));
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box className="recommended-container">
        <Slider {...settings}>
          {products.map((item) => (
            <Box className="slide-container">
              <Box className="product-image">
                <Link
                  to={"/product-detail"}
                  onClick={() => productDetail(item)}
                >
                  <img className="image" src={item.image} alt="" />
                </Link>
              </Box>
              <Stack className="description-box m-18">
                <Typography className="product-rating mt-18">
                  {" "}
                  <StarIcon className="star-icon mr-5" fontSize="small" />{" "}
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
                <Typography className="product-rate mt-5">
                  <sup>$</sup>
                  {item.price}{" "}
                  <del className="mrp">
                    <sup>$</sup>
                    {item.mrp}
                  </del>
                </Typography>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default RecommendedProducts;
