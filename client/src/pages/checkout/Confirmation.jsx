import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Fade, useTheme } from "@mui/material";
import { CheckCircle, Home, ShoppingBag } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const redirectTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(redirectTimer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(redirectTimer);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "60vh", sm: "70vh" },
        py: { xs: 4, sm: 6 },
        px: 2,
      }}
    >
      <Fade in={show} timeout={800}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            textAlign: "center",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            "& .MuiTypography-h3": {
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              mb: 2,
            },
            "& .confirmation-icon": {
              fontSize: { xs: 56, sm: 64, md: 72 },
              mb: 3,
            },
          }}
        >
          {/* Icon */}
          <CheckCircle
            className="confirmation-icon"
            sx={{
              color: theme.palette.primary.main,
              filter: `drop-shadow(0 4px 12px ${theme.palette.primary.main}20)`,
            }}
          />

          {/* Title */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 600,
              letterSpacing: "-0.5px",
              fontFamily: theme.typography.fontFamily,
              lineHeight: 1.2,
            }}
          >
            Thank You For Your{" "}
            <Box
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Order
            </Box>
          </Typography>

          {/* Description - Más compacto */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2,
              fontSize: { xs: "0.9rem", sm: "1rem" },
              lineHeight: 1.5,
              fontFamily: theme.typography.fontFamily,
              maxWidth: "90%",
              mx: "auto",
            }}
          >
            Your order has been confirmed and is being processed. You'll receive
            a confirmation email shortly.
          </Typography>

          {/* Divider - Más sutil */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              my: 3,
              opacity: 0.5,
            }}
          >
            <Box sx={{ width: 40, height: 1, bgcolor: "divider" }} />
            <Box
              sx={{
                width: 4,
                height: 4,
                bgcolor: "primary.main",
                borderRadius: "50%",
              }}
            />
            <Box sx={{ width: 40, height: 1, bgcolor: "divider" }} />
          </Box>

          {/* Buttons - Optimizados para espacio */}
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
              mb: 3,
            }}
          >
            <Button
              startIcon={<ShoppingBag />}
              onClick={() => navigate("/")}
              variant="outlined"
              size="small"
              sx={{
                fontWeight: 500,
                textTransform: "none",
                letterSpacing: "0.5px",
                borderRadius: 0,
                fontFamily: theme.typography.fontFamily,
                minWidth: { xs: "100%", sm: "auto" },
                px: 3,
                "&:hover": {
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
            >
              Continue Shopping
            </Button>
            <Button
              startIcon={<Home />}
              onClick={() => navigate("/")}
              variant="contained"
              size="small"
              sx={{
                fontWeight: 600,
                textTransform: "none",
                letterSpacing: "0.5px",
                borderRadius: 0,
                fontFamily: theme.typography.fontFamily,
                minWidth: { xs: "100%", sm: "auto" },
                px: 3,
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Return Home
            </Button>
          </Box>

          {/* Countdown - Más discreto */}
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontFamily: theme.typography.fontFamily,
              opacity: 0.6,
            }}
          >
            Redirecting in{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              {countdown}
            </Box>{" "}
            second{countdown !== 1 ? "s" : ""}
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default Confirmation;
