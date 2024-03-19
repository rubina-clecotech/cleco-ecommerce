import React from 'react'
import UpperNav from "../layout/UpperNav"
import Navbar from '../layout/Navbar'
import Banner from '../internal/Banner'
import { Box, Container, Stack, Typography } from '@mui/material'
import stress from "../../assets/graphics/SHOP STRESS.png"
import sleep from "../../assets/graphics/SHOP SLEEP.png"
import recovery from "../../assets/graphics/SHOP RECOVERY.png"
import mood from "../../assets/graphics/SHOP MOOD.png"
import health from "../../assets/graphics/SKIN HEALTH.png"
import DermacSection from '../internal/DermacSection'

const HomePage = () => {
  return (
    <>
    {/* header */}
      <UpperNav/>
      <Navbar/>
      {/* banner */}
      <Banner/>
      {/* name you stress */}
      <Box className="stress-container">
        <Container>
        <Box className="title-box center">
          <Typography className='title'>Name your stress. <span className='highlighted-title'>Find</span> your relief</Typography>
        </Box>
        <Stack className='boxes-container center' direction="row" spacing={4}>
            <Box className="relief-box center-column">
              <Box className="image-box center">
                <img src={stress}/>
              </Box>
              <Typography className='mt-18 text'>SHOP STRESS</Typography>
              <Typography className='sub-text'>Make everyday a healthy skin <br/> day with uncomplicated</Typography>
            </Box>
            <Box className="relief-box center-column">
            <Box className="image-box center">
                <img src={sleep}/>
              </Box>
              <Typography className='mt-18 text'>SHOP SLEEP</Typography>
              <Typography className='sub-text'>Make everyday a healthy skin <br/> day with uncomplicated</Typography>
            </Box>
            <Box className="relief-box center-column">
            <Box className="image-box center">
                <img src={recovery}/>
              </Box>
              <Typography className='mt-18 text'>SHOP RECOVERY</Typography>
              <Typography className='sub-text'>Make everyday a healthy skin <br/> day with uncomplicated</Typography>
            </Box>
            <Box className="relief-box center-column">
            <Box className="image-box center">
                <img src={mood}/>
              </Box>
              <Typography className='mt-18 text'>SHOP MOOD</Typography>
              <Typography className='sub-text'>Make everyday a healthy skin <br/> day with uncomplicated</Typography>
            </Box>
            <Box className="relief-box center-column">
            <Box className="image-box">
                <img src={health}/>
              </Box>
              <Typography className='mt-18 text'>SHOP HEALTH</Typography>
              <Typography className='sub-text'>Make everyday a healthy skin <br/> day with uncomplicated</Typography>
            </Box>
        </Stack>
        </Container>
      </Box>
      {/* dermac section */}
      <DermacSection/>
    </>
  )
}

export default HomePage
