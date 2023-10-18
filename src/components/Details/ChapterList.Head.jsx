import React from "react";
import { Link } from "react-router-dom";

const Head = ({chapter}) => {
  return (
    <div className="p-2 flex gap-2 flex-wrap">
      <Link
        to={chapter[0]?.endpoint}
        className="flex-1 basis-[100px] p-2 hover:bg-blue-500 duration-300 text-center bg-[#0582ca] rounded-md text-white"
      >
        <p className="text-sm">First Chapter</p>
        <span className="font-bold text-lg">{chapter[0]?.name}</span>
      </Link>
      <Link
        to={chapter.at(-1).endpoint}
        className="flex-1 basis-[100px] text-center p-2 hover:bg-blue-500 duration-300 bg-[#0582ca] rounded-md text-white"
      >
        <p className="text-sm">New Chapter</p>
        <span className="font-bold text-lg">{chapter.at(-1).name}</span>
      </Link>
    </div>
  );
};

export default Head;
