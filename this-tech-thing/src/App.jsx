import "./App.css"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Mentee from "./pages/Mentee";
import Mentor from "./pages/Mentor";
import Blog from "./pages/Blog";
import HowItWorks from "./components/HowItWorks";


export default function AppComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Mentee" element={<Mentee />} />
      <Route path="/Mentor" element={<Mentor />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
  );
}
