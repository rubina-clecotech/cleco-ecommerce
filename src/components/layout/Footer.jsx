import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom";

const Footer = () => {
  const contactLinks = [
    {text:"About Us",path:"#"},
    {text:"Offers",path:"#"},
    {text:"Products",path:"#"},
    {text:"Why Choose Us?",path:"#"},
    {text:"Reviews",path:"#"},
    {text:"Contact Us",path:"#"},
  ]
  const links = [
    {text:"Favorite",path:"#"},
    {text:"Cart",path:"#"},
    {text:"Locations",path:"#"},
    {text:"Blogs",path:"#"},
    {text:"Gift Vouchers",path:"#"},
    {text:"Celebration",path:"#"},
  ]
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
              <Typography className="title">Glowing<span className="star">*</span></Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3.5}>
                <Stack className="upper-middle" spacing={1.5}>
                    {
                      contactLinks.map(item => (<Link to={item.path} className="text">{item.text}</Link>))
                    }
                </Stack>
            </Grid> 
            <Grid item xs={6} sm={3.5}>
                <Stack className="upper-right" spacing={.5}>
                    {
                      links.map((item) => (<Link to={item.path} className="text">{item.text}</Link>))
                    }
                    <Link className="text mt-30">Privacy Policy + terms of Service <br/>
                    Celebration + Cookie ploicy</Link>
                </Stack>
            </Grid>
          </Grid>
          </Box>
          <Box className="bottom-section center">
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={5} >
                    <Typography className="title">glam<span className="star">*</span></Typography>
                    </Grid>
                    <Grid item xs={6} sm={3.5}>
                        <Typography className="sub-heading">Address Line</Typography>
                        <Typography className="sub-text mt-18">Lorem Ipsum is simply dummy text  of the printing and typesetting industry.  Lorem Ipsum has been the industry's </Typography>
                        <Stack direction="row" spacing={2} className="mt-30">
                            <Link to={"https://www.facebook.com"} target="_blank"><FacebookIcon className="footer-icon"/></Link>
                            <Link to={"https://twitter.com"} target="_blank"><TwitterIcon className="footer-icon"/></Link>
                            <Link to={"https://www.linkedin.com"} target="_blank"><LinkedInIcon className="footer-icon"/></Link>
                            <Link to={"https://www.instagram.com"} target="_blank"><InstagramIcon className="footer-icon"/></Link>
                            <Link to={"https://www.youtube.com"} target="_blank"><YouTubeIcon className="footer-icon"/></Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sm={3.5}>
                        <Typography className="sub-heading">Contact Us</Typography>
                        <Link to={"https://mail.google.com/mail/?view=cm&fs=1&to=rubinashaikh@clecotech.com"} target="_blank" className="sub-text mt-18">glowproducts@gmail</Link><br/>
                        <Link to={"tel:+1234567890"} className="sub-text">+0199988877</Link>
                    </Grid>
                </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
