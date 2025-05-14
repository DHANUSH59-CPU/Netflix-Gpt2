import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Body = () => {
  const user = useSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(true);

  if (!user) {
    return null;
  }

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getNowPlayingMovies();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
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

      {/* Your existing content can go here */}
      <div className="container mx-auto px-4 py-8 text-white">
        {/* Your other components/content will appear here after loading */}
      </div>
    </div>
  );
};

export default Body;
