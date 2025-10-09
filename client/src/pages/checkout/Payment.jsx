import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const theme = useTheme();
  return (
    <Box m={`${theme.spacing(3.75)} 0`}>
      <Box>
        <Typography variant="h3" sx={{ mb: theme.spacing(1.875), color: theme.palette.neutral.dark }}>
          Contact Info
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          size="medium"
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", mb: theme.spacing(1.875) }}
        />
        <TextField
          fullWidth
          variant="outlined"
          size="medium"
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
    </Box>
  );
};

export default Payment;
