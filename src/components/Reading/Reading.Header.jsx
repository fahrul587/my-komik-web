import React from "react";
import { Link } from "react-router-dom";

const Header = ({chapter, endpoint}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="font-bold text-2xl text-slate-600 dark:text-slate-100 text-center">
        {chapter.page_title}
      </h1>
      <Link to={"/komik/"+ endpoint} className="text-slate-600 dark:text-slate-100 text-sm text-center">
        All
        <span className="text-blue-400 inline-block pl-2 hover:underline duration-300">{chapter.title}</span>
      </Link>
    </div>
  );
};

export default Header;
