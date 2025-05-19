import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { GoogleGenAI } from "@google/genai";
import { GEMINI_API } from "../utils/constants";
import { addgptMovies } from "../utils/gptMovieSlice";
import { API_OPTIONS } from "../utils/constants";
// import AIIcon from "./Aicomp";

const GptSearchBar = () => {
  const language = useSelector((store) => store.language.language);

  const dispatch = useDispatch();

  const ai = new GoogleGenAI({ apiKey: GEMINI_API });
  const MovieRef = useRef(null);

  const FetchDataBymovieName = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    const result = await fetch(url, API_OPTIONS);
    const json = await result.json();
    return json.results;
  };

  async function main() {
    const query =
      "Act as Movie Recommendation system suggest some movie for the query: " +
      MovieRef.current.value +
      "only give me 5 movies like example given ahead donot give anything extra .example result:spiderman,Panchayat,Catputli,Kesari,Tumbad.  in form of array not text. i told you donto write any thing than the example result strictly. donot write word like ok i understand.donot write anything other than movie";
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
    });
    // console.log(response);
    const movieName =
      response?.candidates[0]?.content?.parts[0].text?.split(",");
    const movieData = movieName.map((movie) => FetchDataBymovieName(movie));
    const allMovieData = await Promise.all(movieData);
    console.log(allMovieData);
    dispatch(addgptMovies(allMovieData));
  }

  return (
    <div className="flex justify-center pt-[5%] sm:pt-[8%] md:pt-[10%] px-4 sm:px-6 md:px-8">
      <form
        className="flex w-full max-w-2xl items-center bg-black/80 backdrop-blur-sm border border-gray-800 rounded-md px-3 sm:px-4 py-2 sm:py-3 space-x-2 sm:space-x-3 shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={MovieRef}
          placeholder={lang[language].GptSearchPlaceholder}
          className="flex-grow bg-transparent text-white placeholder-gray-400 text-xs sm:text-sm md:text-base font-medium focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="bg-netflix-red text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-md text-xs sm:text-sm font-semibold hover:bg-[#e50914]/90 transition-colors whitespace-nowrap"
          onClick={main}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
