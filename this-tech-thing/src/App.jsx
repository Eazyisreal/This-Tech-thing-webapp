import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Mentorship from "./components/Mentorship.jsx";
import Break from "./components/Break.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Steps from "./components/Steps.jsx";



export default function App (){
    return (
       <>
        <Header />
        <Hero />
        <About />
        <Mentorship/>
        <Break />
        <HowItWorks />
        <Steps />
       </>
    );
}