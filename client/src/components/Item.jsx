import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { shades } from "../theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

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

  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="400px"
          height="400px"
          src={url}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              background={shades.neutral[100]}
              borderRadius="3px"
            ></Box>
            <Button
              onClick={() => {
                if (!isItemInCart) {
                  dispatch(addToCart({ item: { ...item, count: 1 } }));
                }
              }}
              sx={{
                backgroundColor: isItemInCart ? "#999999" : shades.primary[500],
                color: "white",
                cursor: isItemInCart ? "default" : "pointer",
              }}
              disabled={isItemInCart} // Deshabilitar el botón si el artículo ya está en el carrito
            >
              {isItemInCart ? "In Cart" : "Add to Cart"}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
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
