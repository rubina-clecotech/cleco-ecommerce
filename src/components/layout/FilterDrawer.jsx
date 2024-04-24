import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { clearFilters, setFilter } from "../../features/products/ProductList";
import { filter } from "../../constant";
import { ClickButton } from "../shared/Buttons";

const FilterDrawer = ({ toggleDrawer, open }) => {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState({});
  const handleFilter = (category, option) => {
    const currentFilter = filtered[category];
    if (currentFilter === option.id) {
      const newFiltered = { ...filtered };
      delete newFiltered[category];
      setFiltered(newFiltered);
      dispatch(
        setFilter({
          type: option.filterType,
          value: "",
        })
      );
    } else {
      dispatch(
        setFilter({
          type: option.filterType,
          value: option.filterValue,
        })
      );
      setFiltered({ ...filtered, [category]: option.id });
    }
  };

  const [openList, setOpenList] = useState(false);

  const handleClick = (id) => {
    setOpenList(openList === id ? null : id);
  };
  // clear filter
  const handleClearFilter = () => {
    dispatch(clearFilters())
    setFiltered({})
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ padding: "10px" }}
        className="drawer"
      >
        <List className="list-container">
          <ListSubheader>Filter</ListSubheader>
          {filter.map((item) => (
            <>
              <ListItemButton onClick={() => handleClick(item.id)}>
                <ListItemText primary={item.title} />
                {openList === item.id ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList === item.id} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.options.map((option) => (
                    <ListItemButton
                      className={
                        filtered[item.id] === option.id
                          ? "clicked-list"
                          : "unclicked-list"
                      }
                      onClick={() => {
                        handleFilter(item.id, option);
                      }}
                    >
                      <ListItemText primary={option.title} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
              <Divider />
            </>
          ))}
          <Stack alignItems="end">
            <ClickButton
              styling="mt-18 mr-18 clear-filter"
              color="error"
              title="Clear All"
              onClick={handleClearFilter}
            />
          </Stack>
        </List>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
