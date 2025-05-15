import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useEffect(() => {
    const getMovieVideos = async () => {
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

    if (movieId) getMovieVideos();
  }, [movieId, dispatch]);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0 flex items-center justify-center min-w-full min-h-full">
        {trailerVideo?.key ? (
          <iframe
            className="absolute min-w-full min-h-full w-auto h-auto object-cover"
            style={{
              width: "100vw",
              height: "56.25vw" /* 16:9 aspect ratio */,
              minHeight: "100vh",
              minWidth: "177.77vh" /* 16:9 aspect ratio */,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0`}
            title="Movie Trailer"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 bg-black"></div>
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[14.7vw] bg-gradient-to-t from-black via-black/80 to-transparent z-[5]"></div>
    </div>
  );
};

export default VideoBackground;
