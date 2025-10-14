import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme, Fade } from "@mui/material";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageHelper";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

import { shades } from "../theme";

const Item = ({ item, style }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = useCallback(async (e) => {
    e.stopPropagation();
    if (item?.attributes) {
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
      if (!isItemInCart) {
        setIsAdding(true);
        setTimeout(() => {
          dispatch(addToCart({ item: { ...item, count: 1 } }));
          setIsAdding(false);
        }, 300);
      }
    }
  }, [cart, dispatch, item]);

  const handleNavigate = useCallback(() => {
    if (item?.id) {
      navigate(`/item/${item.id}`);
    }
  }, [navigate, item]);

  const { itemData, isItemInCart, imageUrl } = useMemo(() => {
    if (!item?.attributes) {
      return { itemData: null, isItemInCart: false, imageUrl: "" };
    }

    const { category = "Unknown", price = 0, name = "Unnamed Item" } = item.attributes;
    
    const imageUrl = getImageUrl(item);
    const isInCart = cart.some((cartItem) => cartItem.id === item.id);

    return {
      itemData: { category, price, name },
      isItemInCart: isInCart,
      imageUrl
    };
  }, [item, cart]);

  if (!item?.attributes) {
    return (
      <Box 
        sx={{ 
          maxWidth: { xs: '100%', sm: '400px' }, 
          margin: '0 auto',
          ...style 
        }}
      >
        <Box
          sx={{
            backgroundColor: shades.neutral[100],
            aspectRatio: '1 / 1',
            width: '100%',
          }}
        />
      </Box>
    );
  }

  const { category, price, name } = itemData;

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
      sx={{
        maxWidth: { xs: '100%', sm: '400px' },
        margin: '0 auto',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
        ...style
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          aspectRatio: '1 / 1',
          backgroundColor: shades.neutral[100],
          marginBottom: 3,
          overflow: 'hidden',
          position: 'relative',
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          component="img"
          alt={name}
          src={imageUrl}
          onLoad={() => setImageLoaded(true)}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imageLoaded ? 1 : 0,
            transition: 'all 0.5s ease',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          }}
        />
        
        {/* In Cart Badge - Sutil */}
        {isItemInCart && (
          <Fade in={isItemInCart}>
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                padding: '4px 8px',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: 0.3,
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 0.3,
                fontFamily: theme.typography.fontFamily,
                borderRadius: 0,
              }}
            >
              <CheckIcon sx={{ fontSize: 14 }} />
              In Cart
            </Box>
          </Fade>
        )}

        {/* ✅ OVERLAY SUTIL Y ELEGANTE */}
        {!isItemInCart && (
          <Fade in={isHovered}>
            <Box
              onClick={handleAddToCart}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '& .add-button': {
                    transform: 'scale(1.05)',
                    backgroundColor: theme.palette.primary.main,
                  }
                },
              }}
            >
              {/* Botón circular sutil */}
              <Box
                className="add-button"
                sx={{
                  width: 44,
                  height: 44,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                {isAdding ? (
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      border: `2px solid ${theme.palette.primary.main}`,
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      '@keyframes spin': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      }
                    }}
                  />
                ) : (
                  <AddIcon 
                    sx={{ 
                      fontSize: 20, 
                      color: theme.palette.text.primary,
                      transition: 'color 0.3s ease',
                    }} 
                  />
                )}
              </Box>
            </Box>
          </Fade>
        )}

        {/* Texto sutil en hover - Solo aparece al hacer hover */}
        {!isItemInCart && isHovered && (
          <Fade in={isHovered}>
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                bottom: 12,
                left: 0,
                right: 0,
                textAlign: 'center',
                color: 'white',
                fontFamily: theme.typography.fontFamily,
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.3px',
                textTransform: 'uppercase',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                opacity: 0.9,
              }}
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Typography>
          </Fade>
        )}
      </Box>

      {/* Content */}
      <Box>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: 'text.secondary',
            marginBottom: 1,
            fontSize: '0.7rem',
            opacity: 0.8,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {category}
        </Typography>
        
        <Typography
          variant="h4"
          component="h3"
          sx={{
            fontWeight: 400,
            color: 'text.primary',
            marginBottom: 2,
            fontSize: '1rem',
            lineHeight: 1.4,
            letterSpacing: '-0.2px',
            fontFamily: theme.typography.fontFamily,
            minHeight: '2.8rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {name}
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: 'primary.main',
              fontSize: '1.1rem',
              letterSpacing: '-0.5px',
              fontFamily: theme.typography.fontFamily,
            }}
          >
            €{price.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;