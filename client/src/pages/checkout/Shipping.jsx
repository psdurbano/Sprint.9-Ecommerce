import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddressForm from "./AddressForm";

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
    <Box m={`${theme.spacing(3.75)} auto`}>
      <Box>
        <Typography variant="h3" sx={{ mb: theme.spacing(1.875), color: theme.palette.neutral.dark }}>
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

      <Box mb={theme.spacing(2.5)}>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
          label="Same for Shipping Address"
        />
      </Box>

      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography variant="h3" sx={{ mb: theme.spacing(1.875), color: theme.palette.neutral.dark }}>
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
