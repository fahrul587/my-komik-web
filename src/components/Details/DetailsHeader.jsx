import React from "react";
import Main from "./DetailsHeader.Main";

const DetailsHeader = ({ details }) => {
  return (
    <div
      className="w-full bg-cover relative bg-no-repeat"
      style={{ backgroundImage: `url(${details.poster})` }}
    >
      <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row bg-white/10 backdrop-blur-xl w-full h-full p-2 gap-2">
        <div className="max-w-[170px] mt-5 lg:m-0 flex-initial max-h-full bg-slate-200 shadow-md">
          <img src={details.poster} className="w-full h-full" alt="" />
        </div>
        <Main details={details} />
      </div>
    </div>
  );
};

export default DetailsHeader;
