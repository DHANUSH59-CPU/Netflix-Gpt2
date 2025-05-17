import React from "react";
import { FaPlay, FaInfoCircle, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-[20%] sm:bottom-[25%] md:bottom-[30%] left-[4%] sm:left-[3%] md:left-[2%] w-[92%] sm:w-[80%] md:w-[45%] lg:w-[36%] z-10 text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg animate-fade-in">
        {title}
      </h1>
      <p className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3 drop-shadow-md text-gray-200 animate-fade-in-delay">
        {overview}
      </p>
      <div className="flex gap-2 sm:gap-3 animate-fade-in-delay-2">
        <button className="flex items-center bg-white text-black px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded hover:bg-opacity-80 transition-all text-xs sm:text-sm md:text-base font-medium group">
          <FaPlay className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-base group-hover:scale-110 transition-transform" />
          Play
        </button>
        <button className="flex items-center bg-gray-500 bg-opacity-70 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded hover:bg-opacity-50 transition-all text-xs sm:text-sm md:text-base font-medium group">
          <FaInfoCircle className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-base group-hover:scale-110 transition-transform" />
          More Info
        </button>
        <button className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border-2 border-white hover:bg-white/20 transition-all group">
          <FaVolumeMute className="text-white text-base sm:text-lg md:text-xl group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default VideoTitle;
