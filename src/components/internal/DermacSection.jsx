import { Box, Stack } from '@mui/material'
import React from 'react'
import image from "../../assets/graphics/dermac.png"

const DermacSection = () => {
  return (
    <>
      <Stack className='dermac-container' direction="row" alignItems="center" justifyContent="center">
        <Box className="image-box">
            <img src={image} className='dermac-image'/>
        </Box>
        <Box className="content-box">

        </Box>
      </Stack>
    </>
  )
}

export default DermacSection
