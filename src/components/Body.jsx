import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Body = () => {
  const user = useSelector((store) => store.user);
  const { isLoading, error } = useNowPlayingMovies();

  if (!user) {
    return null;
  }

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />

      {/* Loading Animation */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="flex space-x-2">
            <div
              className="w-4 h-4 bg-red-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-red-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-red-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="text-white text-xl bg-red-600 p-4 rounded">
            Error: {error}
          </div>
        </div>
      )}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Body;
