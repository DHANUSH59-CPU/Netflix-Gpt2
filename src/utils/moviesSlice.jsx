import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpComingMovies: null,
    AiringToday: null,
    OnAir: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.UpComingMovies = action.payload;
    },
    addAiringToday: (state, action) => {
      state.AiringToday = action.payload;
    },
    addOnAir: (state, action) => {
      state.OnAir = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addAiringToday,
  addOnAir,
} = moviesSlice.actions;

export default moviesSlice.reducer;
