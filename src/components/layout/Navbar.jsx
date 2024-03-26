import { Box, Container, Drawer, Stack, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/graphics/logo.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShoppingBag from "../../assets/icons/ShoppingBag";
import Profile from "../../assets/icons/Profile";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import NavLinks from "../internal/NavLinks";

const Navbar = () => {
  const matches = useMediaQuery("(max-width:900px)");
  // search field
  const [searchField, setSearchField] = useState(false);
  const ShowSearchField = () => {
    setSearchField(true);
  };
  // outside search field click
  const searchInputRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target)
    ) {
      setSearchField(false);
    }
  };
  // drawer
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [searchInputRef]);
  return (
    <>
      <Box className="nav-container center">
        <Container>
          <Stack
            className="nav-wrapper"
            direction="row"
            justifyContent="space-between"
          >
            <Stack className="center" direction="row" spacing={2}>
              {matches ? (
                <Box onClick={toggleDrawer(true)}>
                  <MenuIcon fontSize="small" />
                </Box>
              ) : null}
              <Box className="center">
                <img src={logo} alt="logo" />
              </Box>
              {matches ? null : (
                <Stack className="ml-80 center" direction="row" spacing={5}>
                  <NavLinks/>
                </Stack>
              )}
            </Stack>
            <Stack className="center" direction="row" spacing={2}>
              {searchField ? (
                <Box>
                  <input
                    ref={searchInputRef}
                    className="search-field"
                    placeholder="search"
                  />
                </Box>
              ) : (
                <Box onClick={ShowSearchField}>
                  <SearchIcon />
                </Box>
              )}
              <Link to={"#"}>
                <ShoppingBag />
              </Link>
              <Link to={"#"}>
                <Profile />
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ padding: "10px" }}
      >
        <Box className="ml-18 mt-18" onClick={toggleDrawer(false)}>
          <CloseIcon fontSize="small" />
        </Box>
        <Box className="drawer-container">
          <NavLinks/>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
