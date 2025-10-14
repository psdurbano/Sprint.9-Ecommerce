import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Twitter, Instagram } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { shades } from "../../theme";

function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: shades.primary[500],
        color: theme.palette.common.white,
        py: 4,
        borderTop: `1px solid ${shades.primary[600]}`,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "80%" },
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        {/* Copyright simple y sobrio */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: shades.neutral[300],
            fontFamily: theme.typography.fontFamily,
            fontWeight: 400,
            order: { xs: 3, md: 1 }
          }}
        >
          © {currentYear} ALLMYRECORDS
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2, md: 3 },
            order: { xs: 1, md: 2 }
          }}
        >
          {[
            { label: "About Us", path: "/about-us", isLink: true },
            { label: "Contact Us", path: "/contact-us", isLink: true },
            { label: "Grading", path: "/grading", isLink: true },
            { label: "Shipping Terms", path: "/shipping", isLink: true }
          ].map((item, index) => {
            const content = (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: shades.neutral[300],
                  fontWeight: 400,
                  cursor: item.isLink ? "pointer" : "default",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": item.isLink ? {
                    color: shades.secondary[500],
                  } : {},
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {item.label}
              </Typography>
            );

            if (item.isLink) {
              return (
                <Link
                  key={index}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  {content}
                </Link>
              );
            }
            return <Box key={index}>{content}</Box>;
          })}
        </Box>

        {/* Social Media */}
        <Box 
          display="flex" 
          gap={1}
          sx={{
            order: { xs: 2, md: 3 }
          }}
        >
          {[
            {
              icon: <Twitter sx={{ fontSize: 20 }} />,
              link: "https://twitter.com/allmyrecords",
              label: "Twitter"
            },
            {
              icon: <Instagram sx={{ fontSize: 20 }} />,
              link: "https://www.instagram.com/allmyrecords/",
              label: "Instagram"
            },
          ].map((item, index) => (
            <IconButton
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${item.label}`}
              size="small"
              sx={{
                color: shades.neutral[300],
                transition: "all 0.2s ease",
                "&:hover": {
                  color: shades.secondary[500],
                  backgroundColor: "rgba(255, 199, 9, 0.1)",
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;