import React, { useEffect, useState,useRef } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getPopular, getTopRated, getUpcoming } from "../features/Movies/movieSlice";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import PaginationByNumber from "./PaginationByNumber";
import Skeleton from "./Skeleton";

function Movies({ moviesList, title }) {
  const page = useRef(1);
  const [movies, setmovies] = useState([]);
  const { loading,searchLoading } = useSelector((state) => state.movies);
  const [currentPage, setcurrentPage] = useState(1);
  const dispatch = useDispatch();
  const MemberPerPage = 10;
  
  useEffect(() => {
    if(title === "favourites") {
      if (moviesList.length !== 0) setmovies([...moviesList]);
    } else {
      if (moviesList.length !== 0) setmovies([...moviesList.results]);
    }
  }, [moviesList,title]);


  // handle prev
  const handlePrev = function() {
     if(page.current > 1) {
        page.current -= 1;
        handleMoviesByCategory(page.current)
     }
  }
  
  // handle next
  const handleNext = function() {
    if(page.current <= 500) {
      page.current += 1;
      handleMoviesByCategory(page.current)
    }
  }


  const handleMoviesByCategory = (page) => {
    if(title === "Popular") {
      dispatch(getPopular(page));
    } else if(title === "Top Rated") {
      dispatch(getTopRated(page));
    } else if(title === "upComing") {
      dispatch(getUpcoming(page));
    }
  }

  // pagination login
  
  // getting indexs
  const indexOfLastMember = currentPage * MemberPerPage;
  const indexOfFirstMember = indexOfLastMember - MemberPerPage;
  const currentMembers = movies.slice(indexOfFirstMember, indexOfLastMember);
  const totalMembers = movies.length;
 

  return (
    <div className="w-full py-3">
      <div className="flex justify-between items-center">
       <h1 className="font-bold text-2xl text-slate-800">{title}</h1>
       <Pagination 
         handlePrev={handlePrev}
         handleNext={handleNext}
         page={page}
       />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 grid-flow-row mt-4">
        {(loading || searchLoading) &&
          (Array.from(Array(5)).map((_, index) => <Skeleton key={index} />))}
        {!loading &&
          currentMembers.length > 0 &&
          currentMembers.map((movie) => {
             return <MovieCard movie={movie} key={movie.id} title={title}/>;
          })}
      </div>
      <PaginationByNumber 
        totalMembers={totalMembers}
        MemberPerPage={MemberPerPage}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
}

export default Movies;
