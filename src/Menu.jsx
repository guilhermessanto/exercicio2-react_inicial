import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Menu = () => {
  return (
    <>
      <header>
        <NavLink exact to="/">
          Inicio
        </NavLink>
      </header>
    </>
  );
};

export default Menu;
