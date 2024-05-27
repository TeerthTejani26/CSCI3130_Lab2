import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <nav>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/about">About</Link>
        </h3>
        <h3>
          <Link to="/contact">Contact</Link>
        </h3>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
