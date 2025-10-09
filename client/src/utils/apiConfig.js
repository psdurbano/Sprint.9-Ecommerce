const isDevelopment =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

export const API_CONFIG = {
  baseUrl: isDevelopment
    ? "http://localhost:1337"
    : "https://sprint-9-ecommerce.onrender.com",

  uploadsUrl: isDevelopment
    ? "http://localhost:1337"
    : "https://sprint-9-ecommerce.onrender.com",
};

export const API_ENDPOINTS = {
  items: `${API_CONFIG.baseUrl}/api/items`,
  itemDetail: (id) => `${API_CONFIG.baseUrl}/api/items/${id}`,
  orders: `${API_CONFIG.baseUrl}/api/orders`,
};
