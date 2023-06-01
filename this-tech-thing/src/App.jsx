import "./App.css"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./components/HowItWorks";


export default function AppComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/how-it-works" element={<HowItWorks/>} />
    </Routes>
  );
}
