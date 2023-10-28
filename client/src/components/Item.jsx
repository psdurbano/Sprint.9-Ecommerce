import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [isHovered, setIsHovered] = useState(false);
  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  const handleAddToCart = () => {
    if (!isItemInCart) {
      dispatch(addToCart({ item: { ...item, count: 1 } }));
    }
  };

  return (
    <Box
      width={width}
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 1px 2px rgba(0, 0, 0, 0.05)" : "none",
      }}
    >
      <img
        alt={item.name}
        width="380px"
        height="380px"
        src={url}
        onClick={() => navigate(`/item/${item.id}`)}
        style={{ cursor: "pointer" }}
      />
      <Box
        display={isHovered ? "flex" : "none"}
        justifyContent="space-between"
        position="absolute"
        left="55%"
        top="-10%"
        width="100%"
        padding="0 5%"
        background={shades.neutral[100]}
        borderRadius="3px"
        style={{ position: "relative" }}
      >
        <Button
          onClick={handleAddToCart}
          sx={{
            backgroundColor: isItemInCart ? "#999999" : shades.primary[500],
            color: "white",
            cursor: isItemInCart ? "default" : "pointer",
          }}
          disabled={isItemInCart}
        >
          {isItemInCart ? "In Cart" : "Add to Cart"}
        </Button>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={shades.neutral.dark}>
          {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">€ {price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
