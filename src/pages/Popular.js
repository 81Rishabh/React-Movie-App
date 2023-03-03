import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../features/Movies/movieSlice";
import Movies from "../Components/Movies";

function Popular() {
  const { popular } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(
      getPopular()
    );
  }, [dispatch]);

  return popular ? <Movies moviesList={popular} title="Popular"/> : "No Movies";
}

export default Popular;
