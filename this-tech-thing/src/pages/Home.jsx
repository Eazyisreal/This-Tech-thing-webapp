import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Mentorship from "../components/Mentorship.jsx";
import Break from "../components/Break.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Steps from "../components/Steps.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Faq from "../components/Faq.jsx";
import Cta from "../components/Cta.jsx";
import Footer from "../components/Footer.jsx";



export default function Home (){
    return (
       <>
        <Header />
        <Hero />
        <About />
        <Mentorship/>
        <Break />
        <HowItWorks />
        <Steps />
        <Testimonials />
        <Faq />
        <Cta />
        <Footer />
       </>
    );
}