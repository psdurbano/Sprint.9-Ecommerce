import { Box, Typography, IconButton } from "@mui/material";
import { Twitter, Instagram } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import logo from "../../assets/logo/logo-imagen.png";

function Footer() {
  const theme = useTheme();

  const linkStyle = { color: "#FFC709" }; // Estilos comunes

  const socialMediaLinks = [
    {
      icon: <Twitter />,
      link: "https://twitter.com/allmyrecords",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/allmyrecords/",
    },
  ];

  return (
    <Box
      height="200px"
      backgroundColor="#2D2C2F"
      color={theme.palette.primary.main}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="80%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "150px", width: "auto" }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
          rowGap="10px"
        >
          {["About Us", "Contact Us", "Grading", "Shipping Terms"].map(
            (item, index) => (
              <Typography
                key={index}
                variant="h4"
                fontWeight="bold"
                fontSize="1.2em"
                sx={linkStyle}
              >
                {item}
              </Typography>
            )
          )}

          <Box display="flex">
            {socialMediaLinks.map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkStyle}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
