import "../index.css";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Founder from "../components/Founder";
import MeetTheTeam from "../components/MeetTheTeam";
import Cat from "../components/Cat";
import Footer from "../components/Footer";





export default function AboutUs (){
    return(
        <div className="container mx-auto">
        <Header />
        <AboutHero />
        <Founder />
        <MeetTheTeam />
        <Cat />
        <Footer />
        </div>
    );
};