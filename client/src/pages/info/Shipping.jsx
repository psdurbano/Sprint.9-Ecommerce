import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme
} from "@mui/material";

const Shipping = () => {
  const theme = useTheme();

  const shippingRates = [
    {
      region: "Spain",
      price: "€7.50",
      days: "3-5 business days"
    },
    {
      region: "Europe",
      price: "€15.00",
      days: "7-10 business days"
    },
    {
      region: "Rest of World",
      price: "€24.00",
      days: "15-25 business days"
    }
  ];

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "90%", md: "80%" },
        maxWidth: 1000,
        margin: "0 auto",
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 }
      }}
    >
      <Box>
        {/* Header */}
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily
          }}
        >
          Shipping & Delivery
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            lineHeight: 1.7,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }}
        >
          We ship worldwide using trusted carriers. Every record is carefully packaged to ensure it arrives in perfect
          condition.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            lineHeight: 1.7,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }}
        >
          Orders are processed within 1-2 business days. Once shipped, you'll receive a tracking number via email so you can
          follow your parcel. International orders may be subject to customs duties or VAT depending on your country's
          regulations—these charges are handled by local authorities and are the buyer's responsibility.
        </Typography>

        {/* Shipping Rates */}
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem",
            mb: 2
          }}
        >
          Shipping Rates
        </Typography>

        <TableContainer
          sx={{
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 0,
            mb: 4,
            overflowX: "auto",
            backgroundColor: theme.palette.background.paper
          }}
        >
          <Table
            size="small"
            sx={{
              fontFamily: theme.typography.fontFamily,
              minWidth: 480
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontFamily: theme.typography.fontFamily,
                    borderBottom: `1px solid ${theme.palette.divider}`
                  }}
                >
                  Region
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontFamily: theme.typography.fontFamily,
                    borderBottom: `1px solid ${theme.palette.divider}`
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontFamily: theme.typography.fontFamily,
                    borderBottom: `1px solid ${theme.palette.divider}`
                  }}
                >
                  Delivery Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shippingRates.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      borderBottom: `1px solid ${theme.palette.divider}`
                    }}
                  >
                    <strong>{row.region}</strong>
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      borderBottom: `1px solid ${theme.palette.divider}`
                    }}
                  >
                    {row.price}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: theme.typography.fontFamily,
                      borderBottom: `1px solid ${theme.palette.divider}`,
                      color: theme.palette.text.secondary
                    }}
                  >
                    {row.days}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Packaging */}
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem"
          }}
        >
          Packaging
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            lineHeight: 1.7,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }}
        >
          Every record is wrapped individually in a protective sleeve, then placed in a padded mailer with cardboard
          reinforcement on both sides. We've tested this method over many shipments so your vinyl arrives flat, clean and well
          protected.
        </Typography>

        {/* Damaged / Issues */}
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem"
          }}
        >
          Damaged in Transit?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            lineHeight: 1.7,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }}
        >
          If your record arrives damaged, contact us as soon as possible with photos of the packaging and item. We'll review
          the case and find a fair solution together—replacement, refund or partial credit depending on the situation.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            lineHeight: 1.7,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }}
        >
          Have shipping questions or special requests? Reach out anytime—we're here to help get your records to you safely and
          quickly.
        </Typography>
      </Box>
    </Box>
  );
};

export default Shipping;