import { Box, Typography, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { shades } from "../../theme";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const theme = useTheme();
  
  return (
    <Box mt={theme.spacing(6)} mb={theme.spacing(4)}>
      <Typography 
        variant="h3" 
        sx={{ 
          mb: theme.spacing(3), 
          color: shades.primary[500],
          fontFamily: theme.typography.h3.fontFamily,
          fontWeight: 600,
        }}
      >
        Contact Information
      </Typography>
      
      <Box display="grid" gap={theme.spacing(3)}>
        <TextField
          fullWidth
          variant="outlined"
          size="medium"
          type="email"
          label="Email Address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{
            '& .MuiInputLabel-root': {
              fontFamily: theme.typography.fontFamily,
            },
            '& .MuiInputBase-input': {
              fontFamily: theme.typography.fontFamily,
            }
          }}
        />
        
        <TextField
          fullWidth
          variant="outlined"
          size="medium"
          type="tel"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{
            '& .MuiInputLabel-root': {
              fontFamily: theme.typography.fontFamily,
            },
            '& .MuiInputBase-input': {
              fontFamily: theme.typography.fontFamily,
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Payment;