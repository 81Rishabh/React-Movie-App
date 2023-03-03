import React from "react";
import { NavLink } from "react-router-dom";

function Tabs() {
  return (
    <div className="w-full">
      <ul className="font-semibold text-slate-700 w-full text-sm md:text-md sm:w-full md:w-full lg:w-1/2 flex justify-evenly items-center mx-auto  py-4">
        <li>
          <NavLink
            to="/search"
            className="p-2 hover:bg-slate-100 rounded-md flex items-center rounded-md border-2 border-slate-100"
          >
            {" "}
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="rgb(51 65 85)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"></path>
            </svg>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="p-2 hover:bg-slate-100 rounded-md">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/topRated" className="p-2 hover:bg-slate-100 rounded-md">
            {" "}
            Top Rates
          </NavLink>
        </li>
        <li>
          <NavLink to="/upComing" className="p-2 hover:bg-slate-100 rounded-md">
            Upcoming
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
