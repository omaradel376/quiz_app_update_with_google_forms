import "./App.css";
import Nav from "./components/navBar/Nav";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="App">
      <Analytics />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
