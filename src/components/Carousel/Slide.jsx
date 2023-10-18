import React from "react";

const Slide = ({recom}) => {
    
  return (
    <>
      <img src={recom.poster} className="object-cover w-full max-h-[200px]" alt="" />
      <div className="w-full h-full absolute flex gap-2 top-0 bg-white/10 backdrop-blur-xl p-2">
        <div className="w-full relative flex-initial max-w-[130px] h-full bg-black/10">
          <img src={recom.poster} className="h-full w-full" alt="" />
          <div className={`absolute max-w-full px-1 shadow-sm font-medium text-white rounded-bl-md select-none ${ recom.type == "Manhwa" ? "bg-blue-500" : recom.type == "Manga" ? "bg-red-500" : "bg-indigo-500"} top-0 right-0`}>
            <p className="truncate text-sm">{recom.type}</p>
          </div>
        </div>
        <div className="w-full grow h-full bg-black/10 p-1 overflow-hidden">
          <div className="text-white select-none">
            <p className="text-sm uppercase font-medium line-clamp-2">
              {recom.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
