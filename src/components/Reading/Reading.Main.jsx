import React from "react";

const PageReader = ({ pageList }) => {
  
  return (
    <div className="sm:w-[80%] mx-auto mt-5">
      {pageList.map((p, i) => (
        <img key={i} src={p} alt={p} loading="lazy" className="w-full" />
      ))}
    </div>
  );
};

export default PageReader;
