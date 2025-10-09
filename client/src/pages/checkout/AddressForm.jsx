/* eslint-disable no-useless-escape */
import { getIn } from "formik";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  // Función para prevenir caracteres no deseados en nombres
  const handleNameChange = (e) => {
    const { name, value } = e.target;
    // Solo permite letras, espacios y caracteres acentuados
    const filteredValue = value.replace(/[^A-Za-zÁáÉéÍíÓóÚúÑñ\s]/g, '');
    handleChange({
      target: {
        name,
        value: filteredValue
      }
    });
  };

  // Función para código postal (letras, números, guiones)
  const handleZipCodeChange = (e) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(/[^A-Za-z0-9\-\s]/g, '');
    handleChange({
      target: {
        name,
        value: filteredValue
      }
    });
  };

  // Función para ciudad/estado/país (letras, guiones, espacios)
  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    const filteredValue = value.replace(/[^A-Za-zÁáÉéÍíÓóÚúÑñ\s\-]/g, '');
    handleChange({
      target: {
        name,
        value: filteredValue
      }
    });
  };

  return (
    <Box
      display="grid"
      gap={theme.spacing(1.875)}
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleNameChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{ gridColumn: "span 2" }}
        inputProps={{
          maxLength: 50
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleNameChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{ gridColumn: "span 2" }}
        inputProps={{
          maxLength: 50
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleLocationChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{ gridColumn: "span 4" }}
        inputProps={{
          maxLength: 50
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        sx={{ gridColumn: "span 2" }}
        inputProps={{
          maxLength: 100
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="Street Address 2 (optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        sx={{ gridColumn: "span 2" }}
        inputProps={{
          maxLength: 100
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleLocationChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{ gridColumn: "span 2" }}
        inputProps={{
          maxLength: 50
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleLocationChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
        sx={{ gridColumn: "1fr" }}
        inputProps={{
          maxLength: 50
        }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="medium"
        type="text"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleZipCodeChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        sx={{ gridColumn: "1fr" }}
        inputProps={{
          maxLength: 10
        }}
      />
    </Box>
  );
};

export default AddressForm;