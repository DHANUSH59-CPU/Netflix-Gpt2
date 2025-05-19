import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black relative z-20 -mt-[10vw]">
      {" "}
      {/* Changed from -mt-[15vw] */}
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-[15vw] bg-gradient-to-b from-black/70 to-transparent z-10"></div>
      <div className="relative z-20 pt-[5vw]">
        {" "}
        {/* Added pt-[5vw] */}
        <div className="mt-[2vw]">
          {" "}
          {/* Reduced negative margin */}
          <MovieList
            title="Now Playing"
            movies={movies?.nowPlayingMovies?.results}
          />
        </div>
        <div className="pt-2 md:pt-4">
          {" "}
          {/* Reduced padding */}
          <MovieList title="Popular" movies={movies?.PopularMovies?.results} />
          <MovieList
            title="Top Rated"
            movies={movies?.TopRatedMovies?.results}
          />
          <MovieList
            title="Upcoming"
            movies={movies?.UpComingMovies?.results}
          />
          <MovieList
            title="Airing Today"
            movies={movies?.AiringToday?.results}
          />
          <MovieList title="On Air" movies={movies?.OnAir?.results} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
