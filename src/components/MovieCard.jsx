import React, { useState } from "react";
import { IMG_CND_URL } from "../utils/constants";
import { FaPlay, FaPlus, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movie_title, id }) => {
  const [showInfoBox, setShowInfoBox] = useState(false);

  const navigate = useNavigate();

  if (!posterPath) return null;

  return (
    <div className="group w-[120px] min-w-[120px] sm:w-[140px] sm:min-w-[140px] md:w-[160px] md:min-w-[160px] lg:w-[180px] lg:min-w-[180px] transition-all duration-300 ease-in-out hover:scale-110 hover:z-50">
      <div className="relative aspect-[2/3.5] rounded-md overflow-hidden shadow-lg bg-neutral-900">
        {/* Poster Image */}
        <img
          src={IMG_CND_URL + posterPath}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
            <div className="flex justify-center space-x-2 sm:space-x-3">
              <button className="bg-white text-black p-1.5 sm:p-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300 hover:scale-110">
                <FaPlay
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  onClick={() => navigate(`/video/${id}`)}
                />
              </button>
              <button className="bg-white/20 text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition duration-300 hover:scale-110">
                <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <div className="relative">
                <button
                  className="bg-white/20 text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition duration-300 hover:scale-110"
                  onMouseEnter={() => setShowInfoBox(true)}
                  onMouseLeave={() => setShowInfoBox(false)}
                >
                  <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                {/* Info Box */}
                {showInfoBox && (
                  <div
                    className="absolute transform -translate-x-1/2 w-64 bg-[#181818] text-white p-4 rounded-md shadow-2xl z-[9999] border border-gray-700"
                    style={{
                      bottom: "calc(100% + 10px)",
                      left: "50%",
                      position: "fixed",
                    }}
                    onMouseEnter={() => setShowInfoBox(true)}
                    onMouseLeave={() => setShowInfoBox(false)}
                  >
                    <div className="space-y-3">
                      <p className="font-semibold text-base text-white">
                        {movie_title}
                      </p>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-green-500 font-medium">
                          98% Match
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-300">2024</span>
                        <span className="text-gray-400">•</span>
                        <span className="border border-gray-500 px-1 text-gray-300">
                          TV-MA
                        </span>
                      </div>
                      <div className="pt-1">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          A brief description of the movie would go here. This
                          is a placeholder text that will be replaced with
                          actual movie description.
                        </p>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#181818] transform rotate-45 border-r border-b border-gray-700"></div>
                  </div>
                )}
              </div>
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
          {movie_title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
