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
import { shades } from "../../theme";

// Available categories and sort options
const CATEGORIES = [
  { label: "ALL", value: "all" },
  { label: "JAZZ", value: "jazz" },
  { label: "POP", value: "pop" },
  { label: "ROCK", value: "rock" },
  { label: "SOUL", value: "soul" },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "A to Z", value: "name-asc" },
  { label: "Z to A", value: "name-desc" },
  { label: "Price Low to High", value: "price-asc" },
  { label: "Price High to Low", value: "price-desc" },
];

// Infinite scroll configuration
const ITEMS_PER_PAGE = 24;

// Timeouts – safe for hibernating backends
const REQUEST_TIMEOUT = 300000; // 5 minutes
const GLOBAL_TIMEOUT = 240000;  // 4 minutes

const ShoppingList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filterLabelStyles = useMemo(
    () => ({
      display: "block",
      mb: 2,
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: "text.secondary",
      fontSize: "0.7rem",
      opacity: 0.8,
      fontFamily: theme.typography.fontFamily,
    }),
    [theme]
  );

  const chipBaseStyles = useMemo(
    () => ({
      borderRadius: 0,
      fontWeight: 400,
      fontSize: { xs: "0.7rem", sm: "0.75rem" },
      letterSpacing: 0.5,
      fontFamily: theme.typography.fontFamily,
      transition: "all 0.2s ease",
    }),
    [theme]
  );

  const getChipStyles = useCallback(
    (isSelected) => ({
      ...chipBaseStyles,
      bgcolor: isSelected ? "primary.main" : "transparent",
      color: isSelected ? "white" : "text.primary",
      borderColor: isSelected ? "primary.main" : "divider",
      "&:hover": {
        bgcolor: isSelected ? "primary.dark" : shades.neutral[50],
        borderColor: "primary.main",
        transform: "translateY(-1px)",
      },
    }),
    [chipBaseStyles]
  );

  const renderDivider = useCallback(
    () => <Divider sx={{ my: 2, opacity: 0.5 }} />,
    []
  );

  const renderFilterLabel = useCallback(
    (text) => (
      <Typography variant="caption" sx={filterLabelStyles}>
        {text}
      </Typography>
    ),
    [filterLabelStyles]
  );

  // Items from Redux store
  const items = useSelector((state) => state.cart.items || []);

  // Filter & UI states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [resultCount, setResultCount] = useState(0);
  const [showFilters, setShowFilters] = useState(!isMobile);

  // Infinite scroll states
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(false);

  // Handlers
  const handleCategoryChange = useCallback((categoryValue) => {
    setSelectedCategory(categoryValue);
    setCurrentPage(1);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }, []);

  const handleCategoryEvent = useCallback((e) => {
    if (e?.detail?.category) {
      setSelectedCategory(e.detail.category);
      setCurrentPage(1);
    }
  }, []);

  const handleSortSelect = useCallback((value) => {
    setSortBy(value);
    setCurrentPage(1);
  }, []);

  const handlePriceChange = useCallback((event, newValue) => {
    setPriceRange(newValue);
    setCurrentPage(1);
  }, []);

  const toggleFilters = useCallback(() => {
    setShowFilters((prev) => !prev);
  }, []);

  // Calculate max price when items are loaded
  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) {
      const prices = items.map((item) => item?.attributes?.price || 0);
      const max = Math.max(...prices);
      setMaxPrice(Math.ceil(max));
      setPriceRange([0, Math.ceil(max)]);
    }
  }, [items]);

  // Hide filters on scroll (mobile only)
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

  // Filtered and sorted items
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
        searchLower === "" || itemName.includes(searchLower);
      const matchesPrice =
        itemPrice >= priceRange[0] && itemPrice <= priceRange[1];

      return matchesCategory && matchesSearch && matchesPrice;
    });

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

  // Visible items for infinite scroll
  const visibleItems = useMemo(() => {
    const endIndex = currentPage * ITEMS_PER_PAGE;
    return filteredItems.slice(0, endIndex);
  }, [filteredItems, currentPage]);

  // Update result count and hasMoreItems
  useEffect(() => {
    setResultCount(filteredItems.length);
    setHasMoreItems(visibleItems.length < filteredItems.length);
  }, [filteredItems, visibleItems]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (!hasMoreItems) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 100) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [hasMoreItems]);

  // Setup scroll listeners
  useEffect(() => {
    if (hasMoreItems) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll, hasMoreItems]);

  // Load more if initial content is too short
  useEffect(() => {
    if (hasMoreItems && visibleItems.length > 0) {
      const checkInitialLoad = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (documentHeight <= windowHeight + 100) {
          setCurrentPage((prev) => prev + 1);
        }
      };
      setTimeout(checkInitialLoad, 100);
    }
  }, [hasMoreItems, visibleItems.length]);

  // External category change listener
  useEffect(() => {
    window.addEventListener("categoryChange", handleCategoryEvent);
    return () => {
      window.removeEventListener("categoryChange", handleCategoryEvent);
    };
  }, [handleCategoryEvent]);

  // FETCH ITEMS FROM API – only once if Redux is empty
  useEffect(() => {
    if (items.length > 0) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    let loadingTimer = null;
    let hideLoadingTimer = null;

    hideLoadingTimer = setTimeout(() => {
      if (!isMounted) return;
      clearTimeout(loadingTimer);
      setIsLoading(false);
      setError(
        "The server is waking up… it’s taking longer than usual. Please wait or refresh."
      );
    }, GLOBAL_TIMEOUT);

    const fetchItems = async () => {
      if (!isMounted) return;

      setIsLoading(true);
      setError(null);

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

        const response = await fetch(
          `${API_ENDPOINTS.items}?populate=image&pagination[pageSize]=250&sort=name:asc`,
          { signal: controller.signal }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!isMounted) return;

        clearTimeout(loadingTimer);
        clearTimeout(hideLoadingTimer);

        if (data?.data && Array.isArray(data.data)) {
          const normalizedItems = data.data.map((raw) => ({
            id: raw.id,
            documentId: raw.documentId, // ← importante para rutas
            attributes: {
              name: raw.name,
              shortDescription: raw.shortDescription,
              longDescription: raw.longDescription,
              price: raw.price,
              category: raw.category,
              mediaCondition: raw.mediaCondition,
              sleeveCondition: raw.sleeveCondition,
              createdAt: raw.createdAt,
              updatedAt: raw.updatedAt,
              publishedAt: raw.publishedAt,
              documentId: raw.documentId,
              image: raw.image
                ? {
                    data: {
                      id: raw.image.id,
                      attributes: {
                        ...raw.image,
                      },
                    },
                  }
                : null,
            },
          }));
          dispatch(setItems(normalizedItems));
        } else {
          dispatch(setItems([]));
        }

        setIsLoading(false);
      } catch (err) {
        if (!isMounted) return;
        console.error("Error fetching items:", err);
      }
    };

    fetchItems();

    return () => {
      isMounted = false;
      if (loadingTimer) clearTimeout(loadingTimer);
      if (hideLoadingTimer) clearTimeout(hideLoadingTimer);
    };
  }, [dispatch, items.length]);

  // Render states
  const renderLoadingState = useCallback(() => {
    if (!isLoading) return null;

    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 80,
            gap: 1,
          }}
        >
          <CircularProgress
            size={32}
            sx={{
              color: "primary.main",
              opacity: 0.8,
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              opacity: 0.7,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Loading albums...
          </Typography>
        </Box>
      </Box>
    );
  }, [isLoading, theme.typography.fontFamily]);

  const renderErrorState = useCallback(() => {
    if (!error) return null;
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
          sx={{
            fontWeight: 400,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Failed to load albums
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            opacity: 0.7,
            maxWidth: 400,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {error}
        </Typography>
      </Box>
    );
  }, [error, theme.typography.fontFamily]);

  const renderEmptyState = useCallback(() => {
    if (isLoading || error || visibleItems.length > 0) {
      return null;
    }
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            mb: 1,
            opacity: 0.8,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {searchTerm ? `No results for "${searchTerm}"` : `No albums found`}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            opacity: 0.6,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Try adjusting your search or filters
        </Typography>
      </Box>
    );
  }, [visibleItems, searchTerm, isLoading, error, theme.typography.fontFamily]);

  const renderItemsGrid = useCallback(() => {
    if (isLoading || error || !visibleItems.length) return null;

    return (
      <>
        <Grid
          container
          spacing={isMobile ? 2 : 3}
          justifyContent="center"
          alignItems="stretch"
          sx={{ py: 1 }}
        >
          {visibleItems.map((item, index) => (
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
                <Item item={item} showAddButton={false} />
              </Grid>
            </Fade>
          ))}
        </Grid>

        {hasMoreItems && (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <CircularProgress size={24} sx={{ color: "primary.main" }} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Scroll down to load more albums...
            </Typography>
          </Box>
        )}
      </>
    );
  }, [visibleItems, isMobile, hasMoreItems, isLoading, error]);

  const renderContent = () => {
    if (error) return renderErrorState();
    if (isLoading) return renderLoadingState();
    if (visibleItems.length === 0) return renderEmptyState();
    return renderItemsGrid();
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
      {/* Page title */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Our Featured{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            Albums
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: "auto",
            mb: 3,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Discover our curated collection of vinyl records across all genres
        </Typography>
      </Box>

      {/* Search input */}
      <Box
        sx={{ mb: 2, position: "relative", width: "100%", maxWidth: "none" }}
      >
        <SearchIcon
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: "text.secondary",
            opacity: 0.6,
            fontSize: 20,
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
            transition: "all 0.3s ease",
            bgcolor: "background.paper",
            fontSize: "0.95rem",
            fontFamily: theme.typography.fontFamily,
            "&:hover": {
              borderColor: "primary.main",
              bgcolor: shades.neutral[50],
            },
            "&.Mui-focused": {
              borderColor: "primary.main",
              boxShadow: `0 0 0 1px ${theme.palette.primary.main}20`,
              bgcolor: "background.paper",
            },
            "& .MuiInput-input": {
              py: 0.5,
              textAlign: "left",
              fontFamily: theme.typography.fontFamily,
              "&::placeholder": {
                opacity: 0.6,
                color: "text.secondary",
              },
            },
          }}
          aria-label="Search albums"
        />
        {isMobile && (
          <IconButton
            onClick={toggleFilters}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              color: "text.secondary",
              opacity: 0.7,
            }}
          >
            <TuneIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* Filters panel */}
      <Fade in={showFilters} timeout={400}>
        <Paper
          elevation={0}
          sx={{
            mb: showFilters ? 3 : 0,
            p: { xs: 2, sm: 3 },
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 0,
            bgcolor: "background.paper",
            opacity: showFilters ? 1 : 0,
            transform: showFilters ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.3s ease",
            height: showFilters ? "auto" : 0,
            overflow: "hidden",
            visibility: showFilters ? "visible" : "hidden",
          }}
        >
          {/* Genre filter */}
          <Box sx={{ mb: 3 }}>
            {renderFilterLabel("Genre")}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              {CATEGORIES.map((category) => (
                <Chip
                  key={category.value}
                  label={category.label}
                  onClick={() => handleCategoryChange(category.value)}
                  variant={
                    selectedCategory === category.value ? "filled" : "outlined"
                  }
                  size={isMobile ? "small" : "medium"}
                  sx={getChipStyles(selectedCategory === category.value)}
                />
              ))}
            </Box>
          </Box>

          {renderDivider()}

          {/* Sort & Price filters */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {renderFilterLabel("Sort By")}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {SORT_OPTIONS.map((option) => (
                  <Chip
                    key={option.value}
                    label={option.label}
                    onClick={() => handleSortSelect(option.value)}
                    variant={sortBy === option.value ? "filled" : "outlined"}
                    size={isMobile ? "small" : "medium"}
                    sx={getChipStyles(sortBy === option.value)}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              {renderFilterLabel("Price Range")}
              <Box sx={{ px: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      opacity: 0.8,
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    €{priceRange[0]}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      opacity: 0.8,
                      fontFamily: theme.typography.fontFamily,
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
                    color: "primary.main",
                    height: 2,
                    "& .MuiSlider-thumb": {
                      width: 12,
                      height: 12,
                      borderRadius: 0,
                      transition: "all 0.2s ease",
                      "&:hover, &.Mui-focusVisible": {
                        boxShadow: `0 0 0 8px ${theme.palette.primary.main}20`,
                      },
                    },
                    "& .MuiSlider-track": {
                      height: 2,
                    },
                    "& .MuiSlider-rail": {
                      height: 2,
                      opacity: 0.3,
                      backgroundColor: shades.neutral[300],
                    },
                    "& .MuiSlider-valueLabel": {
                      backgroundColor: "primary.main",
                      borderRadius: 0,
                      fontSize: "0.7rem",
                      fontFamily: theme.typography.fontFamily,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Fade>

      {/* Items grid or states */}
      <Box
        sx={{
          mt: isMobile && !showFilters ? 2 : 0,
        }}
      >
        {renderContent()}
      </Box>

      {/* Result count footer */}
      {!isLoading && !error && (
        <Fade in timeout={500}>
          <Box sx={{ textAlign: "center", mt: 4, mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: { xs: 20, sm: 40 },
                  height: 1,
                  backgroundColor: "divider",
                  opacity: 0.5,
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontWeight: 400,
                  letterSpacing: 0.5,
                  opacity: 0.7,
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Showing {visibleItems.length} of {resultCount}{" "}
                {resultCount === 1 ? "album" : "albums"}
                {hasMoreItems && " • Scroll to load more"}
              </Typography>
              <Box
                sx={{
                  width: { xs: 20, sm: 40 },
                  height: 1,
                  backgroundColor: "divider",
                  opacity: 0.5,
                }}
              />
            </Box>
          </Box>
        </Fade>
      )}
    </Box>
  );
};

export default ShoppingList;
