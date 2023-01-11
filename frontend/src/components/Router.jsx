import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Vehicles from "../pages/Vehicles";
import Login from "../pages/Login";
import TruckList from "./TruckList";
import FirestationList from "./FirestationList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/login" element={<Login />} />
      <Route path="/trucklist" element={<TruckList />} />
      <Route path="/firestationlist" element={<FirestationList />} />
    </Routes>
  );
}
