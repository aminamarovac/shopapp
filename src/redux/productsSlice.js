import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, payload) => {
      state.push(payload);
    },
    removeFromCart: (state, payload) => {
      state.map((item) =>
        item.id === payload.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
