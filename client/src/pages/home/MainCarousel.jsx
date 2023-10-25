import React, { useState } from "react";
import { Box, IconButton, useMediaQuery, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MainCarousel = () => {
  const esMobile = useMediaQuery("(max-width:600px)");
  const [activeIndex] = useState(0);

  const importAll = (r) =>
    r.keys().reduce((acc, item) => {
      acc[item.replace("./", "")] = r(item);
      return acc;
    }, {});

  const heroTextureImports = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
  );

  const carouselImages = Object.values(heroTextureImports);

  const genres = ["Rock", "Jazz", "Pop", "Soul"];
  const subTitles = [
    "Powerful beats and raw energy",
    "Smooth rhythms and improvisation",
    "Catchy melodies and vibrant tunes",
    "Soulful vocals and emotional depth",
  ];

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      selectedItem={activeIndex}
      autoPlay={true}
      interval={4000}
      transitionTime={3000}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "#FFC709",
            padding: "5px",
            zIndex: "10",
            display: esMobile ? "none" : "block",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "#FFC709",
            padding: "5px",
            zIndex: "10",
            display: esMobile ? "none" : "block",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {carouselImages.map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            position="absolute"
            color="#FFC709"
            top={esMobile ? "30%" : "30%"}
            right={esMobile ? "15%" : "15%"}
            transform={esMobile ? "translate(-50%, -50%)" : "none"}
            textAlign={esMobile ? "center" : "left"}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: esMobile ? "2em" : "4em",
                mb: esMobile ? 2 : 1,
                color: "#FFC709",
              }}
            >
              {genres[index]}
            </Typography>

            <Typography
              variant="subtitle1"
              color="#FFC709"
              sx={{
                textTransform: "uppercase",
                fontSize: esMobile ? "1em" : "1.5em",
                whiteSpace: "pre-line",
              }}
            >
              {subTitles[index].split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
