import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Mentee from "./pages/Mentee";
import Mentor from "./pages/Mentor";
import Blog from "./pages/Blog";
import MentorsForm from "./pages/MentorsForm";
import MenteesForm from "./pages/MenteesForm";
import FormB from "./components/FormB";
import FormC from "./components/FormC";
import FormD from "./components/FormD";
import FormSubmit from "./pages/FormSubmit";
import SubmitForm from "./components/SubmitForm";
import HowItWorks from "./components/HowItWorks";


export default function AppComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Mentee" element={<Mentee />} />
      <Route path="/Mentor" element={<Mentor />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/MentorsForm" element={<MentorsForm />} />
      <Route path="/MenteesForm" element={<MenteesForm />} />
      <Route path="/FormSubmit" element={<FormSubmit />} />
      <Route path="/SubmitForm" element={<SubmitForm />} />
      <Route path="/FormB" element={<FormB />} />
      <Route path="/FormC" element={<FormC />} />
      <Route path="/FormD" element={<FormD />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
    </Routes>
  );
}
