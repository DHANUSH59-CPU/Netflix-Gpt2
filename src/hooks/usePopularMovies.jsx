import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        );

        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }

        const json = await data.json();
        // console.log(json);
        dispatch(addPopularMovies(json));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
