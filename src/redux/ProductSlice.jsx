import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setproduct(state, action) {
      state.product = action.payload;
    },
  },
});

export const { setproduct } = productSlice.actions;
export default productSlice.reducer;
