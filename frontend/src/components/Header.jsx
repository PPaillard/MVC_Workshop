/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/Logo-Sapeurs-Pompiers.jpg";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="h-20 flex justify-between bg-slate-200">
      <div className="flex justify-between w-20 my-5 ml-3 cursor-pointer">
        <img
          onClick={() => navigate("/")}
          className="h-10 w-18"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
}
