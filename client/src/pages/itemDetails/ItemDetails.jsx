import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Grid,
  Button,
  IconButton,
  Skeleton,
  Alert,
  useTheme,
} from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { addToCart, removeFromCart } from "../../state";
import Item from "../../components/Item";
import { getImageUrl } from "../../utils/imageHelper";
import { API_ENDPOINTS } from "../../utils/apiConfig";
import { shades } from "../../theme";

const ItemDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemId } = useParams();

  const [activeTab, setActiveTab] = useState("description");
  const [item, setItem] = useState(null);
  const [itemsFromStore, setItemsFromStore] = useState([]); // solo si no están en Redux
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Stock simulation
  const [stockAvailable] = useState(true);
  const [stockCount] = useState(5);

  // Accedemos a los ítems ya cargados en Redux (por ShoppingList)
  const itemsFromRedux = useSelector((state) => state.cart.items || []);
  const cart = useSelector((state) => state.cart.cart);

  const isItemInCart = useMemo(
    () => cart.some((cartItem) => cartItem.id === item?.id),
    [cart, item]
  );

  const handleTabChange = useCallback((event, newValue) => {
    setActiveTab(newValue);
  }, []);

  const handleWishlistToggle = useCallback(() => {
    setIsInWishlist((prev) => !prev);
  }, []);

  // Quantity handlers
  const handleIncreaseQuantity = useCallback(() => {
    if (quantity < stockCount) {
      setQuantity((prev) => prev + 1);
    }
  }, [quantity, stockCount]);

  const handleDecreaseQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }, [quantity]);

  const handleQuantityChange = useCallback(
    (e) => {
      const value = parseInt(e.target.value) || 1;
      if (value > 0 && value <= stockCount) {
        setQuantity(value);
      }
    },
    [stockCount]
  );

  const handleCartToggle = useCallback(() => {
    if (!item) return;
    if (isItemInCart) {
      dispatch(removeFromCart({ id: item.id }));
      setQuantity(1);
    } else {
      dispatch(addToCart({ item: { ...item, count: quantity } }));
      setQuantity(1);
    }
  }, [isItemInCart, item, dispatch, quantity]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.src = "/images/default-image.jpg";
    e.target.alt = "Default product image";
    setImageLoaded(true);
  }, []);

  const handleNavigation = useCallback((itemId) => {
    if (itemId) {
      navigate(`/item/${itemId}`);
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  // Determinar qué conjunto de ítems usar
  const allItems = itemsFromRedux.length > 0 ? itemsFromRedux : itemsFromStore;

  useEffect(() => {
    let isMounted = true;

    const fetchItem = async () => {
      try {
        const itemResponse = await fetch(
          `${API_ENDPOINTS.itemDetail(itemId)}?populate=image`
        );
        if (!itemResponse.ok) throw new Error("Failed to fetch item");
        const itemJson = await itemResponse.json();
        if (!isMounted) return;
        setItem(itemJson.data);
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          console.error("ItemDetails item fetch error:", err);
        }
      }
    };

    const fetchMinimalItems = async () => {
      // Solo si Redux no tiene ítems (acceso directo)
      if (itemsFromRedux.length > 0) return;

      try {
        // Cargar solo 2 páginas (48 ítems) para navegación y relacionados
        const responses = await Promise.all([
          fetch(`${API_ENDPOINTS.items}?populate=image&pagination[page]=1&pagination[pageSize]=24`),
          fetch(`${API_ENDPOINTS.items}?populate=image&pagination[page]=2&pagination[pageSize]=24`),
        ]);

        const allData = await Promise.all(
          responses.map((res) => (res.ok ? res.json() : { data: [] }))
        );

        const combined = [...allData[0].data, ...allData[1].data];
        if (isMounted) setItemsFromStore(combined);
      } catch (err) {
        console.warn("Could not fetch minimal items list:", err);
        // No es crítico: solo afecta navegación prev/next y relacionados
      }
    };

    setIsLoading(true);
    setError(null);
    setImageLoaded(false);

    Promise.all([fetchItem(), fetchMinimalItems()]).finally(() => {
      if (isMounted) setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [itemId, itemsFromRedux.length]);

  const { prevItem, nextItem } = useMemo(() => {
    if (!Array.isArray(allItems) || !item?.id)
      return { prevItem: null, nextItem: null };
    const currentIndex = allItems.findIndex((i) => i.id === item.id);
    return {
      prevItem: currentIndex > 0 ? allItems[currentIndex - 1] : null,
      nextItem: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
    };
  }, [allItems, item]);

  const relatedItems = useMemo(() => {
    if (!item || !item.attributes?.category || !Array.isArray(allItems)) {
      return [];
    }
    const currentCategory = item.attributes.category.trim().toUpperCase();
    const sameCategoryItems = allItems.filter((relatedItem) => {
      if (!relatedItem?.attributes?.category) return false;
      return (
        relatedItem.attributes.category.trim().toUpperCase() === currentCategory &&
        String(relatedItem.id) !== String(item.id) &&
        !cart.some((cartItem) => String(cartItem.id) === String(relatedItem.id))
      );
    });
    if (sameCategoryItems.length < 4) {
      const otherCategoryItems = allItems.filter((relatedItem) => {
        if (!relatedItem?.attributes?.category) return false;
        return (
          relatedItem.attributes.category.trim().toUpperCase() !== currentCategory &&
          String(relatedItem.id) !== String(item.id) &&
          !cart.some((cartItem) => String(cartItem.id) === String(relatedItem.id))
        );
      });
      const shuffledOthers = [...otherCategoryItems].sort(() => Math.random() - 0.5);
      return [
        ...sameCategoryItems,
        ...shuffledOthers.slice(0, 4 - sameCategoryItems.length),
      ].slice(0, 4);
    }
    return sameCategoryItems.slice(0, 4);
  }, [allItems, item, cart]);

  const buttonStyles = useMemo(
    () => ({
      notInCartButton: {
        color: theme.palette.text.primary,
        fontSize: "0.75rem",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "12px 24px",
        border: `1px solid ${theme.palette.text.primary}`,
        backgroundColor: "transparent",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: theme.typography.fontFamily,
        minWidth: "150px",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.background.paper,
          transform: "translateY(-1px)",
        },
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        },
      },
      inCartButton: {
        color: theme.palette.background.paper,
        fontSize: "0.75rem",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "12px 24px",
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.primary.main,
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: theme.typography.fontFamily,
        minWidth: "150px",
        borderRadius: 0,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
          transform: "translateY(-1px)",
        },
        "&:focus-visible": {
          outline: `2px solid ${theme.palette.primary.main}`,
          outlineOffset: "2px",
        },
      },
    }),
    [theme]
  );

  if (isLoading) {
    return (
      <Box
        width={{ xs: "90%", sm: "85%", md: "80%" }}
        maxWidth={1200}
        m={`${theme.spacing(8)} auto`}
        sx={{ px: { xs: 2, sm: 3 } }}
      >
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          <Box flex="1 1 40%">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={400}
              sx={{ borderRadius: 0 }}
            />
          </Box>
          <Box flex="1 1 50%">
            <Skeleton variant="text" height={40} width="60%" />
            <Skeleton variant="text" height={30} width="40%" sx={{ mt: 2 }} />
            <Skeleton variant="text" height={100} width="100%" sx={{ mt: 3 }} />
            <Skeleton
              variant="rectangular"
              height={45}
              width={150}
              sx={{ mt: 3, borderRadius: 0 }}
            />
          </Box>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        width={{ xs: "90%", sm: "85%", md: "80%" }}
        maxWidth={1200}
        m={`${theme.spacing(8)} auto`}
        sx={{ px: { xs: 2, sm: 3 } }}
      >
        <Alert
          severity="error"
          sx={{ mb: 3 }}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => window.location.reload()}
              sx={{ fontFamily: theme.typography.fontFamily }}
            >
              RETRY
            </Button>
          }
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: theme.typography.fontFamily }}
          >
            Failed to load item
          </Typography>
          <Typography sx={{ fontFamily: theme.typography.fontFamily }}>
            {error}
          </Typography>
        </Alert>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          startIcon={<HomeIcon />}
          sx={{ fontFamily: theme.typography.fontFamily }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  if (!item || !item.attributes) {
    return (
      <Box
        width={{ xs: "90%", sm: "85%", md: "80%" }}
        maxWidth={1200}
        m={`${theme.spacing(8)} auto`}
        textAlign="center"
        sx={{ px: { xs: 2, sm: 3 } }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: theme.typography.fontFamily }}
        >
          Item Not Found
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          gutterBottom
          sx={{ fontFamily: theme.typography.fontFamily }}
        >
          The item you're looking for doesn't exist or has been removed.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          startIcon={<HomeIcon />}
          sx={{
            mt: 2,
            fontFamily: theme.typography.fontFamily,
            borderRadius: 0,
          }}
        >
          Return to Homepage
        </Button>
      </Box>
    );
  }

  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={1200}
      m={`${theme.spacing(8)} auto`}
      sx={{ px: { xs: 2, sm: 3 } }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        mb={6}
      >
        <Box flex="1 1 40%">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: shades.neutral[100],
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <img
              alt={item.attributes.name || "Product image"}
              width="100%"
              height="100%"
              src={getImageUrl(item)}
              style={{
                objectFit: "contain",
                display: imageLoaded ? "block" : "none",
              }}
              loading="eager"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            {!imageLoaded && (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={400}
                sx={{ borderRadius: 0 }}
              />
            )}
          </Box>
        </Box>
        <Box flex="1 1 50%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 4, py: 1, flexWrap: "wrap", gap: 1 }}
          >
            <Box display="flex" alignItems="center" gap={0.75} sx={{ flex: 1, minWidth: "200px" }}>
              <Box
                component={Link}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "text.secondary",
                  transition: "all 0.2s ease",
                  fontFamily: theme.typography.fontFamily,
                  "&:hover": { color: "text.primary" },
                }}
              >
                <HomeIcon sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 400,
                    fontSize: "0.7rem",
                    letterSpacing: "0.3px",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  Store
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "0.7rem", color: theme.palette.divider }}> / </Typography>
              <Typography sx={{ fontSize: "0.7rem", fontFamily: theme.typography.fontFamily, color: theme.palette.text.secondary, textTransform: "capitalize" }}>
                {item.attributes.category || "Products"}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", color: theme.palette.divider }}> / </Typography>
              <Typography sx={{ fontSize: "0.7rem", fontFamily: theme.typography.fontFamily, color: theme.palette.text.primary, fontWeight: 500 }}>
                {item.attributes.name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <IconButton
                onClick={() => prevItem && handleNavigation(prevItem.id)}
                disabled={!prevItem}
                aria-label="Previous item"
                size="small"
                sx={{
                  padding: "2px",
                  color: "text.secondary",
                  "&:hover:not(.Mui-disabled)": { color: "text.primary" },
                }}
              >
                <NavigateBeforeIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <Box sx={{ width: "1px", height: "12px", backgroundColor: "divider", mx: 0.5 }} />
              <IconButton
                onClick={() => nextItem && handleNavigation(nextItem.id)}
                disabled={!nextItem}
                aria-label="Next item"
                size="small"
                sx={{
                  padding: "2px",
                  color: "text.secondary",
                  "&:hover:not(.Mui-disabled)": { color: "text.primary" },
                }}
              >
                <NavigateNextIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
          <Box mb={4}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontFamily: theme.typography.fontFamily,
                fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.75rem" },
                mb: 1.5,
              }}
            >
              {item.attributes.name}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "primary.main",
                  fontSize: "1.25rem",
                  fontFamily: theme.typography.fontFamily,
                  mb: 0.5,
                }}
              >
                € {item.attributes.price?.toFixed(2) || "N/A"}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  color: "text.secondary",
                  fontSize: "0.7rem",
                }}
              >
                Incl. taxes (plus applicable shipping costs)
              </Typography>
            </Box>
            {item.attributes.tracklist && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ fontSize: "0.8rem", fontWeight: 500, mb: 1, fontFamily: theme.typography.fontFamily }}>
                  Tracklist
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, fontFamily: theme.typography.fontFamily, fontSize: "0.8rem", lineHeight: 1.3 }}>
                  {item.attributes.tracklist
                    .split("\n")
                    .map((track, index) =>
                      track.trim() ? (
                        <Typography key={index} component="li" sx={{ mb: 0.25, display: "flex", alignItems: "flex-start", fontSize: "0.8rem" }}>
                          <Typography component="span" sx={{ mr: 1, minWidth: 18, fontWeight: 600, color: "primary.main", fontSize: "0.8rem", fontFamily: theme.typography.fontFamily }}>
                            {index + 1}.
                          </Typography>
                          <span>{track.trim()}</span>
                        </Typography>
                      ) : null
                    )}
                </Box>
              </Box>
            )}
            {item.attributes.longDescription && (
              <Box sx={{ mt: 2, mb: 2 }}>
                {item.attributes.longDescription.split("\n").map((line, i) => (
                  <Typography key={i} variant="body2" sx={{ mb: 1, lineHeight: 1.4, fontSize: "0.85rem", fontFamily: theme.typography.fontFamily }}>
                    {line}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ fontSize: "0.7rem", fontFamily: theme.typography.fontFamily, fontWeight: 500, color: theme.palette.text.secondary }}>
                Qty:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", border: `1px solid ${theme.palette.divider}`, borderRadius: "2px" }}>
                <IconButton
                  size="small"
                  onClick={handleDecreaseQuantity}
                  disabled={quantity <= 1 || !stockAvailable}
                  sx={{
                    borderRadius: 0,
                    color: theme.palette.text.secondary,
                    padding: "4px 8px",
                    fontSize: "0.7rem",
                    "&:hover:not(.Mui-disabled)": { backgroundColor: shades.neutral[100], color: theme.palette.text.primary },
                    "&.Mui-disabled": { color: theme.palette.action.disabled },
                  }}
                >
                  <RemoveIcon sx={{ fontSize: "0.9rem" }} />
                </IconButton>
                <Box
                  component="input"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max={stockCount}
                  disabled={!stockAvailable}
                  sx={{
                    width: "40px",
                    border: "none",
                    outline: "none",
                    textAlign: "center",
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: theme.palette.text.primary,
                    backgroundColor: "transparent",
                    "&:disabled": { color: theme.palette.action.disabled },
                  }}
                />
                <IconButton
                  size="small"
                  onClick={handleIncreaseQuantity}
                  disabled={quantity >= stockCount || !stockAvailable}
                  sx={{
                    borderRadius: 0,
                    color: theme.palette.text.secondary,
                    padding: "4px 8px",
                    fontSize: "0.7rem",
                    "&:hover:not(.Mui-disabled)": { backgroundColor: shades.neutral[100], color: theme.palette.text.primary },
                    "&.Mui-disabled": { color: theme.palette.action.disabled },
                  }}
                >
                  <AddIcon sx={{ fontSize: "0.9rem" }} />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              {stockAvailable ? (
                <>
                  <CheckCircleIcon sx={{ color: "#4caf50", fontSize: "0.9rem" }} />
                  <Typography sx={{ fontSize: "0.7rem", fontFamily: theme.typography.fontFamily, color: theme.palette.text.secondary }}>
                    In Stock ({stockCount})
                  </Typography>
                </>
              ) : (
                <>
                  <ErrorIcon sx={{ color: "#f44336", fontSize: "0.9rem" }} />
                  <Typography sx={{ fontSize: "0.7rem", fontFamily: theme.typography.fontFamily, color: "#f44336" }}>
                    Out of Stock
                  </Typography>
                </>
              )}
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2} sx={{ mb: 3 }}>
            <Button
              onClick={handleCartToggle}
              variant={isItemInCart ? "contained" : "outlined"}
              sx={isItemInCart ? buttonStyles.inCartButton : buttonStyles.notInCartButton}
              aria-label={isItemInCart ? "Remove from cart" : "Add to cart"}
            >
              {isItemInCart ? "REMOVE FROM CART" : "ADD TO CART"}
            </Button>
            <IconButton
              onClick={handleWishlistToggle}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              color={isInWishlist ? "error" : "default"}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 0,
                "&:hover": { backgroundColor: shades.neutral[50] },
              }}
            >
              {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem", fontFamily: theme.typography.fontFamily }}>
              <strong>Category:</strong> {item.attributes.category || "Unknown"}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="Product details tabs">
          <Tab label="DESCRIPTION" value="description" sx={{ fontFamily: theme.typography.fontFamily }} />
          <Tab label="CONDITION" value="condition" sx={{ fontFamily: theme.typography.fontFamily }} />
        </Tabs>
      </Box>
      <Box sx={{ mb: 6 }}>
        <Box role="tabpanel" hidden={activeTab !== "description"}>
          {item.attributes.shortDescription && (
            <Box>
              {item.attributes.shortDescription.split("\n").map((line, i) => (
                <Typography key={i} variant="body2" sx={{ mb: 1.5, lineHeight: 1.5, fontSize: "0.85rem", fontFamily: theme.typography.fontFamily }}>
                  {line}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
        <Box role="tabpanel" hidden={activeTab !== "condition"}>
          <Box sx={{ "& > *": { mb: 1 } }}>
            {item.attributes.mediaCondition && (
              <Typography variant="body2" sx={{ fontSize: "0.85rem", fontFamily: theme.typography.fontFamily }}>
                <strong>Media Condition:</strong> {item.attributes.mediaCondition}
              </Typography>
            )}
            {item.attributes.sleeveCondition && (
              <Typography variant="body2" sx={{ fontSize: "0.85rem", fontFamily: theme.typography.fontFamily }}>
                <strong>Sleeve Condition:</strong> {item.attributes.sleeveCondition}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      {relatedItems.length > 0 && (
        <Box component="section" aria-labelledby="related-products-heading">
          <Typography id="related-products-heading" variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, fontFamily: theme.typography.fontFamily }}>
            Customers Also Bought
          </Typography>
          <Grid container spacing={3} mt={2}>
            {relatedItems.map((relatedItem) => (
              <Grid item key={relatedItem.id} xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center" }}>
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