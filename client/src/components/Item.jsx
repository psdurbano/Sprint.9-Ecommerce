import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, style }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = useCallback((e) => {
    e.stopPropagation();
    if (item?.attributes) {
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
      if (!isItemInCart) {
        dispatch(addToCart({ item: { ...item, count: 1 } }));
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

    const { category = "Unknown", price = 0, name = "Unnamed Item", image } = item.attributes;
    
    const imageUrl = image?.data?.attributes?.formats?.medium?.url 
      ? `https://sprint9-ecommerce-production.up.railway.app${image.data.attributes.formats.medium.url}`
      : "/default-image.jpg";

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
            backgroundColor: '#f8f8f8',
            aspectRatio: '1 / 1',
            width: '100%',
          }}
        />
      </Box>
    );
  }

  const { category, price, name } = itemData;

  const styles = {
    container: {
      maxWidth: { xs: '100%', sm: '400px' },
      margin: '0 auto',
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      ...style
    },
    imageContainer: {
      aspectRatio: '1 / 1',
      backgroundColor: '#f8f8f8',
      marginBottom: '20px',
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: imageLoaded ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      filter: isHovered ? 'grayscale(100%)' : 'grayscale(0%)',
    },
    cartStatus: {
      position: 'absolute',
      bottom: '12px',
      left: '12px',
      fontSize: '11px',
      fontWeight: 400,
      color: '#fff',
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: '6px 12px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      fontFamily: 'system-ui, sans-serif',
      opacity: isItemInCart ? 1 : 0,
      transition: 'opacity 0.3s ease',
    },
    category: {
      fontSize: '11px',
      fontWeight: 400,
      color: '#888',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginBottom: '6px',
      fontFamily: 'system-ui, sans-serif',
    },
    name: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#000',
      lineHeight: 1.4,
      marginBottom: '8px',
      fontFamily: 'system-ui, sans-serif',
      letterSpacing: '-0.2px',
    },
    bottomRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    price: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#000',
      fontFamily: 'system-ui, sans-serif',
    },
    addButton: {
      color: '#000',
      fontSize: '11px',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      padding: 0,
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      opacity: isItemInCart ? 0 : 1,
      transition: 'all 0.3s ease',
      fontFamily: 'system-ui, sans-serif',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: 0,
        width: '0%',
        height: '1px',
        backgroundColor: '#000',
        transition: 'width 0.3s ease',
      },
      '&:hover::after': {
        width: '100%',
      },
    }
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
      sx={styles.container}
    >
      <Box sx={styles.imageContainer}>
        <Box
          component="img"
          alt={name}
          src={imageUrl}
          onLoad={() => setImageLoaded(true)}
          sx={styles.image}
        />
        
        {/* Cart Status Badge */}
        <Box sx={styles.cartStatus}>
          In Cart
        </Box>
      </Box>

      <Box>
        <Typography sx={styles.category}>
          {category}
        </Typography>
        
        <Typography sx={styles.name}>
          {name}
        </Typography>
        
        <Box sx={styles.bottomRow}>
          <Typography sx={styles.price}>
            €{price.toFixed(2)}
          </Typography>
          
          {!isItemInCart && (
            <Box 
              component="button"
              onClick={handleAddToCart}
              sx={styles.addButton}
            >
              Add to Cart
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Item;