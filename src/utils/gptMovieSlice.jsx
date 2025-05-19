import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
  name: "gptMovies",
  initialState: {
    gptMovies: null,
  },
  reducers: {
    addgptMovies: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export const { addgptMovies } = gptMovieSlice.actions;
export default gptMovieSlice.reducer;
