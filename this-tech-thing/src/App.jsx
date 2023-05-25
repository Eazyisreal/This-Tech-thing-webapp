import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Mentorship from "./components/Mentorship.jsx";



export default function App (){
    return (
       <>
        <Header />
        <Hero />
        <About />
        <Mentorship/>
       </>
    );
}