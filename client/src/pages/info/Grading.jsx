import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Grading = () => {
  const theme = useTheme();

  return (
    <Box
      width={{ xs: "95%", sm: "90%", md: "80%" }}
      maxWidth={1000}
      margin="0 auto"
      sx={{
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 }
      }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily
          }}
        >
          Grading Guide
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
          We grade every record using the Goldmine Standard — the trusted international scale — with vinyl and sleeve always rated separately for total transparency. At Allmyrecords we only offer Mint, Near Mint, Very Good Plus and Very Good copies, each one carefully inspected and honestly graded by us before shipping (because the jump from Near Mint to Very Good really is worlds apart).
        </Typography>

        {/* Mint */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem"
          }}
        >
          Mint (M)
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
          <strong>Vinyl:</strong> Absolutely perfect and generally unplayed. No marks, scratches or warps whatsoever. Zero surface noise.
          <br />
          <strong>Sleeve:</strong> Immaculate, often still sealed or looking factory-fresh. No wear, creases or marks.
        </Typography>

        {/* Near Mint */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem"
          }}
        >
          Near Mint (NM)
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
          <strong>Vinyl:</strong> Almost perfect. Maybe one or two microscopic scuffs only visible under bright light. Plays perfectly with no noise.
          <br />
          <strong>Sleeve:</strong> Looks almost new — perhaps the tiniest corner wear or faint storage marks, nothing more.
        </Typography>

        {/* Very Good Plus */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem"
          }}
        >
          Very Good Plus (VG+)
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
          <strong>Vinyl:</strong> Light signs of careful play. Occasional very light surface noise or faint pops, but music comes through clear and strong.
          <br />
          <strong>Sleeve:</strong> Minor ring wear, slight edge creasing or light fingerprints. Seams solid, cover still very presentable.
        </Typography>

        {/* Very Good */}
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.1rem"
          }}
        >
          Very Good (VG)
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
          <strong>Vinyl:</strong> Noticeable signs of use and some surface noise, yet never overpowering. Plays all the way through without skipping — a great listening copy.
          <br />
          <strong>Sleeve:</strong> Visible ring wear, possible small seam splits (sometimes neatly taped), marks or stickers. Still fully intact and protective.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            lineHeight: 1.7,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }}
        >
          We believe in total honesty about condition. If you ever want extra photos or have questions about a specific record, just drop us a line — we’re always happy to help.
        </Typography>
      </Box>
    </Box>
  );
};

export default Grading;
