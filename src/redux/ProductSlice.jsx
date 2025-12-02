import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setproduct } = productSlice.actions;
export default productSlice.reducer;
