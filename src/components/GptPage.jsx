import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGO } from "../utils/constants";

const GptPage = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          src={LOGO}
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptPage;
