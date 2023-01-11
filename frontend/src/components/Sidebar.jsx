import React from "react";
import { NavLink } from "react-router-dom";

import FireEstinguisher from "../assets/FireExtinguisher.png";
import House from "../assets/House.png";
import Camion from "../assets/Camper.png";
import Man from "../assets/Vector.png";
import Off from "../assets/Vectoroff.png";
import Firefighter from "../assets/Fire_Fighter.png";

export default function Sidebar() {
  return (
    <div className="w-[12vh] h-[100%] border-r border-red-600 flex-col flex items-center overflow-hidden absolute top-0 bg-white z-20">
      <div className="w-[12vh] border-b border-red-600 h-[12vh] flex justify-center items-center">
        <NavLink to="/">
          <img alt="fire" className="h-[10vh] max-w-[10vh]" src={Firefighter} />
        </NavLink>
      </div>
      <div className=" flex flex-col justify-around items-center h-[50vh] mt-5">
        <NavLink to="/login">
          <img alt="fire" className="h-12" src={FireEstinguisher} />
        </NavLink>
        <NavLink to="/login">
          <img alt="fire" className="h-12" src={House} />
        </NavLink>
        <NavLink to="/login">
          <img alt="fire" className="h-12" src={Camion} />
        </NavLink>
        <NavLink to="/login">
          <img alt="fire" className="h-8" src={Man} />
        </NavLink>
      </div>
      <div className="flex flex-col justify-end h-[35vh]">
        <NavLink to="/login">
          <img alt="fire" className="h-12 m-4" src={Off} />
        </NavLink>
      </div>
    </div>
  );
}
