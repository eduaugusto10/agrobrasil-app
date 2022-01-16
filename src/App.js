import React from "react";
import "./App.css";
import { AuthProvider } from "./context/auth";

import Router from "./routes";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router />
      </AuthProvider>
    </div>
  );
}

export default App;
