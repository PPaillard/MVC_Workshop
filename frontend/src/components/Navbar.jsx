import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="home">Home</li>
        </NavLink>
        <NavLink
          to="/login"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="profil">Profil</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
