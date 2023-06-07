import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Mentorship from "../components/Mentorship";
import Break from "../components/Break";
import HowItWorks from "../components/HowItWorks";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";




export default function Home (){
    return (
       <div className="container mx-auto">
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
       </div>
    );
}