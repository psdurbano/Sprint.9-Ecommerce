import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addItems: (state, action) => {
      // Add new items without duplicates
      const newItems = action.payload.filter(
        (newItem) => !state.items.some((existingItem) => existingItem.id === newItem.id)
      );
      state.items.push(...newItems);
    },

    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.item.id);

      if (existingItem) {
        // Si el item ya existe, suma las cantidades
        existingItem.count = (existingItem.count || 1) + (action.payload.item.count || 1);
      } else {
        // Si es nuevo, añádelo con la cantidad especificada
        state.cart.push({
          ...action.payload.item,
          count: action.payload.item.count || 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count = (item.count || 1) + 1;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && (item.count || 1) > 1) {
          item.count = (item.count || 1) - 1;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;