import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFavourite,
  RemoveFavourite,
  setOpen,
} from "../features/Movies/movieSlice";

function Modal() {
  const [toggle, setToggle] = useState(false);
  const { open, currentMovie, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const AddToFavorite = () => {
    dispatch(setFavourite(currentMovie));
    setToggle(true);
  };

  const RemoveFromFavorite = () => {
    dispatch(RemoveFavourite(currentMovie.id));
    setToggle(false);
  };

  const handleClose = () => {
    dispatch(setOpen(false));
    setToggle(false);
  };

  return (
    <React.Fragment>
      {loading && "loading..."}
      <div
        className={`${
          !open ? "-top-full" : "top-5 md:top-20"
        } transition-all ease-in-out duration-200 w-11/12 overflow-y-auto md:overflow-y-hidden  md:w-4/5 bg-white h-[50rem] md:h-[40rem] shadow-lg fixed left-1/2 -translate-x-1/2  z-30 rounded-lg bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${
            currentMovie && currentMovie.backdrop_path
          })`,
        }}
      >
        {!loading && currentMovie && (
          <React.Fragment>
            {/* clsoe icon */}
            <span
              className="absolute top-5 cursor-pointer hover:opacity-80 right-5 z-20"
              onClick={handleClose}
            >
              <svg
                width="25"
                height="25"
                fill="#fff"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
              </svg>
            </span>
            {/* clsoe icon */}
            <div className="content bg-black absolute w-full h-full opacity-60 -z-10 rounded-lg"></div>

            {/* details */}
            <div className="flex items-start md:items-center md:items-center h-full">
              <div className="grid grid-cols-1 md:grid-cols-3  p-4 h-[80%] w-full">
                <div className="left h-full flex justify-evenly flex-col items-center">
                  <div className="w-60 h-auto md:w-72 overflow-hidden rounded-md border-transprent shadow-md">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        currentMovie.poster_path
                      }
                      alt={currentMovie.title}
                      className="object-cover object-top hover:scale-105 hover:opacity-80 transition-all ease-in-out duration-50"
                    />
                  </div>
                  {toggle ? (
                    <button
                      type="button"
                      className="bg-transparent border-2 border-red-700 hover:bg-red-800 rounded-md mt-3 flex items-center p-1"
                      onClick={RemoveFromFavorite}
                    >
                      <span className="text-red-300 text-xs">
                        Remove From Favorite
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-transparent border border-slate-700 hover:bg-gray-900 rounded-md mt-3 flex items-center p-1"
                      onClick={AddToFavorite}
                    >
                      <svg
                        width="25"
                        height="25"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-slate-100 hover:stroke-slate-200"
                      >
                        <path
                          d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-slate-200 text-xs">
                        Make as Favouite
                      </span>
                    </button>
                  )}
                </div>
                <div className="right col-span-2 p-2 md:pl-5 lg:pl-0">
                  <h1 className="text-2xl md:text-3xl text-slate-100 font-extrabold">
                    {currentMovie.title}
                  </h1>

                  <ul className="text-slate-300 flex w-auto mt-2">
                    <p className="border px-1 mr-2">
                      {currentMovie.original_language}
                    </p>
                    {currentMovie.genres.length > 0 &&
                      currentMovie.genres.map(({ name }, idx) => (
                        <li className="ml-1" key={idx}>
                          {name},
                        </li>
                      ))}
                  </ul>
                  {/* rating*/}
                  <div className="rating inline-flex items-center mt-4">
                    <svg
                      width="20"
                      height="20"
                      fill="#fcff2e"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"></path>
                    </svg>
                    <span className="ml-1 text-xs text-slate-200">
                      {currentMovie.vote_average.toFixed(1)}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h1 className="text-lg md:text-xl text-slate-200 font-semibold">
                      Overview
                    </h1>
                    <p className="text-slate-200 text-xs md:text-lg">
                      {currentMovie.overview}
                    </p>
                    <p className="text-slate-200 italic font-semibold mt-2">
                      '{currentMovie.tagline}'
                    </p>

                    {/* spoken language*/}
                    <div className="mt-3">
                      {currentMovie.spoken_languages.map(
                        (lan, index) =>
                          lan.name !== "" && (
                            <span
                              className="text-cyan-200 p-2 mx-1 text-sm bg-gray-800 rounded-md"
                              key={index}
                            >
                              {lan.name}
                            </span>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
      <div
        className={`${
          !open ? "hidden" : "block"
        } backdrop bg-slate-800  w-full h-screen fixed top-0 opacity-90  transition duration-200 z-20 cursor-pointer`}
        onClick={handleClose}
      />
    </React.Fragment>
  );
}

export default Modal;
