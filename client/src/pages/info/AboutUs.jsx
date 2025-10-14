import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AboutUs = () => {
  const theme = useTheme();
  
  return (
    <Box
      width={{ xs: "90%", sm: "85%", md: "80%" }}
      maxWidth={{ md: 1200, lg: 1200, xl: 1200 }}
      m={`${theme.spacing(12.5)} auto`}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={5} lg={6}>
          <Box
            component="img"
            alt="Pablo Durbano - Founder of ALLMYRECORDS recordstore"
            src="/images/aboutus/amr-team.webp"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { lg: "700px", xl: "700px" },
              objectFit: "contain",
              borderRadius: "8px",
              mx: "auto",
              display: "block",
            }}
            loading="lazy"
          />
        </Grid>

        <Grid item xs={12} md={7} lg={6}>
          <Typography 
            variant="h3" 
            fontWeight="bold" 
            gutterBottom
            sx={{
              color: theme.palette.primary.main,
            }}
          >
            About Us
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 2, 
              lineHeight: 1.7,
              color: theme.palette.text.primary,
            }}
          >
            Hi, I'm Pablo, the founder and driving force behind this record store project. Music has always been at the core of my life — from years as a DJ and collector, to building a community through the Allmyrecords blog & Discogs. While Allmyrecords started as my personal passion project, over time it has blossomed thanks to a talented group of collaborators who have contributed at different stages. Together, we've created a place where the love for music and the spirit of vinyl collecting come together.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 2, 
              lineHeight: 1.7,
              color: theme.palette.text.primary,
            }}
          >
            My journey began in Argentina, producing local events and diving deep into crate digging — spending countless hours in record shops chasing hidden gems. This passion led me to collaborate with musicians, producers, and labels, curating collections and designing sound experiences that connected audiences locally and globally. Throughout, I learned that music thrives in community — each conversation and shared discovery bridges people and sound.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 2, 
              lineHeight: 1.7,
              color: theme.palette.text.primary,
            }}
          >
            Embracing web development allowed me to merge my musical roots with technology; this store reflects that fusion as a digital extension of the spaces where music mattered most in my life. Each record here carries a story — from iconic studio sessions to transformative tracks — inviting seasoned diggers, aspiring DJs, and vinyl rediscoverers alike to explore, connect, and build their own musical journey.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;