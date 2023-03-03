import React from "react";

function Skeleton() {
  return (
    <div className="bg-white rounded-lg w-auto h-[500px] shadow-lg cursor-pointer hover:opacity-90 transition duration-100">
      <div className="w-full h-3/4 bg-gray-200 rounded-t-lg overflow-hidden animate-pulse"></div>
      <div className="w-9/12 bg-gray-100 mt-2 rounded-md h-5 ml-2 animate-pulse"></div>
      <div className="w-6/12 bg-gray-100 mt-3 rounded-md h-5 ml-2 animate-pulse"></div>
    </div>
  );
}

export default Skeleton;
