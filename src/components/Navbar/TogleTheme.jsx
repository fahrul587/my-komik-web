import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const TogleTheme = ({className}) => {
  const [theme, setChange] = useState(sessionStorage.getItem("theme"));
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark")
      sessionStorage.setItem("theme", true)
    } else {
      document.documentElement.classList.remove("dark")
      sessionStorage.clear()
    }
    
  }, [theme]);

  return (
    <div id="theme" className={"w-full sm:w-auto flex justify-end"}>
      <label className="flex items-center relative w-max cursor-pointer select-none">
        <input
          type="checkbox"
          checked={theme == null ? false : theme ? true : false}
          onChange={() => setChange(!theme)}
          onKeyUp={(e) => {if (e.key === "Enter") setChange(!theme)}}
          className="peer bg-white appearance-none cursor-pointer w-10 h-5 rounded-full"
        />
        <span className="absolute left-1">
          <BsFillMoonFill className="w-3 h-3" fill="black" />
        </span>
        <span className="absolute right-1">
          <BsFillSunFill className="w-3 h-3" fill="black" />
        </span>
        <span className="w-4 h-4 peer-checked:translate-x-4 right-5 absolute rounded-full transform transition-transform bg-blue-400 dark:bg-gray-500" />
      </label>
    </div>
  );
};

export default TogleTheme;
