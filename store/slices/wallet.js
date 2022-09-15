import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  walletAddress: "",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    saveWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },
  },
});

export const { saveWalletAddress } = walletSlice.actions;

export default walletSlice.reducer;
