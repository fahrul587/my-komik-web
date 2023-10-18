import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideContentCards = ({ komik }) => {
  return (
    <li className="p-2 gap-2 flex border-b-2 border-slate-200 dark:border-gray-800 last:border-none">
      <div className="flex-initial max-h-[100px] w-[70px]">
        <Link to={"/komik/" + komik.endpoint}>
          <img src={komik.poster} className="w-full max-h-full" alt="" />
        </Link>
      </div>
      <div className="flex-1 grow dark:text-white">
        <Link to={"/komik/" + komik.endpoint}>
          <p className="line-clamp-2 text-sm">{komik.title}</p>
        </Link>
        <ul className="text-[13px] text-blue-300">
          {komik.genres.map((g) => (
            <li key={g.name} className="inline hover:underline after:content-[','] last:after:content-[''] after:w-2 after:inline-block">
              <Link to={g.link}>{g.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center h-4 gap-1 text-[13px] text-slate-300 leading-none">
          <AiFillStar className="w-3 h-3" fill="gold" />
          <p>{komik.rating}</p>
        </div>
      </div>
    </li>
  );
};

export default SideContentCards;
