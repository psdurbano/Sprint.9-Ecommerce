import React, { useMemo, useCallback, useEffect, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  removeFromCart,
  setIsCartOpen,
  increaseCount,
  decreaseCount,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils/imageHelper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const cartRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + (item?.count || 0) * (item?.attributes?.price || 0);
    }, 0);
  }, [cart]);

  const cartItemCount = useMemo(() => cart?.length || 0, [cart]);

  const handleCloseCart = useCallback(() => {
    dispatch(setIsCartOpen({}));
  }, [dispatch]);

  const handleRemoveItem = useCallback(
    (itemId) => {
      dispatch(removeFromCart({ id: itemId }));
    },
    [dispatch]
  );

  const handleIncreaseQuantity = useCallback(
    (itemId) => {
      dispatch(increaseCount({ id: itemId }));
    },
    [dispatch]
  );

  const handleDecreaseQuantity = useCallback(
    (itemId) => {
      dispatch(decreaseCount({ id: itemId }));
    },
    [dispatch]
  );

  const handleCheckout = useCallback(() => {
    navigate("/checkout");
    handleCloseCart();
  }, [navigate, handleCloseCart]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        handleCloseCart();
      }
    },
    [handleCloseCart]
  );

  const handleImageClick = useCallback(
    (item, e) => {
      e.stopPropagation();
      const documentId =
        item.documentId || item.attributes?.documentId || null;
      if (documentId) {
        navigate(`/item/${documentId}`);
        handleCloseCart();
      }
    },
    [navigate, handleCloseCart]
  );

  const handleTouchStart = useCallback((e) => {
    startX.current = e.touches[0].clientX;
    currentX.current = startX.current;
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isMobile) return;
      currentX.current = e.touches[0].clientX;
      const diff = currentX.current - startX.current;
      if (diff > 0 && cartRef.current) {
        cartRef.current.style.transform = `translateX(${diff}px)`;
      }
    },
    [isMobile]
  );

  const handleTouchEnd = useCallback(() => {
    if (!isMobile || !cartRef.current) return;
    const diff = currentX.current - startX.current;
    const threshold = 100;
    if (diff > threshold) {
      cartRef.current.style.transform = "translateX(100%)";
      setTimeout(handleCloseCart, 300);
    } else {
      cartRef.current.style.transform = "translateX(0)";
    }
  }, [isMobile, handleCloseCart]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isCartOpen) {
        handleCloseCart();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, handleCloseCart]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const cartContentRef = useRef(null);
  useEffect(() => {
    if (isCartOpen && cartContentRef.current) {
      cartContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isCartOpen]);

  if (!isCartOpen) {
    return null;
  }

  return (
    <Box
      onClick={handleBackdropClick}
      sx={{
        position: "fixed",
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1000,
      }}
    >
      <Box
        ref={cartRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          position: "fixed",
          right: 0,
          top: 0,
          width: { xs: "100%", sm: "400px" },
          height: "100vh",
          backgroundColor: "white",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          zIndex: 1001,
          transition: "transform 0.3s ease",
        }}
      >
        {/* Header */}
        <FlexBox
          sx={{
            p: 2,
            borderBottom: `1px solid ${shades.neutral[300]}`,
          }}
        >
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: 600,
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            SHOPPING BAG ({cartItemCount})
          </Typography>
          <IconButton
            onClick={handleCloseCart}
            size="small"
            sx={{
              color: shades.primary[500],
              padding: "4px",
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </FlexBox>

        {/* Content - Scrollable */}
        <Box
          ref={cartContentRef}
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: shades.neutral[200],
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: shades.primary[300],
              borderRadius: "3px",
            },
          }}
        >
          {cart?.length ? (
            cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  mb: 2,
                  pb: 2,
                  borderBottom: `1px solid ${shades.neutral[300]}`,
                }}
              >
                <FlexBox sx={{ mb: 1 }}>
                  <Box
                    onClick={(e) => handleImageClick(item, e)}
                    sx={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      backgroundColor: shades.neutral[200],
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={getImageUrl(item)}
                      alt={item?.attributes?.name || "Product"}
                      onError={(e) => {
                        e.target.src = "/images/default-image.jpg";
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, ml: 2 }}>
                    <Typography
                      onClick={(e) => handleImageClick(item, e)}
                      sx={{
                        fontSize: "0.85rem",
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                        color: shades.primary[500],
                        cursor: "pointer",
                        mb: 0.5,
                      }}
                    >
                      {item?.attributes?.name || "Unnamed Item"}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontFamily: theme.typography.fontFamily,
                        color: shades.primary[400],
                        mb: 0.5,
                      }}
                    >
                      €{(
                        (item?.attributes?.price || 0) * (item?.count || 1)
                      ).toFixed(2)}
                    </Typography>
                  </Box>

                  <IconButton
                    onClick={() => handleRemoveItem(item.id)}
                    size="small"
                    sx={{
                      ml: 1,
                      color: shades.primary[300],
                      padding: "4px",
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </FlexBox>

                {/* Quantity Controls */}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontFamily: theme.typography.fontFamily,
                      color: shades.primary[400],
                    }}
                  >
                    Qty:
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleDecreaseQuantity(item.id)}
                    disabled={item.count <= 1}
                    sx={{
                      padding: "2px",
                      color: shades.primary[400],
                    }}
                  >
                    <RemoveIcon sx={{ fontSize: "0.85rem" }} />
                  </IconButton>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 600,
                      minWidth: "20px",
                      textAlign: "center",
                      color: shades.primary[500],
                    }}
                  >
                    {item?.count || 1}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleIncreaseQuantity(item.id)}
                    sx={{
                      padding: "2px",
                      color: shades.primary[400],
                    }}
                  >
                    <AddIcon sx={{ fontSize: "0.85rem" }} />
                  </IconButton>
                </Box>
              </Box>
            ))
          ) : (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 600,
                  color: shades.primary[500],
                  mb: 1,
                }}
              >
                Your cart is empty
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontFamily: theme.typography.fontFamily,
                  color: shades.primary[400],
                }}
              >
                Add some items to get started
              </Typography>
            </Box>
          )}
        </Box>

        {/* Footer */}
        {cart.length > 0 && (
          <Box
            sx={{
              borderTop: `1px solid ${shades.neutral[300]}`,
              p: 2,
              backgroundColor: shades.neutral[100],
            }}
          >
            <FlexBox sx={{ mb: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  color: shades.primary[400],
                }}
              >
                SUBTOTAL
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 600,
                  color: shades.primary[500],
                }}
              >
                €{totalPrice.toFixed(2)}
              </Typography>
            </FlexBox>

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

            <Button
              onClick={handleCheckout}
              fullWidth
              sx={{
                backgroundColor: shades.primary[500],
                color: "white",
                py: 1.25,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 600,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                borderRadius: 0,
                transition: "all 0.2s ease",
                mb: 1,
                "&:hover": {
                  backgroundColor: shades.primary[600],
                  transform: "translateY(-1px)",
                },
              }}
            >
              CHECKOUT
            </Button>

            <Button
              onClick={() => {
                handleCloseCart();
                navigate("/");
              }}
              fullWidth
              sx={{
                borderColor: shades.primary[500],
                color: shades.primary[500],
                py: 1.25,
                fontFamily: theme.typography.fontFamily,
                fontWeight: 600,
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                borderRadius: 0,
                border: `1px solid ${shades.primary[500]}`,
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: shades.primary[500],
                  color: "white",
                },
              }}
            >
              CONTINUE SHOPPING
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartMenu;
