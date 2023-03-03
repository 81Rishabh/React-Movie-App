import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "../Components/Movies";
import { getUpcoming } from "../features/Movies/movieSlice";

function Upcoming() {
  const { upcoming } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUpcoming()
    );
  }, [dispatch]);

  return upcoming && <Movies moviesList={upcoming} title="upComing"/>
}

export default Upcoming;
