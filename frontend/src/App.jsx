import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Router from "./components/Router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <CurrentUserContextProvider>
        <Router />
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
