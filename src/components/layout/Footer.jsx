import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box className="footer-container">
        <Container>
          <Box className="upper-section">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <Box className="upper-left">
              <Stack className="title-box" direction="row" alignItems="center">
                <Typography className="title">Stay</Typography>
                <Typography className="mini-title ml-10">
                  Among 120k+ customers subscribed <br /> to Glam. Self reported.
                </Typography>
              </Stack>
              <Typography className="title">Glowing </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3.5}>
                <Stack className="upper-middle" spacing={2}>
                    <Typography className="text">About Us</Typography>
                    <Typography className="text">Offers</Typography>
                    <Typography className="text">Products</Typography>
                    <Typography className="text">Why Choose Us?</Typography>
                    <Typography className="text">Reviews</Typography>
                    <Typography className="text">Contact Us</Typography>
                </Stack>
            </Grid> 
            <Grid item xs={6} sm={3.5}>
                <Stack className="upper-right" spacing={.5}>
                    <Typography className="text">Favorite</Typography>
                    <Typography className="text">Cart</Typography>
                    <Typography className="text">Locations</Typography>
                    <Typography className="text">Blogs</Typography>
                    <Typography className="text">Gift Vouchers</Typography>
                    <Typography className="text">Celebration</Typography>
                    <Typography className="text mt-30">Privacy Policy + terms of Service</Typography>
                    <Typography className="text">Celebration + Cookie ploicy</Typography>
                </Stack>
            </Grid>
          </Grid>
          </Box>
          <Box className="bottom-section center">
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={5} >
                    <Typography className="title">glam</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3.5}>
                        <Typography className="sub-heading">Address Line</Typography>
                        <Typography className="sub-text mt-18">Lorem Ipsum is simply dummy text  of the printing and typesetting industry.  Lorem Ipsum has been the industry's </Typography>
                        <Stack direction="row" spacing={2} className="mt-30">
                            <FacebookIcon className="footer-icon"/>
                            <TwitterIcon className="footer-icon"/>
                            <LinkedInIcon className="footer-icon"/>
                            <InstagramIcon className="footer-icon"/>
                            <YouTubeIcon className="footer-icon"/>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sm={3.5}>
                        <Typography className="sub-heading">Contact Us</Typography>
                        <Typography className="sub-text mt-18">glowproducts@gmail</Typography>
                        <Typography className="sub-text">+0199988877</Typography>
                    </Grid>
                </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
