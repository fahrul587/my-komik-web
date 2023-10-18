import { useEffect, useState } from "react";
import { NavbarStyle } from "./Navbar.style";
import NavigationSearch from "./NavigationSearch";
import TogleTheme from "./TogleTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarStyle>
      <NavbarStyle.Title href={"/"} setOpen={setOpen}>
        MY-KOMIK
      </NavbarStyle.Title>
      <NavbarStyle.Wrapper open={open}>
        <NavbarStyle.NavListItem />
        <NavigationSearch />
        <TogleTheme />
      </NavbarStyle.Wrapper>
    </NavbarStyle>
  );
};

export default Navbar
