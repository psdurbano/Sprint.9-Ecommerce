import React, { useState, useMemo, useCallback } from "react";
import { 
  Box, 
  IconButton, 
  useMediaQuery, 
  Typography, 
  useTheme 
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// Importación profesional de imágenes
import joanJettImage from "../../assets/joan-jett-1.jpg";
import johnColtraneImage from "../../assets/john-coltrane-1.jpg";
import michaelJacksonImage from "../../assets/michael-jackson-1.jpg";
import arethaFranklinImage from "../../assets/aretha-franklin-1.jpg";

const CAROUSEL_CONFIG = {
  autoPlay: true,
  interval: 6000,
  transitionTime: 800,
  infiniteLoop: true,
  showThumbs: false,
  showIndicators: false, // Desactivamos indicadores nativos para usar personalizados
  showStatus: false,
  stopOnHover: true,
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

const MainCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);

  // Importación profesional de imágenes con useMemo
  const carouselImages = useMemo(() => [
    { image: joanJettImage, genre: GENRES[0] },     // ROCK
    { image: johnColtraneImage, genre: GENRES[1] }, // JAZZ  
    { image: michaelJacksonImage, genre: GENRES[2] }, // POP
    { image: arethaFranklinImage, genre: GENRES[3] }, // SOUL
  ], []);

  // Responsive calculations using theme
  const responsiveValues = useMemo(() => ({
    arrowPosition: isMobile ? "8px" : "20px",
    titleFontSize: isMobile ? "2rem" : isTablet ? "3rem" : "4rem",
    subtitleFontSize: isMobile ? "0.9rem" : "1rem",
    textMaxWidth: isMobile ? "90%" : "500px",
    textLeftPosition: isMobile ? "5%" : "12%",
    carouselHeight: isMobile ? "70vh" : "80vh",
    indicatorBottom: isMobile ? "20px" : "30px",
    buttonPadding: isMobile ? "12px 24px" : "14px 32px",
    buttonFontSize: isMobile ? "0.8rem" : "0.9rem",
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
      
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('categoryChange', { 
          detail: { category: genreValue } 
        }));
      }, 500);
    }
  }, []);

  const handleIndexChange = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Arrow component
  const CarouselArrow = useCallback(({ direction, onClickHandler, hasArrow }) => {
    if (!hasArrow) return null;

    const ArrowIcon = direction === 'prev' ? NavigateBeforeIcon : NavigateNextIcon;

    return (
      <IconButton
        onClick={onClickHandler}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          color: "rgba(255, 255, 255, 0.8)",
          backgroundColor: "transparent",
          padding: isMobile ? 1 : 1.5,
          zIndex: 10,
          borderRadius: 0,
          border: "none",
          transition: "all 0.3s ease",
          left: direction === 'prev' ? responsiveValues.arrowPosition : undefined,
          right: direction === 'next' ? responsiveValues.arrowPosition : undefined,
          "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: "translateY(-50%) scale(1.1)",
          },
        }}
        aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
      >
        <ArrowIcon sx={{ fontSize: isMobile ? 28 : 32 }} />
      </IconButton>
    );
  }, [responsiveValues.arrowPosition, isMobile, theme]);

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
              ? `linear-gradient(to bottom, rgba(45,44,47,0.7) 0%, rgba(45,44,47,0.4) 50%, rgba(45,44,47,0.2) 100%)`
              : `linear-gradient(to right, rgba(45,44,47,0.8) 0%, rgba(45,44,47,0.4) 50%, rgba(45,44,47,0.2) 100%)`,
            zIndex: 1,
          },
        }}
      >
        <img
          src={image}
          alt={`${genre?.name || 'Music'} genre showcase`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.9) contrast(1.1)",
          }}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </Box>

      {/* Text content - POSITIONED TO LEFT */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: responsiveValues.textLeftPosition,
          transform: "translateY(-50%)",
          zIndex: 2,
          maxWidth: responsiveValues.textMaxWidth,
          opacity: activeIndex === index ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: activeIndex === index ? "0.3s" : "0s",
          textAlign: isMobile ? "center" : "left",
          width: isMobile ? "90%" : "auto",
        }}
      >
        {!isMobile && (
          <Box
            sx={{
              width: activeIndex === index ? "60px" : 0,
              height: "2px",
              backgroundColor: theme.palette.secondary.main,
              mb: 3,
              transition: "width 0.6s ease-out",
              transitionDelay: activeIndex === index ? "0.5s" : "0s",
              marginLeft: 0,
              marginRight: "auto",
            }}
          />
        )}

        <Typography
          component="h1"
          onClick={() => genre && handleGenreClick(genre.value)}
          sx={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: responsiveValues.titleFontSize,
            mb: 2,
            color: theme.palette.common.white,
            letterSpacing: "0.02em",
            lineHeight: 1.1,
            textShadow: "2px 2px 20px rgba(0,0,0,0.5)",
            cursor: genre ? "pointer" : "default",
            transition: "all 0.3s ease",
            "&:hover": genre ? {
              transform: "translateY(-2px)",
              color: theme.palette.secondary.main,
            } : {},
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
          aria-label={genre ? `Explore ${genre.name} albums` : undefined}
        >
          {genre?.name || "Discover Music"}
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            color: theme.palette.common.white,
            fontSize: responsiveValues.subtitleFontSize,
            fontWeight: 300,
            letterSpacing: "0.03em",
            lineHeight: 1.6,
            maxWidth: isMobile ? "100%" : "400px",
            textShadow: "1px 1px 10px rgba(0,0,0,0.7)",
            mb: 4,
            opacity: 0.9,
            fontFamily: "'Fauna One', serif",
            marginLeft: isMobile ? "auto" : 0,
            marginRight: isMobile ? "auto" : "auto",
          }}
        >
          {genre?.subtitle || "Explore our curated collection of vinyl records"}
        </Typography>

        {genre && (
          <Box
            component="button"
            onClick={() => handleGenreClick(genre.value)}
            sx={{
              padding: responsiveValues.buttonPadding,
              backgroundColor: "transparent",
              border: `1px solid ${theme.palette.secondary.main}`,
              color: theme.palette.secondary.main,
              fontWeight: 500,
              fontSize: responsiveValues.buttonFontSize,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 0,
              fontFamily: "'Fauna One', serif",
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                transform: "translateY(-2px)",
                boxShadow: `0 8px 20px ${theme.palette.secondary.main}40`,
              },
              "&:focus-visible": {
                outline: `2px solid ${theme.palette.secondary.main}`,
                outlineOffset: "2px",
              },
              display: isMobile ? "block" : "inline-block",
              marginLeft: isMobile ? "auto" : 0,
              marginRight: isMobile ? "auto" : "auto",
            }}
            aria-label={`Find ${genre.name} albums`}
          >
            Explore {genre.name}
          </Box>
        )}
      </Box>
    </Box>
  ), [responsiveValues, isMobile, theme, activeIndex, handleGenreClick]);

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
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Carousel
        {...CAROUSEL_CONFIG}
        selectedItem={activeIndex}
        onChange={handleIndexChange}
        renderArrowPrev={(onClickHandler, hasPrev) => (
          <CarouselArrow
            direction="prev"
            onClickHandler={onClickHandler}
            hasArrow={hasPrev}
          />
        )}
        renderArrowNext={(onClickHandler, hasNext) => (
          <CarouselArrow
            direction="next"
            onClickHandler={onClickHandler}
            hasArrow={hasNext}
          />
        )}
      >
        {carouselImages.map((item, index) => (
          <CarouselSlide
            key={`carousel-slide-${index}`}
            image={item.image}
            genre={item.genre}
            index={index}
          />
        ))}
      </Carousel>
      <CustomIndicators />
    </Box>
  );
};

export default MainCarousel;
