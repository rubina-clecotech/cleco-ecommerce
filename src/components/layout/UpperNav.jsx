import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UpperNav = () => {
  return (
    <>
      <Box className="upper-nav-container center">
        <Typography className='content'>Get FREE shipping on all orders over $20. <Link to="/product-list" className='bold-content'>Shop Now</Link></Typography> 
      </Box>
    </>
  )
}

export default UpperNav
