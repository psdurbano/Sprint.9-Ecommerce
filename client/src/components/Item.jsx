import React, { useState, useCallback, useMemo } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../state";
import { getImageUrl } from "../utils/imageHelper";
import CheckIcon from "@mui/icons-material/Check";

const Item = ({ item }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.cart || []);

  const [hovered, setHovered] = useState(false);
  const [adding, setAdding] = useState(false);

  // BADGES
  const badges = useMemo(() => {
    if (!item?.attributes) return [];
    const b = [];

    if (item.id > 90) {
      b.push({ label: "Just In", type: "new" });
    }

    if (item.attributes.price > 37) {
      b.push({ label: "Limited", type: "limited" });
    }

    if (item.attributes.price < 27) {
      b.push({ label: "Reduced", type: "sale" });
    }

    return b.slice(0, 2);
  }, [item]);

  const { id, name, price, category, imageUrl, isInCart } = useMemo(() => {
    if (!item?.attributes) {
      return { id: null, name: "Unnamed", price: 0, category: "Unknown", imageUrl: "", isInCart: false };
    }
    const { name = "Unnamed", price = 0, category = "Unknown" } = item.attributes;
    return {
      id: item.id,
      name,
      price,
      category,
      imageUrl: getImageUrl(item),
      isInCart: cartItems.some((i) => i.id === item.id),
    };
  }, [item, cartItems]);

  const addToCartHandler = useCallback(
    (e) => {
      e.stopPropagation();
      if (isInCart || adding) return;
      setAdding(true);
      setTimeout(() => {
        dispatch(addToCart({ item: { ...item, count: 1 } }));
        setAdding(false);
      }, 300);
    },
    [dispatch, item, isInCart, adding]
  );

  const goToDetail = useCallback(() => id && navigate(`/item/${id}`), [navigate, id]);

  if (!item?.attributes) return <Box sx={{ aspectRatio: "1", bgcolor: "neutral.100" }} />;

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={goToDetail}
      sx={{
        maxWidth: { xs: "100%", sm: 400 },
        mx: "auto",
        cursor: "pointer",
        position: "relative",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <Box
        sx={{
          aspectRatio: "1",
          overflow: "hidden",
          position: "relative",
          border: `1px solid ${theme.palette.divider}`,
          mb: 3,
        }}
      >
        <Box
          component="img"
          src={imageUrl}
          alt={name}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all 0.5s ease",
            filter: hovered ? "grayscale(100%)" : "grayscale(0%)",
            transform: hovered ? "scale(1.02)" : "scale(1)",
          }}
        />

        {badges.length > 0 && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              display: "flex",
              flexDirection: "column",
              gap: 0.75,
              zIndex: 10,
            }}
          >
            {badges.map((badge, i) => (
              <Box
                key={i}
                sx={{
                  px: 1.1,
                  py: 0.35,
                  fontSize: "0.62rem",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  backgroundColor:
                    badge.type === "sale"
                      ? "rgba(255, 255, 255, 0.11)"
                      : "rgba(255, 255, 255, 0.08)",
                  border:
                    badge.type === "sale"
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "1px",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}
              >
                {badge.label}
              </Box>
            ))}
          </Box>
        )}

        {/* In Cart */}
        {isInCart && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "primary.main",
              color: "white",
              px: 1,
              py: 0.35,
              fontSize: "0.62rem",
              fontWeight: 600,
              textTransform: "uppercase",
              borderRadius: 0,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <CheckIcon sx={{ fontSize: 13 }} />
            In Cart
          </Box>
        )}

        {/* Add to Cart */}
        {!isInCart && hovered && (
          <Box
            onClick={addToCartHandler}
            sx={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              bgcolor: "rgba(255,255,255,0.96)",
              color: "black",
              px: 2.5,
              py: 0.8,
              borderRadius: "4px",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: "white",
                transform: "translateX(-50%) translateY(-4px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
              },
            }}
          >
            {adding ? "Adding..." : "Add to Cart"}
          </Box>
        )}
      </Box>

      {/* Info */}
      <Box>
        <Typography variant="caption" sx={{ display: "block", fontWeight: 500, textTransform: "uppercase", color: "text.secondary", letterSpacing: 1, fontSize: "0.7rem", opacity: 0.8, mb: 0.5 }}>
          {category}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 400, fontSize: "1rem", lineHeight: 1.4, mb: 1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {name}
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main", fontSize: "1.15rem", letterSpacing: "-0.5px" }}>
          €{price.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;