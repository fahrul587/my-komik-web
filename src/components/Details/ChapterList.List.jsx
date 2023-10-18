import React from "react";
import { Link } from "react-router-dom";

const List = ({chapter}) => {
  return (
    <div
      id="ch-list"
      className="w-full overflow-auto px-2 gap-2 grid grid-cols-1 min-[270px]:grid-cols-2 min-[400px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {chapter?.toReversed().map((c, i) => (
        <Link
          key={i}
          to={c.endpoint}
          className="group bg-slate-100 dark:bg-slate-600 dark:text-slate-50 dark:hover:bg-blue-400 hover:bg-blue-400 duration-200 inline-block p-1 px-3 h-fit"
        >
          <p className="truncate group-hover:text-slate-50 text-sm">{c.name}</p>
          <p className="truncate text-[11px] text-slate-400 group-hover:text-slate-50">
            {c.release_on}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default List;
