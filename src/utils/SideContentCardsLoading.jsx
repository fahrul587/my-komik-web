import React from "react";

const SideContentCardsLoading = () => {
  return (
    <li className="p-2 gap-2 flex border-b-2 last:border-none animate-pulse">
      <div className="flex-initial bg-slate-200 h-[100px] w-[70px]"></div>
      <div className="flex-1 grow dark:text-white flex flex-col justify-between">
        <div className="p-2 bg-slate-200 rounded-full"></div>
        <div className="p-2 bg-slate-200 w-1/2 rounded-full"></div>
        <div className="p-2 bg-slate-200 w-1/3 rounded-full"></div>
      </div>
    </li>
  );
};

export default SideContentCardsLoading;
