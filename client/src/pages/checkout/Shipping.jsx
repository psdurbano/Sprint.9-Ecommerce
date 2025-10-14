import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import { shades } from "../../theme";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const theme = useTheme();

  return (
    <Box my={theme.spacing(6)}>
      <Box mb={theme.spacing(4)}>
        <Typography
          variant="h3"
          sx={{
            mb: theme.spacing(3),
            color: shades.primary[500],
            fontFamily: theme.typography.h3.fontFamily,
            fontWeight: 600,
          }}
        >
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>

      <Box mb={theme.spacing(4)}>
        <FormControlLabel
          label={
            <Typography sx={{ fontFamily: theme.typography.fontFamily }}>
              Use same address for shipping
            </Typography>
          }
          control={
            <Checkbox
              checked={values.shippingAddress.isSameAddress}
              onChange={(e) =>
                setFieldValue("shippingAddress.isSameAddress", e.target.checked)
              }
              sx={{
                color: shades.primary[500],
                "&.Mui-checked": {
                  color: shades.primary[500],
                },
              }}
            />
          }
        />
      </Box>

      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography
            variant="h3"
            sx={{
              mb: theme.spacing(3),
              color: shades.primary[500],
              fontFamily: theme.typography.h3.fontFamily,
              fontWeight: 600,
            }}
          >
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
