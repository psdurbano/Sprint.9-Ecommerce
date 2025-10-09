import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "El nombre es demasiado largo")
    .required("Este campo es obligatorio"),
  lastName: Yup.string()
    .max(50, "El apellido es demasiado largo")
    .required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Dirección de correo inválida")
    .required("Este campo es obligatorio"),
});

const SignupForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (values) => {
    localStorage.setItem("firstName", values.firstName);
    localStorage.setItem("lastName", values.lastName);
    localStorage.setItem("email", values.email);

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      navigate("/");
    }, 1500);
  };

  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={{ md: 1000, lg: 1000, xl: 1000 }}
      m={`${theme.spacing(12.5)} auto`}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: theme.palette.neutral.dark }}>
          Sign up
        </Typography>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: theme.spacing(1.875) }}>
                <Field
                  name="firstName"
                  as={TextField}
                  label="Name"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <Field
                  name="lastName"
                  as={TextField}
                  label="Last Name"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
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
                >
                  Submit!
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box m={`${theme.spacing(11.25)} auto`} width="100%">
          {showAlert && (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              You have successfully registered! —{" "}
              <strong>Welcome to allmyrecords!</strong>
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SignupForm;
