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
import logo from "../../assets/logo/logo.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const cart = useSelector((state) => state.cart.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Constants to avoid magic numbers
  const NAVBAR_HEIGHT = 60;
  const CONTAINER_WIDTH = "80%";

  // Reusable handlers
  const handleLogoClick = () => navigate("/");
  const handleSignUpClick = () => {
    navigate("/signup");
    setIsMenuOpen(false); // Close menu after navigation
  };
  const handleCartClick = () => {
    dispatch(setIsCartOpen({}));
    setIsMenuOpen(false); // Close menu after opening cart
  };
  const handleMenuToggle = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen(!isMenuOpen);
  };

  // Calculate cart items
  const cartItemsCount = cart.reduce((total, item) => total + item.count, 0);

  // Reusable styles
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: `${NAVBAR_HEIGHT}px`,
      backgroundColor: "#2D2C2F",
      color: "black",
      zIndex: 1300,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
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
      color: "#FFC709",
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
        backgroundColor: "#FFC709",
      },
    },
    mobileMenu: {
      position: "absolute",
      top: "100%",
      right: 0,
      backgroundColor: "#2D2C2F",
      padding: "16px",
      borderRadius: "0 0 8px 8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      minWidth: "150px",
      zIndex: 1400,
    },
    mobileMenuItem: {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
  };

  // Close menu when clicking outside
  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box component="nav" sx={styles.navbar}>
      <Box sx={styles.container}>
        {/* Logo */}
        <Box sx={styles.logo} onClick={handleLogoClick}>
          <img
            src={logo}
            alt="Store logo"
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
            >
              <Menu />
            </IconButton>
            
            {isMenuOpen && (
              <Box sx={styles.mobileMenu}>
                {/* My Account Option */}
                <Box 
                  sx={styles.mobileMenuItem}
                  onClick={handleSignUpClick}
                >
                  <PersonOutline sx={{ color: "#FFC709", mr: 1 }} />
                  <Typography variant="body2" sx={{ color: "#FFC709" }}>
                    My Account
                  </Typography>
                </Box>
                
                {/* Cart Option */}
                <Box 
                  sx={styles.mobileMenuItem}
                  onClick={handleCartClick}
                >
                  <Badge
                    badgeContent={cartItemsCount}
                    color="secondary"
                    invisible={cartItemsCount === 0}
                    sx={{ ...styles.badge, mr: 1 }}
                  >
                    <ShoppingBagOutlined sx={{ color: "#FFC709" }} />
                  </Badge>
                  <Typography variant="body2" sx={{ color: "#FFC709", ml: 1 }}>
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

export default Navbar;