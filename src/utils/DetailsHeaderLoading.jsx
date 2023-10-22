import React from "react";

const DetailsHeaderLoading = () => {
  return (
    <div className="grow flex items-center justify-center min-h-[50vh] p-5">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="w-3 bg-gray-500 rounded-full animate-bounce animation-delay-150"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce animation-delay-300"></div>
      </div>
    </div>
  );
};

export default DetailsHeaderLoading;
