import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import useAiringToday from "../hooks/useAiringToday";
import useOnAir from "../hooks/useOnAir";

const MainContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useAiringToday();
  useOnAir();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies?.results?.length) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <div
          className="w-44 h-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg')] 
          bg-contain bg-no-repeat bg-center mb-8"
        ></div>
        <div className="w-10 h-10 border-4 border-opacity-30 border-t-netflix-red border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  const mainMovie = movies.results[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative pt-[56.25%] h-0 overflow-hidden bg-black">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 z-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
