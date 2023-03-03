import React from "react";

function Banner() {

  return (
    <div className="h-80 banner bg-cover bg-center bg-no-repeat rounded-b-lg relative mt-20">
      <div className="absolute inset-x-0 top-20 h-1/2 py-2 pl-4 text-center">
        <h1>
          <span className="text-3xl md:text-5xl font-bold text-white">Welcome to</span>
          <span className="text-3xl md:text-4xl  px-2 rounded-tl-lg rounded-br-lg shadow-md font-bold  text-white">
            Wow Movies
          </span>
        </h1>
        <h4 className="text-sm md:text-lg mt-2 font-normal text-white">
          TV shows and people to discover. Explore now
        </h4>
      </div>
    </div>
  );
}

export default Banner;
