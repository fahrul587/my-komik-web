import React, { Suspense, useEffect, useState } from "react";
import SideContentCardsLoading from "../../utils/SideContentCardsLoading";
import { getPopuler } from "../../api";
const SideContentCards = React.lazy(() => import("./SideContentCards"))

const SideContent = () => {
  const [change, setChange] = useState(0);
  const [populer, setpopuler] = useState([]);
  const [populerViews, setpopulerViews] = useState([]);

  useEffect(() => {
    getPopuler().then((response) => setpopuler(response.data.results));
  }, []);

  useEffect(() => {
    if (populer.length !== 0) {
      setpopulerViews(
        change === 0
          ? populer.weekly
          : change === 1
          ? populer.monthly
          : populer.allTime
      );
    }
  }, [change, populer]);

  return (
    <div className="bg-white dark:bg-[#343a40] flex flex-col gap-2">
      <div id="button" className="flex flex-wrap">
        <button
          onClick={() => setChange(0)}
          aria-selected={change === 0 ? true : false}
          className="flex-1 p-2 text-slate-100 text-sm aria-selected:border-b-4 font-medium border-yellow-500 hover:brightness-75 duration-300 bg-indigo-400"
        >
          Weekly
        </button>
        <button
          onClick={() => setChange(1)}
          aria-selected={change === 1 ? true : false}
          className="flex-1 p-2 text-slate-100 text-sm font-medium aria-selected:border-b-4 border-yellow-500 hover:brightness-75 duration-300 bg-red-400"
        >
          Monthly
        </button>
        <button
          onClick={() => setChange(2)}
          aria-selected={change === 2 ? true : false}
          className="flex-1 p-2 text-slate-100 text-sm font-medium aria-selected:border-b-4 border-yellow-500 hover:brightness-75 duration-300 bg-blue-400"
        >
          All Time
        </button>
      </div>
      <div id="popu" className="flex flex-col">
        <ul>
          {populerViews.length !== 0 &&
            populerViews.map((p, i) => (
              <Suspense key={i} fallback={<SideContentCardsLoading />}>
                <SideContentCards komik={p} />
              </Suspense>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SideContent;
