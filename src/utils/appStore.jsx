import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesRecuder from "./moviesSlice";
import gptReducer from "./gptSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesRecuder,
    gpt: gptReducer,
    language: languageReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default appStore;

// 1) create a appStore file and configure the store(import { configureStore } from "@reduxjs/toolkit")
// 2) create a userSlice file and create a userSlice
// 3) add reducers to it like (addUser , removeUser)
// 4) import reducers to this file and add the reducer to the store ( user: useReducer )
