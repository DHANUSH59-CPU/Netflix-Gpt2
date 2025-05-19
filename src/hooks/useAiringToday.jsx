import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addAiringToday } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useAiringToday = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAiringToday = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addAiringToday(json));
    };
    getAiringToday();
  }, []);
  //   return <div>useAiringToday</div>;
};

export default useAiringToday;
