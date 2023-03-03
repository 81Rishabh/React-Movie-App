import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../Components/Movies";
import { getTopRated } from "../features/Movies/movieSlice";

function TopRated() {
  const { topRated } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
        getTopRated()
    );
  }, [dispatch]);

  return topRated && <Movies moviesList={topRated} title="Top Rated"/>;
}

export default TopRated;
