import React, { useMemo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  Badge, 
  Box, 
  IconButton, 
  Typography,
  useTheme,
  useMediaQuery 
} from "@mui/material";
import { 
  PersonOutline, 
  ShoppingBagOutlined,
  Menu 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";

import { shades } from "../../theme";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const cart = useSelector((state) => state.cart.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAVBAR_HEIGHT = 60;
  
  // CONTAINER_WIDTH memoizado - se crea una sola vez
  const CONTAINER_WIDTH = useMemo(() => ({ xs: "90%", md: "80%" }), []);

  // Handlers memoizados
  const handleLogoClick = useCallback(() => navigate("/"), [navigate]);
  
  const handleSignUpClick = useCallback(() => {
    navigate("/signup");
    setIsMenuOpen(false);
  }, [navigate]);
  
  const handleCartClick = useCallback(() => {
    dispatch(setIsCartOpen({}));
    setIsMenuOpen(false);
  }, [dispatch]);
  
  const handleMenuToggle = useCallback((event) => {
    event.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }, []);
  
  const handleClickOutside = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Cart items count memoizado
  const cartItemsCount = useMemo(() => 
    cart.reduce((total, item) => total + item.count, 0), 
    [cart]
  );

  // Styles memoizados
  const styles = useMemo(() => ({
    navbar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: `${NAVBAR_HEIGHT}px`,
      backgroundColor: shades.primary[500],
      color: "white",
      zIndex: 1300,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
    },
    container: {
      width: CONTAINER_WIDTH,
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    logoImage: {
      marginRight: "8px",
      height: "35px",
      width: "auto",
    },
    actionsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
    },
    iconButton: {
      color: shades.secondary[500],
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 199, 9, 0.1)",
        transform: "scale(1.1)",
      },
    },
    badge: {
      "& .MuiBadge-badge": {
        right: 5,
        top: 5,
        padding: "0 4px",
        height: "16px",
        minWidth: "16px",
        fontSize: "0.75rem",
        fontWeight: "bold",
        backgroundColor: shades.secondary[500],
        color: shades.primary[500],
      },
    },
    mobileMenu: {
      position: "absolute",
      top: "100%",
      right: 0,
      backgroundColor: shades.primary[500],
      padding: "16px",
      borderRadius: "0 0 8px 8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      minWidth: "160px",
      zIndex: 1400,
      border: `1px solid ${shades.primary[600]}`,
    },
    mobileMenuItem: {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
    mobileMenuText: {
      color: shades.secondary[500],
      fontFamily: theme.typography.fontFamily,
      fontWeight: 500,
      fontSize: "0.9rem",
    },
  }), [theme.typography.fontFamily, NAVBAR_HEIGHT, CONTAINER_WIDTH]);

  return (
    <Box component="nav" sx={styles.navbar}>
      <Box sx={styles.container}>
        {/* Logo */}
        <Box sx={styles.logo} onClick={handleLogoClick}>
          <img
            src="/images/logo/logo.webp"
            alt="ALLMYRECORDS logo"
            style={styles.logoImage}
          />
        </Box>

        {/* Actions - Desktop */}
        {!isMobile ? (
          <Box sx={styles.actionsContainer}>
            <IconButton 
              sx={styles.iconButton}
              onClick={handleSignUpClick}
              aria-label="Go to sign up"
            >
              <PersonOutline />
            </IconButton>
            
            <Badge
              badgeContent={cartItemsCount}
              color="secondary"
              invisible={cartItemsCount === 0}
              sx={styles.badge}
            >
              <IconButton
                onClick={handleCartClick}
                sx={styles.iconButton}
                aria-label={`Open cart with ${cartItemsCount} items`}
              >
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
          </Box>
        ) : (
          /* Mobile Menu */
          <Box sx={{ position: "relative" }}>
            <IconButton 
              sx={styles.iconButton}
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu />
            </IconButton>
            
            {isMenuOpen && (
              <Box 
                sx={styles.mobileMenu}
                id="mobile-menu"
                role="menu"
                aria-labelledby="menu-button"
              >
                {/* My Account Option */}
                <Box 
                  sx={styles.mobileMenuItem}
                  onClick={handleSignUpClick}
                  role="menuitem"
                >
                  <PersonOutline sx={{ color: shades.secondary[500], mr: 1 }} />
                  <Typography sx={styles.mobileMenuText}>
                    My Account
                  </Typography>
                </Box>
                
                {/* Cart Option */}
                <Box 
                  sx={styles.mobileMenuItem}
                  onClick={handleCartClick}
                  role="menuitem"
                >
                  <Badge
                    badgeContent={cartItemsCount}
                    color="secondary"
                    invisible={cartItemsCount === 0}
                    sx={{ ...styles.badge, mr: 1 }}
                  >
                    <ShoppingBagOutlined sx={{ color: shades.secondary[500] }} />
                  </Badge>
                  <Typography sx={{ ...styles.mobileMenuText, ml: 1 }}>
                    Cart
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Overlay to close menu when clicking outside */}
      {isMobile && isMenuOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1200,
          }}
          onClick={handleClickOutside}
        />
      )}
    </Box>
  );
};

export default React.memo(Navbar);