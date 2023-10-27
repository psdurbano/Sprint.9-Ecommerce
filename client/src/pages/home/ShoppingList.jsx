import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography, Input } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    async function getItems() {
      const items = await fetch(
        "https://strapi-amr.onrender.com/api/items?populate=image&pagination[limit]=50",
        { method: "GET" }
      );
      const itemsJson = await items.json();
      dispatch(setItems(itemsJson.data));
    }

    getItems();
  }, [dispatch]);

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Top Picks <b>Albums</b>
      </Typography>
      <Input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        fullWidth
        sx={{
          m: "10px",
          transition: "transform 0.3s ease-in-out",
          transform: searchTerm ? "translateX(0)" : "translateX(-50px)",
        }}
      />
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="JAZZ" value="jazz" />
        <Tab label="POP" value="pop" />
        <Tab label="ROCK" value="rock" />
        <Tab label="SOUL" value="soul" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(auto-fill, minmax(300px, 1fr))",
          md: "repeat(auto-fill, minmax(400px, 1fr))",
        }}
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1%"
        p={1}
      >
        {items
          .filter(
            (item) =>
              value === "all" ||
              item.attributes.category.toLowerCase() === value
          )
          .filter(
            (item) =>
              searchTerm.trim() === "" ||
              item.attributes.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <Item
              item={item}
              key={`${item.name}-${item.id}`}
              style={{ maxWidth: "100%" }}
            />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
