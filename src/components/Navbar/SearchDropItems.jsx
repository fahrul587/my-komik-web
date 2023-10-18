import React from "react";
import { AiFillStar } from "react-icons/ai";

const SearchDropItems = ({ komik }) => {

  return (
    <li className="p-2 gap-2 flex select-none border-b hover:bg-slate-200 dark:hover:bg-slate-400 duration-300">
      <div className="flex-initial h-[65px] shrink-0 w-[50px] bg-slate-200">
        <img src={komik.poster} className="w-full h-full" alt="" />
      </div>
      <div className="flex-initial w-full dark:text-white flex flex-col justify-between overflow-hidden">
        <p className="truncate text-sm">{komik.title}</p>
        <p className="text-[13px] text-slate-400 dark:text-slate-300">
          {komik.chapter}
        </p>
        <div className="flex items-center h-4 gap-1 text-[13px] text-slate-400 dark:text-slate-300 leading-none">
          <AiFillStar className="w-3 h-3" fill="gold" />
          <p>{komik.rating}</p>
        </div>
      </div>
    </li>
  );
};

export default SearchDropItems;
