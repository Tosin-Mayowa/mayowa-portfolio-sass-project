import React from 'react';
import Home from './pages/home'
import AboutPage from './pages/about'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
