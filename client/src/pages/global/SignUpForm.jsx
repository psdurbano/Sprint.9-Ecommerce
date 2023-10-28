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
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ width: "80%", maxWidth: "400px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign up
        </Typography>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Field
                  name="firstName"
                  as={TextField}
                  label="Name"
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <Field
                  name="lastName"
                  as={TextField}
                  label="Last Name"
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit!
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box m="90px auto" width="100%" maxWidth={"400px"}>
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
