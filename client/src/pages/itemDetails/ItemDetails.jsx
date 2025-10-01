import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from "../../state";
import Item from "../../components/Item";

const apiUrl = "https://sprint9-ecommerce-production.up.railway.app/api/items";

const ItemDetails = () => {
  const [value, setValue] = useState("description");
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const cart = useSelector((state) => state.cart.cart);
  const isItemInCart = cart.some((cartItem) => cartItem.id === item?.id);

  const handleRequestError = (error) => {
    console.error("Error en la petición:", error);
  };

  useEffect(() => {
    const getItem = async () => {
      try {
        const itemResponse = await fetch(`${apiUrl}/${itemId}?populate=image`);
        const itemJson = await itemResponse.json();
        setItem(itemJson.data);
      } catch (error) {
        handleRequestError(error);
      }
    };

    const getItems = async () => {
      try {
        const itemsResponse = await fetch(`${apiUrl}?populate=image`);
        const itemsJson = await itemsResponse.json();
        setItems(itemsJson.data);
      } catch (error) {
        handleRequestError(error);
      }
    };

    getItem();
    getItems();
  }, [itemId]);

  const getImageUrl = (item) => {
    if (!item?.attributes?.image?.data?.attributes?.formats?.medium?.url) {
      return "/default-image.jpg";
    }
    return `https://sprint9-ecommerce-production.up.railway.app${item.attributes.image.data.attributes.formats.medium.url}`;
  };

  const renderLink = (item, label) =>
    item && (
      <Link to={`/item/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Typography variant="body1">{label}</Typography>
      </Link>
    );

  const relatedItems = items.filter(
    (relatedItem) =>
      item &&
      item.attributes &&
      item.attributes.category &&
      relatedItem?.attributes?.category === item.attributes.category &&
      relatedItem.id !== item.id
  );

  const currentIndex = items.findIndex((i) => i.id === parseInt(itemId));
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  const handleAddToCart = () => {
    if (!isItemInCart && item) {
      dispatch(addToCart({ item: { ...item, count: 1 } }));
    }
  };

  const buttonStyles = {
    addButton: {
      color: "#000",
      fontSize: "12px",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      padding: "12px 24px",
      border: "1px solid #000",
      backgroundColor: "transparent",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "system-ui, sans-serif",
      minWidth: "150px",
      "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
      },
    },
    inCartButton: {
      color: "#fff",
      fontSize: "12px",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      padding: "12px 24px",
      border: "1px solid #000",
      backgroundColor: "#000",
      cursor: "default",
      fontFamily: "system-ui, sans-serif",
      minWidth: "150px",
    },
  };

  if (!item || !item.attributes) {
    return (
      <Box width="80%" m="80px auto" textAlign="center">
        <Typography variant="h4">Loading item...</Typography>
      </Box>
    );
  }

  return (
    <Box width="80%" m="80px auto">
      {/* Imagen y detalles */}
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item.attributes.name || "Item image"}
            width="100%"
            height="100%"
            src={getImageUrl(item)}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between" alignItems="center" textAlign="center">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="body1">Home</Typography>
            </Link>
            <Box display="flex" alignItems="center">
              {renderLink(prevItem, "Prev ")}
              {prevItem && nextItem && <Typography variant="body1"> ⎮ </Typography>}
              {renderLink(nextItem, "Next")}
            </Box>
          </Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item.attributes.name}</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              € {item.attributes.price || "N/A"}
            </Typography>
            {item.attributes.tracklist && (
              <Typography>
                <strong>Tracklist:</strong> {item.attributes.tracklist}
              </Typography>
            )}
            <Typography sx={{ mt: "20px" }}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {item.attributes.longDescription &&
                  item.attributes.longDescription.split("\n").map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              component="button"
              onClick={isItemInCart ? undefined : handleAddToCart}
              sx={isItemInCart ? buttonStyles.inCartButton : buttonStyles.addButton}
            >
              {isItemInCart ? "IN CART" : "ADD TO CART"}
            </Box>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex" alignItems="center">
              {isInWishlist ? (
                <FavoriteIcon style={{ color: "black" }} onClick={handleWishlistClick} />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={handleWishlistClick} />
              )}
              <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
            </Box>
            <Typography>CATEGORIES: {item.attributes.category || "Unknown"}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Tabs */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="CONDITION" value="condition" />
        </Tabs>
      </Box>

      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>
            {item.attributes.shortDescription &&
              item.attributes.shortDescription.split("\n").map((line, i) => <li key={i}>{line}</li>)}
          </div>
        )}
        {value === "condition" && (
          <div>
            {item.attributes.mediaCondition && (
              <Typography>
                <strong>Media Condition:</strong> {item.attributes.mediaCondition}
              </Typography>
            )}
            {item.attributes.sleeveCondition && (
              <Typography>
                <strong>Sleeve Condition:</strong> {item.attributes.sleeveCondition}
              </Typography>
            )}
          </div>
        )}
      </Box>

      {/* Related Products usando Grid */}
      {relatedItems.length > 0 && (
        <Box mt="40px" width="100%">
          <Typography variant="h3" fontWeight="bold">
            Related Products
          </Typography>
          <Grid
            container
            spacing={3}
            mt={2}
            justifyContent="center"
            alignItems="stretch"
          >
            {relatedItems.slice(0, 4).map((relatedItem) => (
              <Grid
                item
                key={relatedItem.id}
                xs={12} // 1 por fila en móvil
                sm={6}  // 2 por fila en tablet
                md={3}  // 4 por fila en escritorio
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Item item={relatedItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ItemDetails;
