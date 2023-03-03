import React from "react";
import { Link } from "react-router-dom";
import logo from "../WowMovies.svg";

function Header() {
  return (
    <div className="w-full bg-white p-3 h-16 flex justify-center items-center fixed top-0 z-10">
      <nav className="w-4/5 flex justify-between">
        <a href="/">
          <img src={logo} alt="logo"/>
        </a>
        <div className="text-white font-medium text-sm">
          <ul>
            <li className="hover:bg-slate-800 hover:text-slate-100 bg-slate-100 text-slate-900 border border-slate-200 py-1 px-3 rounded-full hover:shadow-md flex items-center cursor-pointer transition-all duration-50">
            <span className="mr-1">
              <Link to="/favourites">Favorite</Link>
            </span>
            <span>
                <svg
                  width="25"
                  height="25"
                  fill="red"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
