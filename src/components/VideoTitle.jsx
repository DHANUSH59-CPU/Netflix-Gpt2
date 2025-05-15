import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-[20%] left-[4%] w-[36%] z-10 text-white">
      <h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 
        drop-shadow-[2px_2px_4px_rgba(0,0,0,0.45)]"
      >
        {title}
      </h1>
      <p
        className="hidden md:block text-sm lg:text-lg mb-4 
        drop-shadow-[2px_2px_4px_rgba(0,0,0,0.45)]"
      >
        {overview}
      </p>
      <div className="flex gap-2 md:gap-4">
        <button
          className="flex items-center justify-center bg-white text-black 
          px-3 py-1 md:px-6 md:py-2 rounded hover:bg-opacity-80 transition"
        >
          <FaPlay className="mr-1 md:mr-2" />
          <span className="text-xs md:text-base font-semibold">Play</span>
        </button>
        <button
          className="flex items-center justify-center bg-gray-600 bg-opacity-70 text-white 
          px-3 py-1 md:px-6 md:py-2 rounded hover:bg-opacity-50 transition"
        >
          <FaInfoCircle className="mr-1 md:mr-2" />
          <span className="text-xs md:text-base font-semibold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
