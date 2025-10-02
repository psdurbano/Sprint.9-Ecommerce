import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Input,
  CircularProgress,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item";
import { setItems } from "../../state";

const API_URL = `${process.env.REACT_APP_API_URL || "http://localhost:1337"}/api/items?populate=image&pagination[limit]=50`;

const CATEGORIES = [
  { label: "ALL", value: "all" },
  { label: "JAZZ", value: "jazz" },
  { label: "POP", value: "pop" },
  { label: "ROCK", value: "rock" },
  { label: "SOUL", value: "soul" },
];

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const items = useSelector((state) => state.cart.items || []);
  const [isLoading, setIsLoading] = useState(true);
  const isXs = useMediaQuery("(max-width:600px)");

  const handleCategoryChange = useCallback((event, newValue) => {
    setSelectedCategory(newValue);
  }, []);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (item.attributes?.category || "").toLowerCase() === selectedCategory;

      const matchesSearch =
        searchTerm.trim() === "" ||
        (item.attributes?.name || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchTerm]);

  useEffect(() => {
    const handleCategoryEvent = (e) => {
      if (e?.detail?.category) {
        setSelectedCategory(e.detail.category);
      }
    };
    window.addEventListener("categoryChange", handleCategoryEvent);
    return () => window.removeEventListener("categoryChange", handleCategoryEvent);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data?.data && Array.isArray(data.data)) {
          dispatch(setItems(data.data));
        } else {
          dispatch(setItems([]));
        }
      } catch (err) {
        console.error("Error fetching items:", err);
        dispatch(setItems([]));
      } finally {
        setIsLoading(false);
      }
    };

    if (items.length === 0) fetchItems();
    else setIsLoading(false);
  }, [dispatch, items.length]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
          }}
        >
          <CircularProgress />
          <Typography sx={{ ml: 2, color: "text.secondary" }}>
            Loading albums...
          </Typography>
        </Box>
      );
    }

    if (filteredItems.length === 0) {
      return (
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ mt: 4, fontStyle: "italic" }}
        >
          {searchTerm
            ? `No results for "${searchTerm}"`
            : `No albums in the ${selectedCategory} category yet.`}
        </Typography>
      );
    }

    return (
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="stretch"
        sx={{ p: 1 }}
      >
        {filteredItems.map((item) => (
          <Grid
            item
            key={`item-${item.id}`}
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box
      component="section"
      aria-label="Music albums collection"
      width="80%"
      margin="80px auto"
      id="shopping-list"
    >
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        sx={{ mb: 2, fontWeight: 600 }}
      >
        Our Featured{" "}
        <Box component="span" sx={{ color: "primary.main", fontWeight: 700 }}>
          Albums
        </Box>
      </Typography>

      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search albums..."
        fullWidth
        sx={{
          m: 2,
          transition: "opacity 0.25s ease-in-out",
          opacity: 0.9,
          "&:focus-within": { opacity: 1 },
        }}
        aria-label="Search albums"
      />

      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        textColor="primary"
        indicatorColor="primary"
        variant={isXs ? "scrollable" : "standard"}
        scrollButtons={isXs ? "auto" : false}
        allowScrollButtonsMobile
        centered={!isXs}
        sx={{
          m: 2,
          "& .MuiTabs-flexContainer": {
            flexWrap: "nowrap",
            justifyContent: isXs ? "flex-start" : "center",
          },
          "& .MuiTab-root": {
            minWidth: isXs ? "80px" : "120px",
            fontSize: isXs ? "0.75rem" : "1rem",
            padding: isXs ? "6px 12px" : "12px 16px",
          },
        }}
      >
        {CATEGORIES.map((category) => (
          <Tab
            key={category.value}
            label={category.label}
            value={category.value}
          />
        ))}
      </Tabs>

      {renderContent()}

      {filteredItems.length > 0 && (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 2 }}
        >
          Showing {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "album" : "albums"}
        </Typography>
      )}
    </Box>
  );
};

export default ShoppingList;