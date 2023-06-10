import Header from "../components/Header";
import Hero from "../components/MentorHero";
import HIW from "../components/HowItWorksMentor";
import Cat from "../components/Cat";
import Secure from "../components/Secure";
import Footer from "../components/Footer";
import "../index.css";



export default function Mentee (){
    return(
        <div className='wrapper'>
            <Header />
            <Hero />
            <HIW />
            <Secure />
            <Cat />
            <Footer />
        </div>
    );
}
