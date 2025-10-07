export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_URL || "http://localhost:1337",
  uploadsUrl: process.env.REACT_APP_UPLOADS_URL || "http://localhost:1337",
};

export const API_ENDPOINTS = {
  items: `${API_CONFIG.baseUrl}/api/items`,
  itemDetail: (id) => `${API_CONFIG.baseUrl}/api/items/${id}`,
};
