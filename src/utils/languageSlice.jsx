import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
  },
  reducers: {
    ChangeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { ChangeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
