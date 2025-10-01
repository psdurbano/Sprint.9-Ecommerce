import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Twitter, Instagram } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import logo from "../../assets/logo/logo-imagen.png";
import { Link } from "react-router-dom";

function Footer() {
  const theme = useTheme();
  const linkColor = "#FFC709";

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
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "150px", width: "auto" }}
          />
        </Box>

        {/* Links */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="center"
          rowGap="10px"
        >
          {["About Us", "Contact Us", "Grading", "Shipping Terms"].map(
            (item, index) => {
              const isLink = item === "About Us";
              const content = (
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  fontSize="1.2em"
                  sx={{
                    color: linkColor,
                    borderRadius: "8px",
                    px: 2,
                    py: 0.5,
                    cursor: isLink ? "pointer" : "default",
                    textDecoration: "none",
                    transition: "background-color 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 199, 9, 0.1)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {item}
                </Typography>
              );
              if (isLink) {
                return (
                  <Link
                    key={index}
                    to="/about-us"
                    style={{ textDecoration: "none" }}
                  >
                    {content}
                  </Link>
                );
              }
              return <Box key={index}>{content}</Box>;
            }
          )}

          {/* Socials */}
          <Box display="flex" columnGap="10px">
            {[
              {
                icon: <Twitter />,
                link: "https://twitter.com/allmyrecords",
              },
              {
                icon: <Instagram />,
                link: "https://www.instagram.com/allmyrecords/",
              },
            ].map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: linkColor,
                  transition: "background-color 0.2s ease, transform 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 199, 9, 0.1)",
                    transform: "scale(1.1)",
                  },
                }}
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
