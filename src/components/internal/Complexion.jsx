import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Complexion = () => {
  return (
    <>
      <Box className="complexion-container">
          <Container>
          <Box className="text-box">
             <Typography className='text'>Hey! We're <br/> Here to help <br/> you <span className='highlighted-text'>Shine</span></Typography>
            <Typography className='sub-text mt-30'>We believe well-being is for everyone. Our pure and <br className='line-break'/> powerful supplements are made to shine in a market <br className='line-break'/> full of over-priced alternatives - because wellness <br className='line-break'/> shouldn't be expensive.</Typography>
          </Box>
          </Container>
      </Box>
    </>
  )
}

export default Complexion
