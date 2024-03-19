import { Box, Container, Drawer, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import logo from "../../assets/graphics/logo.png"
import SearchIcon from '../../assets/icons/SearchIcon'
import ShoppingBag from '../../assets/icons/ShoppingBag'
import Profile from '../../assets/icons/Profile'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const matches = useMediaQuery('(max-width:900px)')
  // drawer
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    console.log("drawer")
  };
  return (
    <>
      <Box className="nav-container center">
        <Container>
          <Stack className='nav-wrapper' direction="row" justifyContent="space-between">
          <Stack className='center' direction="row" spacing={2}>
              { matches ? <Box onClick={toggleDrawer(true)}><MenuIcon fontSize='small'/></Box> :null}
              <Box className="center">
              <img src={logo} alt='logo'/>
              </Box>
              {
                matches?null:
                <Stack className='ml-80 center' direction="row" spacing={5}>
                <Typography className='nav-list'>Home</Typography>
                <Typography className='nav-list'>Products</Typography>
                <Typography className='nav-list'>Why us ?</Typography>
                <Typography className='nav-list'>Reviews</Typography>
              </Stack>
              }
          </Stack>
              <Stack className='center' direction="row" spacing={2}>
                <Box><SearchIcon/></Box>
                <Box><ShoppingBag/></Box>
                <Box><Profile/></Box>
              </Stack>
          </Stack>
        </Container>
      </Box>
      {/* drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{padding:"10px"}}>
        <Box className="ml-18 mt-18" onClick={toggleDrawer(false)}><CloseIcon fontSize='small'/></Box>
        <Box className="drawer-container">
          <Box className="drawer-list">Home</Box>
          <Box className="drawer-list">Products</Box>
          <Box className="drawer-list">Why us ?</Box>
          <Box className="drawer-list">Reviews</Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
