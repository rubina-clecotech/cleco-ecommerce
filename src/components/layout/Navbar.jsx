import {
  Autocomplete,
  Badge,
  Box,
  Container,
  Drawer,
  Stack,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/graphics/logo.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShoppingBag from "../../assets/icons/ShoppingBag";
import Profile from "../../assets/icons/Profile";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "../internal/NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { SearchProduct } from "../../features/products/ProductList";

const Navbar = () => {
  const matches = useMediaQuery("(max-width:900px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cartItems);
  const { filteredProducts } = useSelector((state) => state.productList);

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
      setSearchInput("");
    }
  };
  // drawer
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // search
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e, item) => {
    e.preventDefault();
    dispatch(SearchProduct(item));
    navigate("/product-list");
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
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="nav-logo" />
                </Link>
              </Box>
              {matches ? null : (
                <Stack className="ml-80 center" direction="row" spacing={5}>
                  <NavLinks />
                </Stack>
              )}
            </Stack>
            <Stack
              className="center"
              direction="row"
              spacing={{ sm: 2, xs: 0.5 }}
            >
              {searchField ? (
                <form
                  className="center"
                  onSubmit={(e) => handleSearch(e, searchInput)}
                >
                  <Autocomplete
                    disablePortal
                    ref={searchInputRef}
                    className="search-field"
                    open={searchInput.length > 0}
                    options={filteredProducts.map(
                      (item) =>
                        item.title ||
                        item.title.replace(/\s/g, "").toLowerCase() ||
                        item.category
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search"
                        size="small"
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                        color="grey"
                      />
                    )}
                  />
                </form>
              ) : (
                <Box onClick={ShowSearchField}>
                  <SearchIcon />
                </Box>
              )}
              <Link to={"/checkout"}>
                <Badge color="warning" badgeContent={cart.length}>
                  <ShoppingBag />
                </Badge>
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
          <NavLinks toggleDrawer={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
