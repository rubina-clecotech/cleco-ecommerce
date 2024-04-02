import { Box } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
    const location = useLocation();
    const navLinks = [
        { text: "Home", path: "/" },
        { text: "Products", path: "#" },
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
              >
                {item.text}
              </Link>
            </Box>
          ))}
    </>
  )
}

export default NavLinks
