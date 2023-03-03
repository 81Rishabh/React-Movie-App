import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Movies from "../Components/Movies";
import { getSearchResults } from "../features/Movies/movieSlice";

function SearchResult() {
    const [query , setQuery] = useState("");
    const { searchResults } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

  const handleSearch = (e) => {
      updateDebounce(e.target.value);
  };

  // debounce
  const updateDebounce = Debounce((query) => {
    dispatch(getSearchResults(query));
    setQueryParamInURL(query);
    setQuery(query);
  }, 1000);

  // handle debounce
  function Debounce(cb, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, [delay]);
    };
  }

  function setQueryParamInURL(query) {
     const searchParams = new URLSearchParams(window.location.search);
     searchParams.set("query" , query);
     const newRelativePathQery = window.location.pathname + "?" + searchParams.toString();
     window.history.pushState(null , "" , newRelativePathQery);
  }
  
  return (
    <div className="bg-gary-100">
      <div className="mt-4 w-full md:w-full lg:w-1/2 flex justify-start mx-auto">
        <input
          type="text"
          name="search"
          id="search-movie"
          placeholder="Search for Movies..."
          className="w-full h-12 rounded-l-full pl-4 outline outline-gray-200 border-0 focus:shadow-md focus:shadow-lg  focus:border-indigo-400 transition-all duration-200"
          onChange={handleSearch}
        />
        <button
          type="submit"
          name="search"
          className="bg-slate-700 hover:bg-slate-800 transition h-12 px-3 rounded-r-full outline outline-gray-200 font-md text-white flex items-center justify-start"
        >
          <svg
            width="25"
            height="25"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"></path>
          </svg>
        </button>
      </div>
      { (searchResults.length === 0 || query === "") && (
         <div className="p-4 w-full mt-2 h-56 flex justify-center items-center"> 
            <h1 className="text-2xl text-slate-700 font-light">No Search Results Found</h1>
         </div>
      )}
      {searchResults && <Movies moviesList={searchResults} title="Search" />}
    </div>
  );
}

export default SearchResult;
