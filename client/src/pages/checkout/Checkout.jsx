/* eslint-disable no-useless-escape */
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { loadStripe } from "@stripe/stripe-js";
import { API_ENDPOINTS } from "../../utils/apiConfig";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY || "pk_test_51MxsGAL4xh9QQByFWTF8jjdEOq5nZmiqUGgbnzAmZODD40ar1ZjBp1ROemJkirmiyrbMQVhHGG2paMcNnHlOIBSD00aQTPJ6Cd"
);

const Checkout = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      await makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    if (isProcessing) return;
    
    setIsProcessing(true);
    
    try {
      const stripe = await stripePromise;
      
      if (!cart || cart.length === 0) {
        throw new Error('Cart is empty');
      }

      const requestBody = {
        userName: [values.firstName, values.lastName].join(" "),
        email: values.email,
        products: cart.map(({ id, count }) => ({
          id,
          count,
        })),
      };

      const response = await fetch(API_ENDPOINTS.orders, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
      }

      const session = await response.json();
      
      if (!session.id) {
        throw new Error('No session ID received from server');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw new Error(error.message);
      }
      
    } catch (error) {
      console.error('Payment error:', error);
      alert(`Error processing payment: ${error.message}`);
      setActiveStep(activeStep - 1);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={{ md: 1000, lg: 1000, xl: 1000 }}
      m={`${theme.spacing(12.5)} auto`}
    >
      <Stepper
        activeStep={activeStep}
        sx={{
          m: `${theme.spacing(2.5)} 0`,
          "& .MuiStepIcon-root": {
            color: theme.palette.neutral.light,
            "&.Mui-active": { color: theme.palette.primary.main },
            "&.Mui-completed": { color: theme.palette.primary.main },
          },
        }}
      >
        <Step>
          <StepLabel sx={{ "& .MuiStepLabel-label": { typography: theme.typography.h4 } }}>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel sx={{ "& .MuiStepLabel-label": { typography: theme.typography.h4 } }}>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap={theme.spacing(6)}>
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      boxShadow: "none",
                      color: theme.palette.common.white,
                      borderRadius: 0,
                      px: theme.spacing(5),
                      py: theme.spacing(2),
                      textTransform: "none",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                    disabled={isProcessing}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: "none",
                    color: theme.palette.common.white,
                    borderRadius: 0,
                    px: theme.spacing(5),
                    py: theme.spacing(2),
                    textTransform: "none",
                    "&:hover": { backgroundColor: theme.palette.primary.dark, boxShadow: "none" },
                  }}
                  disabled={isProcessing || (isSecondStep && cart.length === 0)}
                >
                  {isProcessing ? "Processing..." : (!isSecondStep ? "Next" : "Place Order")}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

// Validaciones mejoradas
const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string()
        .required("First name is required")
        .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/, "Only letters and accents are allowed")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name too long"),
      lastName: yup.string()
        .required("Last name is required")
        .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/, "Only letters and accents are allowed")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name too long"),
      country: yup.string()
        .required("Country is required")
        .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]+$/, "Only letters, accents and hyphens are allowed"),
      street1: yup.string()
        .required("Street address is required")
        .min(5, "Address must be at least 5 characters")
        .max(100, "Address too long"),
      street2: yup.string()
        .max(100, "Address too long"),
      city: yup.string()
        .required("City is required")
        .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]+$/, "Only letters, accents and hyphens are allowed")
        .min(2, "City must be at least 2 characters")
        .max(50, "City name too long"),
      state: yup.string()
        .required("State is required")
        .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]+$/, "Only letters, accents and hyphens are allowed")
        .min(2, "State must be at least 2 characters")
        .max(50, "State name too long"),
      zipCode: yup.string()
        .required("Zip code is required")
        .matches(/^[A-Za-z0-9\-\s]+$/, "Only letters, numbers and hyphens are allowed")
        .min(3, "Zip code must be at least 3 characters")
        .max(10, "Zip code too long"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("First name is required")
          .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/, "Only letters and accents are allowed")
          .min(2, "First name must be at least 2 characters")
          .max(50, "First name too long"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("Last name is required")
          .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/, "Only letters and accents are allowed")
          .min(2, "Last name must be at least 2 characters")
          .max(50, "Last name too long"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("Country is required")
          .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]+$/, "Only letters, accents and hyphens are allowed"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("Street address is required")
          .min(5, "Address must be at least 5 characters")
          .max(100, "Address too long"),
      }),
      street2: yup.string()
        .max(100, "Address too long"),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("City is required")
          .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]+$/, "Only letters, accents and hyphens are allowed")
          .min(2, "City must be at least 2 characters")
          .max(50, "City name too long"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("State is required")
          .matches(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]+$/, "Only letters, accents and hyphens are allowed")
          .min(2, "State must be at least 2 characters")
          .max(50, "State name too long"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string()
          .required("Zip code is required")
          .matches(/^[A-Za-z0-9\-\s]+$/, "Only letters, numbers and hyphens are allowed")
          .min(3, "Zip code must be at least 3 characters")
          .max(10, "Zip code too long"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
    phoneNumber: yup.string()
      .required("Phone number is required")
      .matches(/^[0-9+\-\s()]+$/, "Only numbers, spaces, and + - ( ) are allowed")
      .min(6, "Phone number must be at least 6 digits")
      .max(15, "Phone number too long"),
  }),
];

export default Checkout;