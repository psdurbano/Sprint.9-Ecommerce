import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { calculateShippingFromCountry } from "../../utils/shippingRates";

const ShippingSummary = ({ values }) => {
  const theme = useTheme();

  const useSame = values.shippingAddress?.isSameAddress;
  const billingCountry = values.billingAddress?.country;
  const shippingCountry = values.shippingAddress?.country;

  const countryToUse = useSame ? billingCountry : shippingCountry;
  const { amount } = calculateShippingFromCountry(countryToUse);

  const displayCountry = countryToUse || "Unknown";

  return (
    <Box
      mt={theme.spacing(2)}
      p={theme.spacing(1.5)}
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="body2" color="text.secondary" fontSize="0.8rem">
            {displayCountry}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Standard • 5-7 days
          </Typography>
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontWeight: 600,
            color: theme.palette.primary.main,
            fontSize: "0.95rem",
          }}
        >
          €{amount.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShippingSummary;
