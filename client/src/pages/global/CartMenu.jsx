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
import { removeFromCart, setIsCartOpen } from "../../state";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils/imageHelper";
import { useMemo, useCallback, useEffect, useRef } from "react";

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
    (itemId, e) => {
      e.stopPropagation();
      navigate(`/item/${itemId}`);
      handleCloseCart();
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
      display="block"
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10000}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="hidden"
      onClick={handleBackdropClick}
      sx={{
        backdropFilter: "blur(2px)",
        transition: "background-color 0.3s ease",
        WebkitBackdropFilter: "blur(2px)",
      }}
    >
      <Box
        ref={cartRef}
        position="fixed"
        right="0"
        bottom="0"
        width={{ xs: "90%", sm: "max(400px, 30%)" }}
        height="100%"
        backgroundColor="white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{
          transform: "translateX(0)",
          transition: isMobile ? "transform 0.3s ease" : "none",
          boxShadow: "-2px 0 20px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          ref={cartContentRef}
          padding="30px"
          overflow="auto"
          height="100%"
          sx={{
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: shades.neutral[100],
            },
            "&::-webkit-scrollbar-thumb": {
              background: shades.neutral[400],
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: shades.neutral[500],
            },
          }}
        >
          <FlexBox mb="15px">
            <Typography variant="h3" component="h2">
              SHOPPING BAG ({cartItemCount})
            </Typography>
            <IconButton
              onClick={handleCloseCart}
              aria-label="Close cart"
              size="large"
              sx={{
                "&:hover": {
                  backgroundColor: shades.neutral[100],
                  transform: "rotate(90deg)",
                  transition: "transform 0.2s ease",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>

          <Box role="feed" aria-label="Cart items">
            {cart?.length ? (
              cart.map((item) => (
                <Box
                  key={`${item.id}-${item.attributes?.name}`}
                  role="article"
                  aria-label={`Cart item: ${item.attributes?.name}`}
                >
                  <FlexBox
                    p="15px 0"
                    sx={{ borderBottom: `1px solid ${shades.neutral[300]}` }}
                  >
                    <Box
                      flex="1 1 40%"
                      sx={{
                        minWidth: "100px",
                        cursor: "pointer",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                      onClick={(e) => handleImageClick(item.id, e)}
                    >
                      <img
                        alt={item?.attributes?.name || "Item"}
                        width="80"
                        height="80"
                        src={getImageUrl(item)}
                        style={{
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "/images/default-image.jpg";
                          e.target.alt = "Default product image";
                        }}
                      />
                    </Box>

                    <Box flex="1 1 60%" sx={{ pl: 2 }}>
                      <FlexBox mb="5px">
                        <Typography
                          fontWeight="bold"
                          sx={{
                            fontSize: "0.9rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {item?.attributes?.name || "Unnamed Item"}
                        </Typography>
                        <IconButton
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label={`Remove ${
                            item.attributes?.name || "item"
                          } from cart`}
                          size="small"
                          sx={{
                            ml: 1,
                            "&:hover": {
                              backgroundColor: shades.neutral[100],
                              transform: "scale(1.1)",
                            },
                            transition: "all 0.2s ease",
                          }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </FlexBox>

                      <FlexBox alignItems="center">
                        <Typography variant="body2" color="text.secondary">
                          Qty: {item?.count || 1}
                        </Typography>
                        <Typography
                          fontWeight="bold"
                          sx={{ ml: 2, fontSize: "0.9rem" }}
                        >
                          €
                          {(
                            (item?.attributes?.price || 0) * (item?.count || 1)
                          ).toFixed(2)}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                </Box>
              ))
            ) : (
              <Box textAlign="center" m="40px 0">
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Your cart is empty
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Add some items to get started
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleCloseCart}
                  sx={{
                    borderColor: shades.primary[400],
                    color: shades.primary[400],
                    "&:hover": {
                      backgroundColor: shades.primary[50],
                      borderColor: shades.primary[500],
                    },
                  }}
                >
                  Continue Shopping
                </Button>
              </Box>
            )}
          </Box>

          {/* FOOTER */}
          {cart.length > 0 && (
            <Box m="20px 0" sx={{ mt: "auto" }}>
              <FlexBox m="20px 0">
                <Typography variant="h6" fontWeight="bold">
                  SUBTOTAL
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  €{totalPrice.toFixed(2)}
                </Typography>
              </FlexBox>

              {/* BOTÓN CHECKOUT ORIGINAL */}
              <Button
                sx={{
                  backgroundColor: shades.primary[400],
                  color: "white",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "15px 30px",
                  m: "20px 0",
                }}
                onClick={handleCheckout}
                disabled={!cart?.length}
                aria-label="Proceed to checkout"
              >
                CHECKOUT
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
