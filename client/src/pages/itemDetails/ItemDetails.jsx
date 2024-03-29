import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from "../../state";
import Item from "../../components/Item";
import { shades } from "../../theme";

const apiUrl = "https://strapi-amr.onrender.com/api/items";

const ItemDetails = () => {
  const [value, setValue] = useState("description");
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const cart = useSelector((state) => state.cart.cart);
  const isItemInCart = cart.some((cartItem) => cartItem.id === item?.id);

  // Manejar errores en las peticiones
  const handleRequestError = (error) => {
    console.error("Error en la petición:", error);
  };

  useEffect(() => {
    // Función para obtener la información del item
    const getItem = async () => {
      try {
        const itemResponse = await fetch(`${apiUrl}/${itemId}?populate=image`, {
          method: "GET",
        });
        const itemJson = await itemResponse.json();
        setItem(itemJson.data);
      } catch (error) {
        handleRequestError(error);
      }
    };

    // Función para obtener la lista de items relacionados
    const getItems = async () => {
      try {
        const itemsResponse = await fetch(`${apiUrl}?populate=image`, {
          method: "GET",
        });
        const itemsJson = await itemsResponse.json();
        setItems(itemsJson.data);
      } catch (error) {
        handleRequestError(error);
      }
    };

    // Llamar a las funciones para obtener los datos
    getItem();
    getItems();
  }, [itemId]);

  const renderLink = (item, label) =>
    item && (
      <Link
        to={`/item/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography variant="body1">{label}</Typography>
      </Link>
    );

  // Filtrar items relacionados con la misma categoría
  const relatedItems = items.filter(
    (relatedItem) =>
      item &&
      item.attributes &&
      item.attributes.category &&
      relatedItem.attributes.category === item.attributes.category &&
      relatedItem.id !== item.id
  );

  const currentIndex = items.findIndex((i) => i.id === parseInt(itemId));
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem =
    currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleAddToCart = () => {
    if (!isItemInCart) {
      dispatch(addToCart({ item: { ...item, count: 1 } }));
    }
  };

  return (
    <Box width="80%" m="80px auto">
      {item && (
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={item.attributes.name}
              width="100%"
              height="100%"
              src={item.attributes.image.data.attributes.formats.medium.url}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box flex="1 1 50%" mb="40px">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              textAlign="center"
            >
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body1">Home</Typography>
              </Link>
              <Box display="flex" alignItems="center">
                {renderLink(prevItem, "Prev ")}
                {prevItem && nextItem && (
                  <Typography variant="body1"> ⎮ </Typography>
                )}
                {renderLink(nextItem, "Next")}
              </Box>
            </Box>
            <Box m="65px 0 25px 0">
              <Typography variant="h3">{item.attributes.name}</Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                € {item.attributes.price}
              </Typography>
              {item.attributes.tracklist && (
                <Typography>
                  <strong>Tracklist:</strong> {item.attributes.tracklist}
                </Typography>
              )}
              <Typography sx={{ mt: "20px" }}>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {item.attributes.longDescription &&
                    item.attributes.longDescription
                      .split("\n")
                      .map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              <Button
                sx={{
                  backgroundColor: isItemInCart
                    ? "#999999"
                    : shades.primary[500],
                  color: "white",
                  borderRadius: 0,
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={handleAddToCart}
                disabled={isItemInCart}
              >
                {isItemInCart ? "IN CART" : "ADD TO CART"}
              </Button>
            </Box>
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                {isInWishlist ? (
                  <FavoriteIcon
                    style={{ color: "black" }}
                    onClick={handleWishlistClick}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon onClick={handleWishlistClick} />
                )}
                <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
              </Box>
              <Typography>CATEGORIES: {item.attributes.category}</Typography>
            </Box>
          </Box>
        </Box>
      )}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="CONDITION" value="condition" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>
            {item &&
              item.attributes.shortDescription &&
              item.attributes.shortDescription
                .split("\n")
                .map((item, i) => <li key={i}>{item}</li>)}
          </div>
        )}
        {value === "condition" && (
          <div>
            {item && item.attributes.mediaCondition && (
              <Typography>
                <strong>Media Condition:</strong>{" "}
                {item.attributes.mediaCondition}
              </Typography>
            )}
            {item && item.attributes.sleeveCondition && (
              <Typography>
                <strong>Sleeve Condition:</strong>{" "}
                {item.attributes.sleeveCondition}
              </Typography>
            )}
          </div>
        )}
      </Box>
      {relatedItems.length > 0 && (
        <Box mt="40px" width="100%">
          <Typography variant="h3" fontWeight="bold">
            Related Products
          </Typography>
          <Box
            mt="20px"
            display="flex"
            width="90%"
            flexWrap="wrap"
            columnGap="1.33%"
            justifyContent="space-between"
          >
            {relatedItems.slice(0, 4).map((item, i) => (
              <Item key={`${item.attributes.name}-${i}`} item={item} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ItemDetails;
