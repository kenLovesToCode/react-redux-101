import React from "react";
//================== old store start =================
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}
export default App;
