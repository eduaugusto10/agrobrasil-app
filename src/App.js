import React from "react";
import "./App.css";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SendPassword from "./pages/SendPassword";
import NewPassword from "./pages/NewPassword";

function App() {
  return (
    <div className="App">
      <NewPassword/>
    </div>
  );
}

export default App;
