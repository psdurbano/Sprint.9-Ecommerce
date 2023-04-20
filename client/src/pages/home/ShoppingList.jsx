import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const JazzAlbums = items.filter(
    (item) => item.attributes.category === "jazz"
  );
  const SoulAlbums = items.filter(
    (item) => item.attributes.category === "soul"
  );
  const PopAlbums = items.filter((item) => item.attributes.category === "pop");
  const RockAlbums = items.filter(
    (item) => item.attributes.category === "rock"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Top Picks <b>Albums</b>
      </Typography>
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
        <Tab label="SOUL" value="soul" />
        <Tab label="POP" value="pop" />
        <Tab label="ROCK" value="rock" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 400px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "jazz" &&
          JazzAlbums.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "soul" &&
          SoulAlbums.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "pop" &&
          PopAlbums.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "rock" &&
          RockAlbums.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
