import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useGetMovieVideos = ({ movieId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      if (!movieId) return;
      console.log("Fetching trailer for movie ID:", movieId);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await response.json();

        const trailer =
          data.results.find(
            (video) =>
              video.official &&
              video.type === "Trailer" &&
              video.site === "YouTube"
          ) || data.results.find((video) => video.type === "Trailer");

        if (trailer) dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideos(); // Call every render
  }, []); // ❌ no dependency array means it runs every render
};

export default useGetMovieVideos;
