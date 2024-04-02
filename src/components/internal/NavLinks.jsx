import { Box, useMediaQuery } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavLinks = ({toggleDrawer}) => {
  const matches = useMediaQuery("(max-width:900px)");
    const location = useLocation();
    const navLinks = [
        { text: "Home", path: "/" },
        { text: "Products", path: "/product-list" },
        { text: "Why us ?", path: "#" },
        { text: "Reviews", path: "#" },
      ];
  return (
    <>
      {navLinks.map((item) => (
            <Box className="drawer-list">
              <Link
                to={item.path}
                className={
                  location.pathname === item.path ? "active-link" : "nav-link"
                }
                onClick={matches&&item.path !=="#" ? toggleDrawer(false) : null}
              >
                {item.text}
              </Link>
            </Box>
          ))}
    </>
  )
}

export default NavLinks
