import Header from "../components/Header";
import Hero from "../components/MenteeHero";
import HIW from "../components/HowItWorksMentee";
import MenteeTestimonials from "../components/MenteeTestimonials";
import Cta from "../components/Cta";
import Feature from "../components/Feature";
import Footer from "../components/Footer";


export default function Mentee (){
    return(
        <>
            <Header />
            <Hero />
            <HIW />
            <Feature />
            <MenteeTestimonials/>
            <Cta />
            <Footer />
        </>
    );
}
