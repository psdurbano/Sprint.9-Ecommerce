import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  Grid,
  Fade,
  useTheme,
  Alert,
} from "@mui/material";
import { Email, LocationOn, Schedule } from "@mui/icons-material";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .required("This field is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("This field is required"),
});

const ContactUs = () => {
  const theme = useTheme();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", values);
    setIsSubmitting(false);
    setShowSuccess(true);
    resetForm();
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 16 }} />,
      title: "EMAIL",
      content: "hola@allmyrecords.store",
    },
    {
      icon: <LocationOn sx={{ fontSize: 16 }} />,
      title: "STORE",
      content: "Pg. de l'Exposició, 42",
      subtitle: "08004 Barcelona",
    },
    {
      icon: <Schedule sx={{ fontSize: 16 }} />,
      title: "HOURS",
      content: "Tuesday - Saturday",
      subtitle: "11:00 - 19:00",
    },
  ];

  return (
    <Box
      width={{ xs: "95%", sm: "90%", md: "80%" }}
      maxWidth={1000}
      margin="0 auto"
      sx={{
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 },
      }}
    >
      {/* Header - Más cercano */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: "1.75rem", sm: "2.25rem" },
            fontFamily: theme.typography.fontFamily,
            letterSpacing: "-0.5px",
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 500,
            mx: "auto",
            fontSize: "0.95rem",
            fontFamily: theme.typography.fontFamily,
            lineHeight: 1.6,
          }}
        >
          Have questions about our vinyl collection? We're here to help.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Contact Information - Mejorado */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {contactInfo.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2.5,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 0,
                  backgroundColor: theme.palette.background.paper,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      mt: 0.25,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    {" "}
                    {/* ✅ Previene overflow */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        color: "text.secondary",
                        fontSize: "0.7rem",
                        mb: 1,
                        fontFamily: theme.typography.fontFamily,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "0.85rem",
                        lineHeight: 1.4,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.content}
                    </Typography>
                    {item.subtitle && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          fontFamily: theme.typography.fontFamily,
                          fontSize: "0.75rem",
                          lineHeight: 1.4,
                          mt: 0.5,
                          display: "block",
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>

        {/* Contact Form - Coherente con SignUpForm */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 0,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 600,
                fontFamily: theme.typography.fontFamily,
                fontSize: "1.1rem",
              }}
            >
              Send us a message
            </Typography>

            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="name"
                        as={TextField}
                        label="Your name"
                        variant="outlined"
                        size="medium"
                        fullWidth
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                        InputLabelProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                            borderRadius: 0,
                          },
                        }}
                        FormHelperTextProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        name="email"
                        as={TextField}
                        label="Your email"
                        variant="outlined"
                        size="medium"
                        fullWidth
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        InputLabelProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                            borderRadius: 0,
                          },
                        }}
                        FormHelperTextProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="subject"
                        as={TextField}
                        label="Subject"
                        variant="outlined"
                        size="medium"
                        fullWidth
                        error={touched.subject && Boolean(errors.subject)}
                        helperText={touched.subject && errors.subject}
                        InputLabelProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                            borderRadius: 0,
                          },
                        }}
                        FormHelperTextProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="message"
                        as={TextField}
                        label="Tell us more..."
                        variant="outlined"
                        size="medium"
                        fullWidth
                        multiline
                        rows={4}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                        InputLabelProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                        InputProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                            borderRadius: 0,
                          },
                        }}
                        FormHelperTextProps={{
                          sx: {
                            fontFamily: theme.typography.fontFamily,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      {/* Success Alert */}
                      {showSuccess && (
                        <Fade in={showSuccess}>
                          <Alert
                            severity="success"
                            sx={{
                              borderRadius: 0,
                              fontFamily: theme.typography.fontFamily,
                              mb: 2,
                            }}
                          >
                            Thanks for reaching out! We'll get back to you
                            within 24-48 hours.
                          </Alert>
                        </Fade>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          borderRadius: 0,
                          px: 4,
                          py: 1.5,
                          textTransform: "none",
                          fontFamily: theme.typography.fontFamily,
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          letterSpacing: "0.5px",
                          width: { xs: "100%", sm: "auto" },
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            transform: "translateY(-1px)",
                          },
                          "&:disabled": {
                            backgroundColor:
                              theme.palette.action.disabledBackground,
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
