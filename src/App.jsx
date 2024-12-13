import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import EventLanding from "./pages/Event/EventLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
        <Route path="/ruralbankingindia" element={<EventLanding />} />
        <Route path="/bankvsmicrofinance" element={<EventLanding />} />

        <Route path="/futurebaning&ai" element={<EventLanding />} />

        <Route path="/futurebaning&ai" element={<EventLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
