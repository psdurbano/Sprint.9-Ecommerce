import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { API_ENDPOINTS } from "../../utils/apiConfig";
import { shades } from "../../theme";
import ShippingSummary from "./ShippingSummary";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLIC_KEY ||
    "pk_test_51MxsGAL4xh9QQByFWTF8jjdEOq5nZmiqUGgbnzAmZODD40ar1ZjBp1ROemJkirmiyrbMQVhHGG2paMcNnHlOIBSD00aQTPJ6Cd"
);

const Checkout = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep((prev) => prev + 1);

    const useSame = values?.shippingAddress?.isSameAddress ?? true;

    if (isFirstStep && useSame) {
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
        throw new Error("Cart is empty");
      }

      const useSame = values?.shippingAddress?.isSameAddress ?? true;
      const billingCountry = values?.billingAddress?.country || "";
      const shippingCountry = values?.shippingAddress?.country || "";
      const countryForShipping = useSame ? billingCountry : shippingCountry || "";

      const requestBody = {
        userName: [values.firstName, values.lastName].join(" "),
        email: values.email,
        products: cart.map(({ id, count }) => ({ id, count })),
        shippingCountry: countryForShipping,
      };

      console.log("requestBody in makePayment:", requestBody);

      const response = await fetch(API_ENDPOINTS.orders, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `HTTP error! status: ${response.status}`
        );
      }

      const session = await response.json();

      if (!session.id) {
        throw new Error("No session ID received from server");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) throw new Error(error.message);
    } catch (error) {
      console.error("Payment error:", error);
      alert(`Error processing payment: ${error.message}`);
      setActiveStep((prev) => Math.max(prev - 1, 0));
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={{ md: 1000, lg: 1000, xl: 1000 }}
      m={`${theme.spacing(10)} auto`}
      py={theme.spacing(4)}
    >
      <Stepper
        activeStep={activeStep}
        sx={{
          mb: theme.spacing(6),
          "& .MuiStepIcon-root": {
            color: shades.neutral[300],
            "&.Mui-active": { color: shades.primary[500] },
            "&.Mui-completed": { color: shades.primary[500] },
          },
          "& .MuiStepLabel-label": {
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.body1.fontSize,
            "&.Mui-active": {
              color: shades.primary[500],
              fontWeight: 600,
            },
            "&.Mui-completed": {
              color: shades.primary[500],
            },
          },
        }}
      >
        <Step>
          <StepLabel>Billing & Shipping</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
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
                <>
                  <Payment
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <ShippingSummary values={values} />
                </>
              )}

              <Box
                display="flex"
                justifyContent="space-between"
                gap={theme.spacing(4)}
                mt={theme.spacing(6)}
              >
                {!isFirstStep && (
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() =>
                      !isProcessing && setActiveStep((prev) => prev - 1)
                    }
                    disabled={isProcessing}
                    sx={{
                      borderColor: shades.primary[500],
                      color: shades.primary[500],
                      py: theme.spacing(1.5),
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: shades.primary[50],
                        borderColor: shades.primary[600],
                      },
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={isProcessing || (isSecondStep && cart.length === 0)}
                  sx={{
                    backgroundColor: shades.primary[500],
                    py: theme.spacing(1.5),
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: shades.primary[600],
                    },
                    "&:disabled": {
                      backgroundColor: shades.neutral[300],
                    },
                  }}
                >
                  {isProcessing
                    ? "Processing..."
                    : !isSecondStep
                    ? "Next"
                    : "Place Order"}
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

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      country: yup.string().required("Country is required"),
      street1: yup.string().required("Street address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      zipCode: yup.string().required("Zip code is required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("First name is required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("Last name is required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("Country is required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("Street address is required"),
      }),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("City is required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("State is required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("Zip code is required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
  }),
];

export default Checkout;
