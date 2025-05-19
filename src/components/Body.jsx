import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptPage";

const Body = () => {
  const user = useSelector((store) => store.user);
  const { isLoading, error } = useNowPlayingMovies();

  // For Show GptSearch View
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        // Dont forget add these 2 inside the <></> because only one component can be present -> To make it 2 you have to keep it inside this
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
    </div>
  );
};

export default Body;
