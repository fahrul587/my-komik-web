import { Link, NavLink } from "react-router-dom";
import { List } from "./Nav.List";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";

export const NavbarStyle = ({ children, classname }) => {
  return (
    <nav className="bg-[#0582ca] dark:bg-[#343a40] shadow-md rounded-b-md">
      <div
        className={`container mx-auto p-2 flex items-center gap-3 flex-wrap justify-between ${classname}`}
      >
        {children}
      </div>
    </nav>
  );
};

export const Title = ({ children, href, setOpen }) => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setOpen(menu);
  }, [menu]);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 600 && setMenu(false)
    );
  }, []);
  return (
    <div className="grow w-full sm:w-auto flex justify-between items-center">
      <Link to={href}>
        <div className="text-white font-black font-mono text-lg">
          {children}
        </div>
      </Link>

      <button className="block sm:hidden" onClick={() => setMenu(!menu)}>
        {!menu ? (
          <RxHamburgerMenu className="w-6 h-6" color="white" />
        ) : (
          <AiOutlineClose className="w-6 h-6" color="white" />
        )}
      </button>
    </div>
  );
};

export const Wrapper = ({ children, open }) => {
  return (
    <div
      aria-hidden={open}
      className="hidden sm:flex aria-hidden:flex items-center flex-1 sm:flex-none flex-wrap gap-x-11 gap-y-3"
    >
      {children}
    </div>
  );
};

export const NavListItem = () => {
  return (
    <div className={"flex w-full sm:w-auto gap-4 items-center font-medium"}>
      {List.map((nav) => (
        <NavLink
          key={nav.name}
          to={nav.path}
          className="text-slate-200 text-sm aria-[current]:text-white aria-[current]:animate-bounce"
        >
          {nav.name}
        </NavLink>
      ))}
    </div>
  );
};

NavbarStyle.Wrapper = Wrapper;
NavbarStyle.Title = Title;
NavbarStyle.NavListItem = NavListItem;
