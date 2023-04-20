import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={primary.main}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        color="#FFC709"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ALLMYRECORDS
          </Typography>
          <div>Historia de AMR</div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Grading</Typography>
          <Typography mb="30px">Shipping Terms</Typography>
          <Typography mb="30px">Contact Us</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(33%, 33%, 33%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            Paseo de la exposición 42, 08004, BCN
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: hola@allmyrecords.store
          </Typography>
          <Typography mb="30px">(+34)722710007</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
