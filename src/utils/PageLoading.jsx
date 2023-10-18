import React from "react";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] p-5">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default PageLoading;
