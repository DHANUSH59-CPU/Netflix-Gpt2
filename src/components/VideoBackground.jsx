import React from "react";
import { useSelector } from "react-redux";
import useGetMovieVideos from "../hooks/useGetMovieVideos";

const VideoBackground = ({ movieId }) => {
  // console.log(movieId);
  useGetMovieVideos({ movieId });
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="absolute inset-0 w-full h-full">
      {trailerVideo?.key ? (
        <div className="absolute inset-0">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 scale-[2] sm:scale-[1.6] md:scale-[1.4] lg:scale-[1.2]"
            style={{
              aspectRatio: "16/9",
              minWidth: "100vw",
              minHeight: "100vh",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-black"></div>
      )}

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[1]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 sm:from-black/40 md:from-black/50 via-transparent to-black/30 sm:to-black/40 md:to-black/50 z-[1]"></div>
      <div className="absolute top-0 left-0 right-0 h-[10vw] sm:h-[12vw] md:h-[15vw] bg-gradient-to-b from-black to-transparent z-[1]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[20vw] sm:h-[22vw] md:h-[25vw] bg-gradient-to-t from-black via-black/90 to-transparent z-[1]"></div>
    </div>
  );
};

export default VideoBackground;
