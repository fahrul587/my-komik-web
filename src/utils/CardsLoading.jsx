import React from "react";
import GrayImage from "./img/gray-image.jpg"

const CardsLoading = () => {
  return (
    <div
      id="card"
      className="w-full h-full bg-slate-300 animate-pulse rounded-xl overflow-hidden shadow-md"
    >
      <div className="flex flex-col w-full h-full">
        <div id="poster" className="group h-full relative">
          <img
            src={GrayImage}
            className="w-full h-full opacity-0 duration-300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardsLoading;
