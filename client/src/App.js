import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

import Home from "./pages/home/Home";
import Navbar from "./pages/global/Navbar";
import Footer from "./pages/global/Footer";
import ItemDetails from "./pages/itemDetails/ItemDetails";
import CartMenu from "./pages/global/CartMenu";
import Checkout from "./pages/checkout/Checkout";
import Confirmation from "./pages/checkout/Confirmation";
import SignupForm from "./pages/global/SignUpForm";
import AboutUs from "./pages/info/AboutUs";
import ContactUs from "./pages/info/ContactUs";

import theme from "./theme";

import "./styles/global.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <BrowserRouter>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Navbar />
            <ScrollToTop />
            <Box component="main" sx={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/item/:itemId" element={<ItemDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/success" element={<Confirmation />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />{" "}
              </Routes>
            </Box>
            <CartMenu />
            <Footer />
          </Box>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
