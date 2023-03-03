import React from "react";

function Pagination(props) {
  return (
    <div className="flex">
      <button onClick={props.handlePrev} disabled={props.page === 1 ? true : false} className="bg-slate-200 p-2 rounded-md flex items-center text-slate-800 shadow-md hover:bg-slate-300 text-sm font-medium">
        <svg
          width="18"
          height="18"
          fill="#106970"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13Z"></path>
        </svg>
        <span className="ml-1">Prev Page</span>
      </button>
      <button onClick={props.handleNext} className="bg-slate-200 p-2 rounded-md flex items-center text-slate-800 ml-2 shadow-md hover:bg-slate-300  text-sm font-medium">
      <span className="mr-1">Next Page</span>
        <svg
          width="18"
          height="18"
          fill="#106970"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.115 20.23 7.885 22l10-10-10-10-1.77 1.77 8.23 8.23-8.23 8.23Z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
