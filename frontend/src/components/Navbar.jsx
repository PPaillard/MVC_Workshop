import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <div className="m-2 relative">
          <ul className="h-full absolute flex-col justify-between">
            <li className="cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink to="/events">Events</NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <button type="button" onClick={() => setIsOpen(true)}>
            Open
          </button>
        </div>
      )}
    </div>
  );
}
