import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollButton = () => {
  const toTop = useRef(document.documentElement);
  const [scrollY, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScroll(window.scrollY > 0 ? true : false)
    );
  }, []);

  const scrollTop = () => {
    toTop.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-hidden={scrollY}
      className="p-2 hidden aria-hidden:block shadow-md bg-blue-400/60 fixed bottom-5 right-5"
    >
      <IoIosArrowUp className="w-5 h-5 fill-white" strokeWidth={3.5} />
    </button>
  );
};

export default ScrollButton;
