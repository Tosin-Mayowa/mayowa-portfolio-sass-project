import React from 'react';
import Home from './pages/home'
import AboutPage from './pages/about'
import SkillsPage from './pages/skills'
import { Routes, Route } from "react-router-dom";
import ProjectPage from './pages/projects';

import Hire from './pages/hire';
import Contact from './pages/contact';
// import HireMePage from "./pages/hireMe";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
