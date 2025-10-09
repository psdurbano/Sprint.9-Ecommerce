import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, useTheme, Fade } from "@mui/material";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageHelper";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

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
        // Pequeña animación de feedback
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
            backgroundColor: theme.palette.neutral.light,
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
          transform: 'translateY(-4px)',
        },
        ...style
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          aspectRatio: '1 / 1',
          backgroundColor: theme.palette.neutral.light,
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
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        
        {/* In Cart Badge */}
        {isItemInCart && (
          <Fade in={isItemInCart}>
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                padding: '6px 12px',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: 0.5,
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <CheckIcon sx={{ fontSize: 16 }} />
              In Cart
            </Box>
          </Fade>
        )}

        {/* Add to Cart Overlay */}
        {!isItemInCart && (
          <Fade in={isHovered}>
            <Box
              onClick={handleAddToCart}
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: 2,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                },
              }}
            >
              <AddShoppingCartIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: 0.5 }}>
                {isAdding ? 'ADDING...' : 'ADD TO CART'}
              </Typography>
            </Box>
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
            fontFamily: "'Fauna One', serif",
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
            }}
          >
            €{price.toFixed(2)}
          </Typography>
          
          {/* Desktop Add Button */}
          {!isItemInCart && (
            <Box
              component="button"
              onClick={handleAddToCart}
              sx={{
                color: 'text.primary',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                padding: '8px 16px',
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: { xs: 'none', sm: 'block' },
                fontFamily: 'inherit',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderColor: 'primary.main',
                },
              }}
            >
              {isAdding ? 'ADDING...' : 'ADD TO CART'}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Item;