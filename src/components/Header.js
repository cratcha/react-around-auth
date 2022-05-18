import React from "react";
import logo from "../images/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo Practicum" className="header__logo" />
    </header>
  );
}

export default Header;
