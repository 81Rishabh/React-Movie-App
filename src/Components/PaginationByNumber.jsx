import React from "react";

function PaginationByNumber({ totalMembers, MemberPerPage, setcurrentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMembers / MemberPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePage = (e, page) => {
      const pageButtons = document.querySelectorAll(".page_number_btn");
      const currentBtn = e.target;
    

    // adding classList
    if (!currentBtn.classList.contains("page-active")) {
        currentBtn.classList.add("page-active");
    } else {
       currentBtn.classList.remove("page-active");
    }
    
    Array.from(pageButtons)
      .filter((btn) => btn !== currentBtn)
      .forEach((btn) => {
        if (btn.classList.contains("page-active")) {
          btn.classList.remove("page-active");
          btn.classList.add("not-active");
        } else {
          btn.classList.add("not-active");
        }
    });

    setcurrentPage(page);
  };

  return (
    <div>
      <ul className="flex w-1/2 mx-auto justify-center mt-3 ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={(e) => changePage(e, number)}
            id={number}
            className={`${
              number === 1 && "bg-slate-700 text-white"
            } page_number_btn text-slate-800  cursor-pointer hover:bg-slate-700 hover:text-white border border-slate-300 bg-slate-100 w-10 h-10 flex justify-center items-center font-medium rounded-md mx-1`}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginationByNumber;
