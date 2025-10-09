import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent,
  Paper
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { 
  CheckCircle, 
  LocalShipping, 
  Inventory, 
  AssignmentTurnedIn,
  Home,
  ShoppingBag
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Confirmation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);
  const [activeStep, setActiveStep] = useState(0);

  // Simular progreso del pedido
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepTimer);
          return 3;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(stepTimer);
  }, []);

  // Countdown para redirección
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

  const steps = [
    {
      label: 'Order Confirmed',
      description: 'Your payment has been processed successfully.',
      icon: <AssignmentTurnedIn />
    },
    {
      label: 'Processing',
      description: 'We\'re preparing your items for shipment.',
      icon: <Inventory />
    },
    {
      label: 'Shipped',
      description: 'Your order is on its way to you.',
      icon: <LocalShipping />
    },
    {
      label: 'Delivery',
      description: 'Expected delivery within 3-5 business days.',
      icon: <CheckCircle />
    }
  ];

  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={{ md: 1200, lg: 1200, xl: 1200 }}
      m={`${theme.spacing(12.5)} auto`}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <CheckCircle 
          sx={{ 
            fontSize: 64, 
            color: shades.primary[500], 
            mb: 2 
          }} 
        />
        <Typography 
          variant="h2" 
          sx={{ 
            fontFamily: '"Cinzel", "sans-serif"',
            fontSize: '36px',
            fontWeight: 400,
            color: shades.primary[500],
            lineHeight: 1.3,
            mb: 1,
            letterSpacing: '-0.2px',
          }}
        >
          Thank You For Your Order
        </Typography>
        <Typography 
          sx={{ 
            fontFamily: '"Fauna One", "sans-serif"',
            fontSize: '14px',
            fontWeight: 400,
            color: shades.primary[300],
            mb: 3,
          }}
        >
          Your order has been confirmed and is being processed
        </Typography>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          mb: 4, 
          backgroundColor: shades.neutral[100],
          borderRadius: '8px',
          padding: '20px'
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel 
                sx={{
                  '& .MuiStepLabel-label': {
                    fontFamily: '"Fauna One", "sans-serif"',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: shades.primary[500],
                  },
                  '& .MuiStepLabel-label.Mui-completed': {
                    color: shades.primary[500],
                  },
                  '& .MuiStepLabel-label.Mui-active': {
                    color: shades.primary[500],
                    fontWeight: 400,
                  },
                }}
                StepIconComponent={() => (
                  <Box sx={{ color: shades.primary[500] }}>
                    {step.icon}
                  </Box>
                )}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography 
                  sx={{ 
                    fontFamily: '"Fauna One", "sans-serif"',
                    fontSize: '13px',
                    color: shades.primary[400],
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <Box sx={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        <Button
          startIcon={<ShoppingBag />}
          onClick={() => navigate("/")}
          sx={{
            fontFamily: '"Fauna One", "sans-serif"',
            color: shades.primary[500],
            fontSize: '12px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            padding: '12px 24px',
            border: `1px solid ${shades.primary[500]}`,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '140px',
            '&:hover': {
              backgroundColor: shades.primary[500],
              color: shades.neutral[100],
            },
          }}
        >
          Continue Shopping
        </Button>
        <Button
          startIcon={<Home />}
          onClick={() => navigate("/")}
          sx={{
            fontFamily: '"Fauna One", "sans-serif"',
            fontSize: '12px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            padding: '12px 24px',
            border: `1px solid ${shades.primary[500]}`,
            backgroundColor: shades.primary[500],
            color: shades.neutral[100],
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '140px',
            '&:hover': {
              backgroundColor: shades.primary[600],
            },
          }}
        >
          Go Home Now
        </Button>
      </Box>

      <Typography 
        sx={{ 
          fontFamily: '"Fauna One", "sans-serif"',
          fontSize: '13px',
          color: shades.primary[300],
          textAlign: 'center',
          mt: 3,
        }}
      >
        Redirecting to homepage in <strong>{countdown}</strong> seconds...
      </Typography>
    </Box>
  );
};

export default Confirmation;