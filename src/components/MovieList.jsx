import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="px-3 sm:px-4 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 relative">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
        {title}
        <span className="ml-2 text-xs sm:text-sm text-gray-400">
          ({movies.length})
        </span>
      </h2>

      <div className="relative group">
        <div className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-2 sm:space-x-3 md:space-x-4 pb-4 sm:pb-5 md:pb-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movie_title={movie.title}
            />
          ))}
        </div>

        {/* Enhanced gradient fade effects */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Scroll indicators */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-black/70">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-black/70">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
