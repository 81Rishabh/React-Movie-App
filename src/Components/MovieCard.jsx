import React from "react";
import { useDispatch } from "react-redux";
import { getMovieById, RemoveFavourite, setOpen } from "../features/Movies/movieSlice";

function MovieCard({ movie,title }) {
  const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path || "";
  const dispatch = useDispatch();

  const openModal = (e, id) => {
    e.stopPropagation();
    dispatch(setOpen(true));
    dispatch(getMovieById(id));
  };

  const RemoveFromFavorite = (e) => {
    e.stopPropagation();
    dispatch(RemoveFavourite(movie.id));
 }

  return (
    <div
      key={movie.id}
      className="bg-white rounded-lg w-auto h-[500px] shadow-lg cursor-pointer hover:opacity-90 transition duration-100 animate-fadeIn relative"
      onClick={(e) => openModal(e, movie.id)}
    >
      <div className="w-full h-3/4 bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          lazyload="true"
          src={poster}
          alt={movie.title}
          className="object-cover object-top w-full h-full hover:scale-105 transition-all ease-in-out duration-50"
        />
      </div>
      <div className="p-2 w-full">
        <h1 className="font-bold text-md text-slate-800">{movie.title}</h1>
        <p className="font-light text-sm text-slate-700 mt-1">
          {movie.release_date}
        </p>
        <p className="mt-2 inline-flex justify-start items-center">
          <svg
            width="22"
            height="22"
            fill="#fcff2e"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"></path>
          </svg>
          <span className="ml-1 text-xs">{movie.vote_average}</span>
        </p>
        {
          title === "favourites" && <button onClick={RemoveFromFavorite} type="button"  className="bg-transparent border-2 border-red-300 mb-2 float-right hover:bg-red-600 hover:text-white text-red-600 rounded-md text-sm flex items-center px-2 py-1">Remove</button>
        }
      </div>
    </div>
  );
}

export default MovieCard;
