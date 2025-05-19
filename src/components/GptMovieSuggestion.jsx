import React from "react";
import { useSelector } from "react-redux";
import { IoPlayCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

export const GptMovieSuggestion = () => {
  const navigate = useNavigate();
  const movieData = useSelector((store) => store?.gptMovies?.gptMovies);

  if (!movieData || movieData.length === 0 || movieData == "") {
    return (
      <div className="w-[900px] ml-24">
        <p className="text-black mt-4 text-7xl">
          Discover Your Perfect Movie with{" "}
          <span className="text-purple-800">AI Recommendations</span>
        </p>
        <p className="font-thin">
          Find your next favorite movie with our{" "}
          <span className="text-purple-800">
            AI-powered recommendation system
          </span>{" "}
          . Get personalized suggestions based on your unique preferences and
          discover films you’ll love!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 mt-4 ml-48">
        {movieData.map((movieGroup) => {
          // Get first movie from each group
          const firstMovie = movieGroup?.[0];

          // Skip if no movie or missing poster
          if (!firstMovie || !firstMovie.poster_path) return null;

          return (
            <MovieCard
              key={firstMovie.id}
              posterPath={firstMovie.poster_path}
              movie_title={firstMovie.title}
            />
          ); // A Bug : Im Using return here because it is inside the {}, In MovieList I didnot use Bez it was in ()
        })}
      </div>
    </>
  );
};
