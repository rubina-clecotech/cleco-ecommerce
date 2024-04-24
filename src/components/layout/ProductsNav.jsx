import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCategories } from "../../features/products/ProductList";

const ProductsNav = () => {
  const dispatch = useDispatch();
  const handleFilter = (title) => {
    dispatch(filterCategories(title));
  };
  // dropdown menu
  const [open, setOpen] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };
  
  // lip care
  const [openLipcare, setOpenLipcare] = useState(null);
  const handleOpenLipcare = () => {
    setOpenLipcare(true);
  };
   // lip care
   const [openMoisturizer, setOpenMoisturizer] = useState(null);
   const handleOpenMoisturizer = () => {
     setOpenMoisturizer(true);
   };
  // close
  const handleClose = () => {
    setOpen(null);
    setOpenLipcare(null)
    setOpenMoisturizer(null)
  };
  const navigationRef = useRef(null);
  useEffect(() => {
    const navigationElement = navigationRef.current;

    const handleMouseLeave = () => {
      handleClose();
    };

    if (navigationElement) {
      navigationElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (navigationElement) {
        navigationElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  // list
  const list = [
    { title: "Cleanser", path: "#", text: "cleanser",open:handleOpen },
    { title: "Lip Care", path: "#", text: "lip care" ,open:handleOpenLipcare },
    { title: "Moisturizer", path: "#", text: "moisturizer" ,open:handleOpenMoisturizer },
  ];
  return (
    <>
      <Box className="product-nav" >
        <Container>
          <Stack
            className="product-nav"
            direction="row"
            spacing={4}
            alignItems="center"
          >
            <Typography className="title" onClick={() => handleFilter("")}>
              All products
            </Typography>
            {list.map((item) => (
              <Box className="nav-links" ref={navigationRef}>
                <Typography
                  onClick={() => handleFilter(item.text)}
                  className="title"
                  onMouseOver={item.open}  
                  OnMouseOut={handleClose}               
                >
                  {item.title}
                </Typography>
                {item.title === "Cleanser" && open && (
                  <Stack className="menu" onMouseLeave={()=>handleClose()} >
                    <Typography className="item">Face Washes</Typography>
                    <Typography className="item">
                      Scrubs & Exfoliators
                    </Typography>
                    <Typography className="item">Face Wipes</Typography>
                    <Typography className="item">Makeup Remover</Typography>
                  </Stack>
                )}
                {item.title === "Lip Care" && openLipcare && (
                  <Stack className="menu" onMouseLeave={()=>handleClose()} >
                    <Typography className="item">Lip Balm</Typography>
                    <Typography className="item">
                      Lip Scrub
                    </Typography>
                    <Typography className="item">Lip Mask</Typography>
                  </Stack>
                )}
                {item.title === "Moisturizer" && openMoisturizer && (
                  <Stack className="menu" onMouseLeave={()=>handleClose()} >
                    <Typography className="item">Body Lotion</Typography>
                    <Typography className="item">
                      Lip Scrub
                    </Typography>
                    <Typography className="item">Lip Mask</Typography>
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ProductsNav;
