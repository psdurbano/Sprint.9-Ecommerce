import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Box,
  Typography,
  Input,
  CircularProgress,
  Grid,
  useTheme,
  Slider,
  Chip,
  Fade,
  Paper,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item";
import { setItems } from "../../state";
import { API_ENDPOINTS } from "../../utils/apiConfig";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

const CATEGORIES = [
  { label: "ALL", value: "all" },
  { label: "JAZZ", value: "jazz" },
  { label: "POP", value: "pop" },
  { label: "ROCK", value: "rock" },
  { label: "SOUL", value: "soul" },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "A → Z", value: "name-asc" },
  { label: "Z → A", value: "name-desc" },
  { label: "Price ↑", value: "price-asc" },
  { label: "Price ↓", value: "price-desc" },
];

const ShoppingList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [resultCount, setResultCount] = useState(0);
  const [showFilters, setShowFilters] = useState(!isMobile);
  
  const items = useSelector((state) => state.cart.items || []);

  const handleCategoryChange = useCallback((event, newValue) => {
    setSelectedCategory(newValue);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleCategoryEvent = useCallback((e) => {
    if (e?.detail?.category) {
      setSelectedCategory(e.detail.category);
    }
  }, []);

  const handleSortSelect = useCallback((value) => {
    setSortBy(value);
  }, []);

  const handlePriceChange = useCallback((event, newValue) => {
    setPriceRange(newValue);
  }, []);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  // Calculate max price from items
  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      const prices = items.map(item => item?.attributes?.price || 0);
      const max = Math.max(...prices);
      setMaxPrice(Math.ceil(max));
      setPriceRange([0, Math.ceil(max)]);
    }
  }, [items]);

  // Auto-hide filters on mobile when scrolling
  useEffect(() => {
    if (!isMobile) {
      setShowFilters(true);
      return;
    }

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(lastScrollY - window.scrollY) > 50) {
        setShowFilters(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Memoized filtered and sorted items
  const filteredItems = useMemo(() => {
    if (!Array.isArray(items)) return [];
    
    let filtered = items.filter((item) => {
      const itemCategory = item?.attributes?.category?.toLowerCase() || "";
      const itemName = item?.attributes?.name?.toLowerCase() || "";
      const itemPrice = item?.attributes?.price || 0;
      const searchLower = searchTerm.toLowerCase().trim();

      const matchesCategory =
        selectedCategory === "all" ||
        itemCategory === selectedCategory.toLowerCase();

      const matchesSearch =
        searchLower === "" ||
        itemName.includes(searchLower);

      const matchesPrice =
        itemPrice >= priceRange[0] && itemPrice <= priceRange[1];

      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Apply sorting
    if (sortBy !== "featured") {
      filtered = [...filtered].sort((a, b) => {
        const aName = a?.attributes?.name || "";
        const bName = b?.attributes?.name || "";
        const aPrice = a?.attributes?.price || 0;
        const bPrice = b?.attributes?.price || 0;

        switch (sortBy) {
          case "name-asc":
            return aName.localeCompare(bName);
          case "name-desc":
            return bName.localeCompare(aName);
          case "price-asc":
            return aPrice - bPrice;
          case "price-desc":
            return bPrice - aPrice;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [items, selectedCategory, searchTerm, sortBy, priceRange]);

  // Animate result count
  useEffect(() => {
    setResultCount(filteredItems.length);
  }, [filteredItems]);

  // Event listener for category changes
  useEffect(() => {
    window.addEventListener("categoryChange", handleCategoryEvent);
    return () => {
      window.removeEventListener("categoryChange", handleCategoryEvent);
    };
  }, [handleCategoryEvent]);

  // Data fetching
  useEffect(() => {
    let isMounted = true;

    const fetchItems = async () => {
      if (!isMounted) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`${API_ENDPOINTS.items}?populate=image&pagination[limit]=-1`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!isMounted) return;

        if (data?.data && Array.isArray(data.data)) {
          dispatch(setItems(data.data));
        } else {
          dispatch(setItems([]));
          console.warn('Unexpected API response structure:', data);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error("Error fetching items:", err);
        setError(err.message);
        dispatch(setItems([]));
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (!Array.isArray(items) || items.length === 0) {
      fetchItems();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, items]);

  const renderContent = () => {
    if (error) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography 
            variant="h6" 
            color="text.secondary" 
            gutterBottom
            sx={{ fontWeight: 400 }}
          >
            Failed to load albums
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ opacity: 0.7, maxWidth: 400 }}
          >
            {error}
          </Typography>
        </Box>
      );
    }

    if (isLoading) {
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            gap: 2,
          }}
        >
          <CircularProgress 
            size={32} 
            sx={{ 
              color: "primary.main",
              opacity: 0.8 
            }} 
          />
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ opacity: 0.7 }}
          >
            Loading albums...
          </Typography>
        </Box>
      );
    }

    if (!Array.isArray(filteredItems) || filteredItems.length === 0) {
      return (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              mb: 1,
              opacity: 0.8 
            }}
          >
            {searchTerm
              ? `No results for "${searchTerm}"`
              : `No albums found`}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ opacity: 0.6 }}
          >
            Try adjusting your search or filters
          </Typography>
        </Box>
      );
    }

    return (
      <Grid
        container
        spacing={isMobile ? 2 : 3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ py: 1 }}
      >
        {filteredItems.map((item, index) => (
          <Fade in timeout={300 + index * 50} key={`item-${item.id}`}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              <Item item={item} />
            </Grid>
          </Fade>
        ))}
      </Grid>
    );
  };

  return (
    <Box
      component="section"
      aria-label="Music albums collection"
      width={{ xs: "100%", sm: "90%", md: "85%" }}
      maxWidth={1400}
      margin={`${theme.spacing(8)} auto`}
      id="shopping-list"
      sx={{ px: { xs: 2, sm: 3, md: 4 } }}
    >
      {/* Header - Mantenido como antes */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ 
            mb: 2, 
            fontWeight: 600,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Our Featured{" "}
          <Box 
            component="span" 
            sx={{ 
              color: "primary.main", 
              fontWeight: 700 
            }}
          >
            Albums
          </Box>
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}
        >
          Discover our curated collection of vinyl records across all genres
        </Typography>
      </Box>

      {/* Search Input - Enhanced */}
      <Box sx={{ mb: 3, position: 'relative', maxWidth: 500, mx: 'auto' }}>
        <SearchIcon 
          sx={{ 
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'text.secondary',
            opacity: 0.6,
            fontSize: 20
          }} 
        />
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search albums by name..."
          fullWidth
          disableUnderline
          sx={{
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 0,
            px: 4,
            py: 1.5,
            transition: 'all 0.3s ease',
            bgcolor: 'background.paper',
            fontSize: '0.95rem',
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: 'neutral.light',
            },
            '&.Mui-focused': {
              borderColor: 'primary.main',
              boxShadow: `0 0 0 1px ${theme.palette.primary.main}20`,
              bgcolor: 'background.paper',
            },
            '& .MuiInput-input': {
              py: 0.5,
              textAlign: 'left',
              '&::placeholder': {
                opacity: 0.6,
                color: 'text.secondary'
              }
            }
          }}
          aria-label="Search albums"
        />
        
        {/* Mobile filter toggle */}
        {isMobile && (
          <IconButton
            onClick={toggleFilters}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'text.secondary',
              opacity: 0.7
            }}
          >
            <TuneIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* Control Bar - Enhanced */}
      <Fade in={showFilters} timeout={400}>
        <Paper 
          elevation={0}
          sx={{ 
            mb: 4, 
            p: { xs: 2, sm: 3 },
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 0,
            bgcolor: 'background.paper',
            opacity: showFilters ? 1 : 0,
            transform: showFilters ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Genre Chips */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="caption" 
              sx={{ 
                display: 'block',
                mb: 2,
                fontWeight: 500,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: 'text.secondary',
                fontSize: '0.7rem',
                opacity: 0.8
              }}
            >
              Genre
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 1, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}
            >
              {CATEGORIES.map((category) => (
                <Chip
                  key={category.value}
                  label={category.label}
                  onClick={() => handleCategoryChange(null, category.value)}
                  variant={selectedCategory === category.value ? "filled" : "outlined"}
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    borderRadius: 0,
                    fontWeight: 400,
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    letterSpacing: 0.5,
                    bgcolor: selectedCategory === category.value ? 'primary.main' : 'transparent',
                    color: selectedCategory === category.value ? 'white' : 'text.primary',
                    borderColor: selectedCategory === category.value ? 'primary.main' : 'divider',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: selectedCategory === category.value ? 'primary.dark' : 'action.hover',
                      borderColor: 'primary.main',
                      transform: 'translateY(-1px)'
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 2, opacity: 0.5 }} />

          {/* Sort & Price Filter Row */}
          <Grid container spacing={3}>
            {/* Sort */}
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block',
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  opacity: 0.8
                }}
              >
                Sort By
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {SORT_OPTIONS.map((option) => (
                  <Chip
                    key={option.value}
                    label={option.label}
                    onClick={() => handleSortSelect(option.value)}
                    variant={sortBy === option.value ? "filled" : "outlined"}
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      borderRadius: 0,
                      fontWeight: 400,
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      letterSpacing: 0.5,
                      bgcolor: sortBy === option.value ? 'primary.main' : 'transparent',
                      color: sortBy === option.value ? 'white' : 'text.primary',
                      borderColor: sortBy === option.value ? 'primary.main' : 'divider',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: sortBy === option.value ? 'primary.dark' : 'action.hover',
                        borderColor: 'primary.main',
                        transform: 'translateY(-1px)'
                      },
                    }}
                  />
                ))}
              </Box>
            </Grid>

            {/* Price Filter */}
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block',
                  mb: 1.5,
                  fontWeight: 500,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                  fontSize: '0.7rem',
                  opacity: 0.8
                }}
              >
                Price Range
              </Typography>
              <Box sx={{ px: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: '0.8rem', 
                      fontWeight: 500,
                      opacity: 0.8
                    }}
                  >
                    €{priceRange[0]}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: '0.8rem', 
                      fontWeight: 500,
                      opacity: 0.8
                    }}
                  >
                    €{priceRange[1]}
                  </Typography>
                </Box>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={maxPrice}
                  sx={{
                    color: 'primary.main',
                    height: 2,
                    '& .MuiSlider-thumb': {
                      width: 12,
                      height: 12,
                      borderRadius: 0,
                      transition: 'all 0.2s ease',
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0 0 0 8px ${theme.palette.primary.main}20`,
                      },
                    },
                    '& .MuiSlider-track': {
                      height: 2,
                    },
                    '& .MuiSlider-rail': {
                      height: 2,
                      opacity: 0.3,
                    },
                    '& .MuiSlider-valueLabel': {
                      backgroundColor: 'primary.main',
                      borderRadius: 0,
                      fontSize: '0.7rem'
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Fade>

      {/* Content */}
      {renderContent()}

      {/* Results Counter - Enhanced */}
      {!isLoading && !error && (
        <Fade in timeout={500}>
          <Box sx={{ textAlign: 'center', mt: 6, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Box sx={{ width: { xs: 20, sm: 40 }, height: 1, bgcolor: 'divider', opacity: 0.5 }} />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ 
                  fontWeight: 400,
                  letterSpacing: 0.5,
                  opacity: 0.7,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' }
                }}
              >
                {resultCount > 0 ? (
                  <>
                    {resultCount} {resultCount === 1 ? "album" : "albums"} found
                  </>
                ) : (
                  "No albums match your criteria"
                )}
              </Typography>
              <Box sx={{ width: { xs: 20, sm: 40 }, height: 1, bgcolor: 'divider', opacity: 0.5 }} />
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default ShoppingList;