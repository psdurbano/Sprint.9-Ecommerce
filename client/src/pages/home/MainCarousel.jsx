import React, { useState, useMemo, useCallback } from "react";
import { Box, IconButton, useMediaQuery, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Constants for better maintainability
const CAROUSEL_CONFIG = {
  autoPlay: true,
  interval: 5000,
  transitionTime: 800,
  infiniteLoop: true,
  showThumbs: false,
  showIndicators: false,
  showStatus: false,
};

const GENRES = [
  { 
    name: "Rock", 
    value: "rock", 
    subtitle: "Powerful beats and raw energy" 
  },
  { 
    name: "Jazz", 
    value: "jazz", 
    subtitle: "Smooth rhythms and improvisation" 
  },
  { 
    name: "Pop", 
    value: "pop", 
    subtitle: "Catchy melodies and vibrant tunes" 
  },
  { 
    name: "Soul", 
    value: "soul", 
    subtitle: "Soulful vocals and emotional depth" 
  },
];

const BREAKPOINTS = {
  mobile: 600,
  tablet: 900,
};

const MainCarousel = () => {
  const isMobile = useMediaQuery(`(max-width:${BREAKPOINTS.mobile}px)`);
  const isTablet = useMediaQuery(`(max-width:${BREAKPOINTS.tablet}px)`);
  const [activeIndex, setActiveIndex] = useState(0);

  // Image imports
  const carouselImages = useMemo(() => {
    const importAll = (r) => r.keys().reduce((acc, item) => {
      acc[item.replace("./", "")] = r(item);
      return acc;
    }, {});

    const heroTextureImports = importAll(
      require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
    );

    return Object.values(heroTextureImports);
  }, []);

  // Responsive calculations
  const responsiveValues = useMemo(() => ({
    arrowPosition: isMobile ? "5px" : isTablet ? "15px" : "30px",
    titleFontSize: isMobile ? "2rem" : isTablet ? "3rem" : "5rem",
    subtitleFontSize: isMobile ? "0.8rem" : isTablet ? "1rem" : "1.25rem",
    textMaxWidth: isMobile ? "85%" : isTablet ? "70%" : "500px",
    textLeftPosition: isMobile ? "8%" : isTablet ? "10%" : "8%",
    carouselHeight: isMobile ? "400px" : isTablet ? "500px" : "700px",
    indicatorBottom: isMobile ? "15px" : isTablet ? "25px" : "40px",
    buttonPadding: isMobile ? "8px 20px" : isTablet ? "10px 24px" : "12px 32px",
    buttonFontSize: isMobile ? "0.75rem" : isTablet ? "0.85rem" : "0.95rem",
  }), [isMobile, isTablet]);

  // Event handlers
  const handleGenreClick = useCallback((genreValue) => {
    sessionStorage.setItem('selectedCategory', genreValue);
    
    const shoppingListSection = document.getElementById('shopping-list');
    if (shoppingListSection) {
      shoppingListSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      window.dispatchEvent(new CustomEvent('categoryChange', { 
        detail: { category: genreValue } 
      }));
    }
  }, []);

  const handleIndexChange = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Arrow component to avoid duplication
  const CarouselArrow = useCallback(({ direction, onClickHandler }) => {
    const ArrowIcon = direction === 'prev' ? NavigateBeforeIcon : NavigateNextIcon;
    const positionStyles = direction === 'prev' 
      ? { left: responsiveValues.arrowPosition }
      : { right: responsiveValues.arrowPosition };

    return (
      <IconButton
        onClick={onClickHandler}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          padding: isMobile ? "6px" : isTablet ? "8px" : "12px",
          zIndex: 10,
          transition: "all 0.3s ease",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(255, 199, 9, 0.9)",
            color: "#000",
            transform: "translateY(-50%) scale(1.1)",
          },
          ...positionStyles,
        }}
        aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
      >
        <ArrowIcon sx={{ 
          fontSize: isMobile ? 24 : isTablet ? 28 : 36 
        }} />
      </IconButton>
    );
  }, [responsiveValues.arrowPosition, isMobile, isTablet]);

  // Carousel slide component
  const CarouselSlide = useCallback(({ image, genre, index }) => (
    <Box
      sx={{
        position: "relative",
        height: responsiveValues.carouselHeight,
        overflow: "hidden",
      }}
    >
      {/* Image with gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: isMobile 
              ? "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
              : "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
            zIndex: 1,
          },
        }}
      >
        <img
          src={image}
          alt={`${genre.name} genre showcase`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.85) contrast(1.1)",
          }}
          loading={index === 0 ? "eager" : "lazy"} // Lazy load non-first images
        />
      </Box>

      {/* Text content */}
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "45%" : "50%",
          left: responsiveValues.textLeftPosition,
          transform: "translateY(-50%)",
          zIndex: 2,
          maxWidth: responsiveValues.textMaxWidth,
          opacity: activeIndex === index ? 1 : 0,
          transition: "all 0.8s ease-out",
          transitionDelay: activeIndex === index ? "0.2s" : "0s",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Decorative line - Hidden on mobile */}
        {!isMobile && (
          <Box
            sx={{
              width: activeIndex === index ? (isTablet ? "40px" : "60px") : 0,
              height: "3px",
              backgroundColor: "#FFC709",
              mb: 2,
              transition: "width 0.6s ease-out",
              transitionDelay: activeIndex === index ? "0.3s" : "0s",
            }}
          />
        )}

        {/* Clickable genre title */}
        <Typography
          component="h1"
          onClick={() => handleGenreClick(genre.value)}
          sx={{
            fontWeight: 800,
            textTransform: "uppercase",
            fontSize: responsiveValues.titleFontSize,
            mb: isMobile ? 1 : 2,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            textShadow: "2px 2px 20px rgba(0,0,0,0.5)",
            background: "linear-gradient(135deg, #FFC709 0%, #FFE066 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: isMobile ? "none" : "translateY(-2px)",
              textShadow: "2px 4px 25px rgba(255, 199, 9, 0.5)",
            },
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
          aria-label={`Explore ${genre.name} albums`}
        >
          {genre.name}
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: responsiveValues.subtitleFontSize,
            fontWeight: 300,
            letterSpacing: "0.05em",
            lineHeight: 1.5,
            maxWidth: isMobile ? "100%" : "400px",
            textShadow: "1px 1px 10px rgba(0,0,0,0.7)",
            mb: isMobile ? 2 : 0,
            padding: isMobile ? "0 10px" : "0",
          }}
        >
          {genre.subtitle}
        </Typography>

        {/* CTA Button */}
        <Box
          component="button"
          onClick={() => handleGenreClick(genre.value)}
          sx={{
            mt: isMobile ? 2 : 4,
            display: "inline-block",
            padding: responsiveValues.buttonPadding,
            backgroundColor: "transparent",
            border: "2px solid #FFC709",
            color: "#FFC709",
            fontWeight: 600,
            fontSize: responsiveValues.buttonFontSize,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "all 0.3s ease",
            borderRadius: "2px",
            "&:hover": {
              backgroundColor: "#FFC709",
              color: "#000",
              transform: isMobile ? "none" : "translateY(-2px)",
              boxShadow: "0 8px 20px rgba(255, 199, 9, 0.3)",
            },
            "&:focus": {
              outline: "2px solid #FFC709",
              outlineOffset: "2px",
            },
          }}
          aria-label={`Find ${genre.name} albums`}
        >
          Find Albums
        </Box>
      </Box>
    </Box>
  ), [responsiveValues, isMobile, isTablet, activeIndex, handleGenreClick]);

  // Custom indicators component
  const CustomIndicators = useCallback(() => (
    <Box
      sx={{
        position: "absolute",
        bottom: responsiveValues.indicatorBottom,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        display: "flex",
        gap: 1,
      }}
    >
      {carouselImages.map((_, index) => (
        <Box
          key={index}
          onClick={() => setActiveIndex(index)}
          sx={{
            width: activeIndex === index ? (isMobile ? "30px" : "40px") : (isMobile ? "8px" : "10px"),
            height: isMobile ? "8px" : "10px",
            borderRadius: "5px",
            backgroundColor: activeIndex === index ? "#FFC709" : "rgba(255, 255, 255, 0.4)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: activeIndex === index ? "#FFC709" : "rgba(255, 255, 255, 0.7)",
            },
          }}
          aria-label={`Go to slide ${index + 1}`}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActiveIndex(index);
            }
          }}
        />
      ))}
    </Box>
  ), [carouselImages, activeIndex, responsiveValues.indicatorBottom, isMobile]);

  return (
    <Box 
      component="section" 
      aria-label="Music genres carousel"
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <Carousel
        {...CAROUSEL_CONFIG}
        selectedItem={activeIndex}
        onChange={handleIndexChange}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <CarouselArrow direction="prev" onClickHandler={onClickHandler} />
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <CarouselArrow direction="next" onClickHandler={onClickHandler} />
        )}
      >
        {carouselImages.map((image, index) => (
          <CarouselSlide
            key={`carousel-slide-${index}`}
            image={image}
            genre={GENRES[index]}
            index={index}
          />
        ))}
      </Carousel>

      <CustomIndicators />
    </Box>
  );
};

export default MainCarousel;