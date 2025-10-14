import React from "react";
import { Box, Button, TextField, Typography, Alert, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { shades } from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSubmit = (values, { resetForm, setStatus }) => {
    console.log("Form data:", values);
    setStatus({ success: true });

    setTimeout(() => {
      resetForm();
      setStatus({ success: false });
      navigate("/");
    }, 2000);
  };

  return (
    <Box
      width={{ xs: "95%", sm: "90%", md: "80%" }}
      maxWidth={600}
      margin="0 auto"
      sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 6 } }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: theme.spacing(3),
          color: shades.primary[500],
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: 600,
          fontSize: { xs: "1.5rem", sm: "1.75rem" },
        }}
      >
        Create Account
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, status }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  size="medium"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[500],
                    color: "#fff",
                    borderRadius: "2px",
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: shades.primary[600],
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              {status?.success && (
                <Grid item xs={12}>
                  <Alert
                    severity="success"
                    sx={{ mt: 2, textAlign: "center", fontFamily: theme.typography.fontFamily }}
                  >
                    Account created successfully!
                  </Alert>
                </Grid>
              )}
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SignupForm;
