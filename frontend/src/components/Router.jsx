import React from "react";
import { Route, Routes } from "react-router-dom";
import AllFireStation from "../pages/AllFireStation";
import FireStationPage from "../pages/FireStationPage";
import CreateUser from "../pages/CreateUser";

import Home from "../pages/Home";
import AllTruck from "../pages/AllTruck";
import Events from "../pages/Events";
import Vehicles from "../pages/Vehicles";
import Login from "../pages/Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/allTruck" element={<AllTruck />} />
      <Route path="/allFireStation" element={<AllFireStation />} />
      <Route path="/fireStationPage" element={<FireStationPage />} />
      <Route path="/createuser" element={<CreateUser />} />
    </Routes>
  );
}
