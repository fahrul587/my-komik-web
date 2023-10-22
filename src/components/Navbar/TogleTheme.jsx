import React, { useEffect, useState } from "react";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsMoonFill,
  BsSunFill,
} from "react-icons/bs";

const TogleTheme = (props) => {
  const [theme, setChange] = useState(sessionStorage.getItem("theme"));

  useEffect(() => {
    if (theme === true || theme === "true") {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", true);
      setChange(true);
    } else if (theme === false || theme === "false") {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", false);
      setChange(false);
    } else {
      setChange(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, [theme]);

  return (
    <div
      id="theme"
      className={"w-full sm:w-auto flex justify-end items-center"}
    >
      <label
        htmlFor="toggle"
        className="relative w-[43px] focus-within:ring-2 ring-slate-50 rounded-full flex overflow-hidden cursor-pointer"
      >
        <input
          type="checkbox"
          id="toggle"
          checked={theme ? true : false}
          onChange={() => setChange(!theme)}
          onKeyUp={(e) => {
            if (e.key === "Enter") setChange(!theme);
          }}
          className="peer appearance-none w-full h-6 m-0 bg-blue-300 checked:bg-slate-600 duration-300"
        />
        <span className="absolute w-4 h-4 peer-checked:translate-x-[19px] z-10 shadow-lg duration-300 bg-slate-50 bottom-1 left-1 rounded-full"></span>
        <div className="flex px-0.5 delay-150 -left-[23px] peer-checked:translate-x-[25px] duration-300 items-center justify-between w-16 h-full absolute top-0">
          <BsMoonFill className="w-4 h-4 peer fill-yellow-100" />
          <BsSunFill className="w-4 h-4 fill-yellow-200" />
        </div>
      </label>
    </div>
  );
};

export default TogleTheme;
