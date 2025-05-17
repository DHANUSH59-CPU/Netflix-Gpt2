import React from "react";
import { IMG_CND_URL } from "../utils/constants";
import { FaPlay, FaPlus, FaInfoCircle } from "react-icons/fa";

const MovieCard = ({ posterPath, movies }) => {
  if (!posterPath) return null;

  return (
    <div className="group w-[140px] min-w-[140px] sm:w-[160px] sm:min-w-[160px] md:w-[200px] md:min-w-[200px] lg:w-[240px] lg:min-w-[240px] transition-all duration-300 ease-in-out hover:scale-110 hover:z-10">
      <div className="relative aspect-video rounded-md overflow-hidden shadow-lg bg-neutral-900">
        {/* Poster Image */}
        <img
          src={IMG_CND_URL + posterPath}
          alt={movies.original_title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
            <div className="flex justify-center space-x-2 sm:space-x-3">
              <button className="bg-white text-black p-1.5 sm:p-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300 hover:scale-110">
                <FaPlay className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="bg-white/20 text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition duration-300 hover:scale-110">
                <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button className="bg-white/20 text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition duration-300 hover:scale-110">
                <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-white">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-green-500 font-semibold">98% Match</span>
                <span className="border border-gray-500 px-0.5 sm:px-1 text-[10px] sm:text-xs">
                  TV-MA
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-[10px] sm:text-xs">HD</span>
                <span className="text-[10px] sm:text-xs">5.1</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] sm:text-xs text-gray-300">
                Thriller
              </span>
              <span className="text-[10px] sm:text-xs text-gray-300">•</span>
              <span className="text-[10px] sm:text-xs text-gray-300">
                Mystery
              </span>
            </div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
      {/* Movie Title - Always Visible */}
      <div className="mt-2 px-1">
        <h3 className="text-white text-sm sm:text-base font-medium truncate">
          {movies.original_title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
