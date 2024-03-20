import { Box,  Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import {NavigateButton} from "../shared/Buttons"
import banner from "../../assets/graphics/bannerImage.png"

const Banner = () => {
  return (
    <>
      <Box className="banner-container">
        <Container>
        <Grid container> 
            <Grid item xs={12} lg={5}>
                <Stack className="left-section" alignItems="flex-start" justifyContent="center">
                    <Typography className='bold-text'>In beauty, <br/> we are <br/> obsessed. </Typography>
                    <Typography className='text mt-18'>Make everyday a healthy skin day with <br/> uncomplicated, clean, skin care, that works.</Typography>
                    <NavigateButton title="Shop Now" styling="shop-btn mt-30"/>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Box className="right-section">
                    <img src={banner} className='image' alt=''/>
                </Box>
            </Grid>
        </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Banner
