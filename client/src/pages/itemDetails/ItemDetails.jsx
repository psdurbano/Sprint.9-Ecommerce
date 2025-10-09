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
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { addToCart, removeFromCart } from "../../state";
import Item from "../../components/Item";
import { getImageUrl } from "../../utils/imageHelper";
import { API_ENDPOINTS } from "../../utils/apiConfig";

const ItemDetails = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemId } = useParams();

  const [activeTab, setActiveTab] = useState("description");
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const handleCartToggle = useCallback(() => {
    if (!item) return;

    if (isItemInCart) {
      dispatch(removeFromCart({ id: item.id }));
    } else {
      dispatch(addToCart({ item: { ...item, count: 1 } }));
    }
  }, [isItemInCart, item, dispatch]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.src = "/images/default-image.jpg";
    e.target.alt = "Default product image";
    setImageLoaded(true);
  }, []);

  const handleNavigation = useCallback(
    (itemId) => {
      if (itemId) {
        navigate(`/item/${itemId}`);
        window.scrollTo(0, 0);
      }
    },
    [navigate]
  );

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) return;

      setIsLoading(true);
      setError(null);
      setImageLoaded(false);

      try {
        const itemResponse = await fetch(
          `${API_ENDPOINTS.itemDetail(itemId)}?populate=image`
        );
        if (!itemResponse.ok) throw new Error("Failed to fetch item");
        const itemJson = await itemResponse.json();

        if (!isMounted) return;
        setItem(itemJson.data);

        let allItems = [];
        let page = 1;
        let hasMore = true;

        while (hasMore && isMounted) {
          const itemsResponse = await fetch(
            `${API_ENDPOINTS.items}?populate=image&pagination[page]=${page}&pagination[pageSize]=100`
          );
          if (!itemsResponse.ok) throw new Error("Failed to fetch items");
          const itemsJson = await itemsResponse.json();

          allItems = [...allItems, ...(itemsJson.data || [])];
          const { pagination } = itemsJson.meta || {};
          hasMore = pagination && page < pagination.pageCount;
          page += 1;
        }

        if (isMounted) {
          setItems(allItems);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          console.error("ItemDetails fetch error:", error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [itemId]);

  const { prevItem, nextItem } = useMemo(() => {
    if (!Array.isArray(items) || !item?.id)
      return { prevItem: null, nextItem: null };

    const currentIndex = items.findIndex((i) => i.id === item.id);
    return {
      prevItem: currentIndex > 0 ? items[currentIndex - 1] : null,
      nextItem:
        currentIndex < items.length - 1 ? items[currentIndex + 1] : null,
    };
  }, [items, item]);

  const relatedItems = useMemo(() => {
    if (!item || !item.attributes?.category || !Array.isArray(items)) {
      return [];
    }

    const currentCategory = item.attributes.category.trim().toUpperCase();

    const sameCategoryItems = items.filter((relatedItem) => {
      if (!relatedItem?.attributes?.category) return false;

      return (
        relatedItem.attributes.category.trim().toUpperCase() ===
          currentCategory &&
        String(relatedItem.id) !== String(item.id) &&
        !cart.some((cartItem) => String(cartItem.id) === String(relatedItem.id))
      );
    });

    if (sameCategoryItems.length < 4) {
      const otherCategoryItems = items.filter((relatedItem) => {
        if (!relatedItem?.attributes?.category) return false;

        return (
          relatedItem.attributes.category.trim().toUpperCase() !==
            currentCategory &&
          String(relatedItem.id) !== String(item.id) &&
          !cart.some(
            (cartItem) => String(cartItem.id) === String(relatedItem.id)
          )
        );
      });

      const shuffledOthers = [...otherCategoryItems].sort(
        () => Math.random() - 0.5
      );
      return [
        ...sameCategoryItems,
        ...shuffledOthers.slice(0, 4 - sameCategoryItems.length),
      ].slice(0, 4);
    }

    return sameCategoryItems.slice(0, 4);
  }, [items, item, cart]);

  const buttonStyles = useMemo(
    () => ({
      notInCartButton: {
        color: "#000",
        fontSize: "12px",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        padding: "12px 24px",
        border: "1px solid #000",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: "system-ui, sans-serif",
        minWidth: "150px",
        "&:hover": {
          backgroundColor: "#000",
          color: "#fff",
        },
        "&:focus-visible": {
          outline: "2px solid #000",
          outlineOffset: "2px",
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
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: "system-ui, sans-serif",
        minWidth: "150px",
        "&:hover": {
          backgroundColor: "#333",
        },
        "&:focus-visible": {
          outline: "2px solid #000",
          outlineOffset: "2px",
        },
      },
    }),
    []
  );

  if (isLoading) {
    return (
      <Box
        width={{ xs: "90%", sm: "85%", md: "80%" }}
        maxWidth={{ md: 1200, lg: 1200, xl: 1200 }}
        m={`${theme.spacing(12.5)} auto`}
      >
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          <Box flex="1 1 40%" mb="40px">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={400}
              sx={{ borderRadius: "8px" }}
            />
          </Box>

          <Box flex="1 1 50%" mb="40px">
            <Skeleton variant="text" height={40} width="60%" />
            <Skeleton variant="text" height={30} width="40%" sx={{ mt: 2 }} />
            <Skeleton variant="text" height={100} width="100%" sx={{ mt: 3 }} />
            <Skeleton
              variant="rectangular"
              height={45}
              width={150}
              sx={{ mt: 3 }}
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
        maxWidth={{ md: 1200, lg: 1200, xl: 1200 }}
        m={`${theme.spacing(12.5)} auto`}
      >
        <Alert
          severity="error"
          sx={{ mb: 3 }}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => window.location.reload()}
            >
              RETRY
            </Button>
          }
        >
          <Typography variant="h6" gutterBottom>
            Failed to load item
          </Typography>
          {error}
        </Alert>
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          startIcon={<HomeIcon />}
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
        maxWidth={{ md: 1200, lg: 1200, xl: 1200 }}
        m={`${theme.spacing(12.5)} auto`}
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>
          Item Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          The item you're looking for doesn't exist or has been removed.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          startIcon={<HomeIcon />}
          sx={{ mt: 2 }}
        >
          Return to Homepage
        </Button>
      </Box>
    );
  }

  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={{ md: 1200, lg: 1200, xl: 1200 }}
      m={`${theme.spacing(12.5)} auto`}
    >
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <MuiLink
          component={Link}
          to="/"
          color="inherit"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
          Home
        </MuiLink>
        <Typography color="text.primary">{item.attributes.name}</Typography>
      </Breadcrumbs>

      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px" position="relative">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#f8f8f8",
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
                sx={{ borderRadius: "8px" }}
              />
            )}
          </Box>
        </Box>

        <Box flex="1 1 50%" mb="40px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mb: 4,
              py: 1,
            }}
          >
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "text.secondary",
                transition: "all 0.2s ease",
                "&:hover": {
                  color: "text.primary",
                },
              }}
            >
              <HomeIcon sx={{ fontSize: 16, mr: 0.5 }} />
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "0.3px",
                }}
              >
                Store
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
                  borderRadius: "1px",
                  "&:hover:not(.Mui-disabled)": {
                    color: "text.primary",
                    backgroundColor: "transparent",
                  },
                  "&.Mui-disabled": {
                    color: "action.disabled",
                  },
                }}
              >
                <NavigateBeforeIcon sx={{ fontSize: 16 }} />
              </IconButton>

              <Box
                sx={{
                  width: "1px",
                  height: "12px",
                  backgroundColor: "divider",
                  mx: 0.5,
                }}
              />

              <IconButton
                onClick={() => nextItem && handleNavigation(nextItem.id)}
                disabled={!nextItem}
                aria-label="Next item"
                size="small"
                sx={{
                  padding: "2px",
                  color: "text.secondary",
                  borderRadius: "1px",
                  "&:hover:not(.Mui-disabled)": {
                    color: "text.primary",
                    backgroundColor: "transparent",
                  },
                  "&.Mui-disabled": {
                    color: "action.disabled",
                  },
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
              sx={{ fontWeight: "bold" }}
            >
              {item.attributes.name}
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
            >
              € {item.attributes.price?.toFixed(2) || "N/A"}
            </Typography>

            {item.attributes.tracklist && (
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Tracklist:</strong> {item.attributes.tracklist}
              </Typography>
            )}

            {item.attributes.longDescription && (
              <Box sx={{ mt: 3 }}>
                {item.attributes.longDescription.split("\n").map((line, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{ mb: 1.5, lineHeight: 1.6 }}
                  >
                    {line}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>

          <Box display="flex" alignItems="center" gap={2} sx={{ mb: 3 }}>
            <Button
              onClick={handleCartToggle}
              variant={isItemInCart ? "contained" : "outlined"}
              sx={
                isItemInCart
                  ? buttonStyles.inCartButton
                  : buttonStyles.notInCartButton
              }
              aria-label={isItemInCart ? "Remove from cart" : "Add to cart"}
            >
              {isItemInCart ? "REMOVE FROM CART" : "ADD TO CART"}
            </Button>

            <IconButton
              onClick={handleWishlistToggle}
              aria-label={
                isInWishlist ? "Remove from wishlist" : "Add to wishlist"
              }
              color={isInWishlist ? "error" : "default"}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              {isInWishlist ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
          </Box>

          <Box>
            <Typography variant="body2" color="text.secondary">
              <strong>Category:</strong> {item.attributes.category || "Unknown"}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Product details tabs"
        >
          <Tab
            label="DESCRIPTION"
            value="description"
            id="tab-description"
            aria-controls="tabpanel-description"
          />
          <Tab
            label="CONDITION"
            value="condition"
            id="tab-condition"
            aria-controls="tabpanel-condition"
          />
        </Tabs>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Box
          role="tabpanel"
          id="tabpanel-description"
          aria-labelledby="tab-description"
          hidden={activeTab !== "description"}
        >
          {item.attributes.shortDescription && (
            <Box>
              {item.attributes.shortDescription.split("\n").map((line, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.6 }}
                >
                  {line}
                </Typography>
              ))}
            </Box>
          )}
        </Box>

        <Box
          role="tabpanel"
          id="tabpanel-condition"
          aria-labelledby="tab-condition"
          hidden={activeTab !== "condition"}
        >
          <Box sx={{ "& > *": { mb: 1 } }}>
            {item.attributes.mediaCondition && (
              <Typography variant="body1">
                <strong>Media Condition:</strong>{" "}
                {item.attributes.mediaCondition}
              </Typography>
            )}
            {item.attributes.sleeveCondition && (
              <Typography variant="body1">
                <strong>Sleeve Condition:</strong>{" "}
                {item.attributes.sleeveCondition}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      {relatedItems.length > 0 && (
        <Box component="section" aria-labelledby="related-products-heading">
          <Typography
            id="related-products-heading"
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Related Products
          </Typography>

          <Grid container spacing={3} mt={2}>
            {relatedItems.map((relatedItem) => (
              <Grid
                item
                key={relatedItem.id}
                xs={12}
                sm={6}
                md={3}
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