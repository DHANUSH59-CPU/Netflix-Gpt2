import React from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );

        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }

        const json = await data.json();

        if (!json.results || json.results.length === 0) {
          throw new Error("No movies found");
        }

        dispatch(addNowPlayingMovies(json));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);

  return { isLoading, error };
};

export default useNowPlayingMovies;
