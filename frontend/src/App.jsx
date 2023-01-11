import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
