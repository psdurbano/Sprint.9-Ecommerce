import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <Box width="80%" m="80px auto">
      <Grid container spacing={6} alignItems="center">
        {/* Foto personal */}
        <Grid item xs={12} md={5} lg={6}>
          <Box
            component="img"
            alt="Pablo portrait"
            src="/images/aboutus-photo.jpg"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { lg: "700px", xl: "700px" },
              objectFit: "contain",
              borderRadius: "8px",
              mx: "auto",
              display: "block",
            }}
          />
        </Grid>

        {/* Biografía */}
        <Grid item xs={12} md={7} lg={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
            Hi, I’m Pablo, the founder and driving force behind this record store project. Music has always been at the core of my life — from years as a DJ and collector, to building a community through the Allmyrecords blog & Discogs. While Allmyrecords started as my personal passion project, over time it has blossomed thanks to a talented group of collaborators who have contributed at different stages. Together, we’ve created a place where the love for music and the spirit of vinyl collecting come together.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
            My journey began in Argentina, producing local events and diving deep into crate digging — spending countless hours in record shops chasing hidden gems. This passion led me to collaborate with musicians, producers, and labels, curating collections and designing sound experiences that connected audiences locally and globally. Throughout, I learned that music thrives in community — each conversation and shared discovery bridges people and sound.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
            Embracing web development allowed me to merge my musical roots with technology; this store reflects that fusion as a digital extension of the spaces where music mattered most in my life. Each record here carries a story — from iconic studio sessions to transformative tracks — inviting seasoned diggers, aspiring DJs, and vinyl rediscoverers alike to explore, connect, and build their own musical journey.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
