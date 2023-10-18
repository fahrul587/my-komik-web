import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DataNotFound from "../../utils/DataNotFound";

const Sysnopsis = ({ sysnopsis }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      aria-expanded={isOpen}
      className="group bg-white dark:bg-[#343a40] h-[50px] w-full aria-expanded:h-auto shadow-md overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[50px] flex items-center shadow-md hover:bg-blue-400/10 duration-300 justify-between p-2 text-slate-600 dark:text-slate-50 font-medium"
      >
        Sinopsis
        <span className="p-2 duration-300 transform transition ease-in-out group-aria-expanded:rotate-180">
          <IoIosArrowDown className="w-5 h-5" />
        </span>
      </button>
      <div className="p-2 text-slate-700 text-justify text-sm bg-slate-50 dark:text-slate-200 dark:bg-[#3d434a]">
        {!sysnopsis ? <DataNotFound /> : <p>{sysnopsis}</p>}
      </div>
    </div>
  );
};

export default Sysnopsis;
