import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addOnAir } from "../utils/moviesSlice";

const useOnAir = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getOnAir = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addOnAir(json));
    };
    getOnAir();
  }, []);
  //   return <div>useOnAir</div>;
};

export default useOnAir;
