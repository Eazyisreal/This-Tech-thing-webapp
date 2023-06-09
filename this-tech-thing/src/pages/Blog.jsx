import "../index.css";
import Header from "../components/Header";
import Hero from "../components/BlogHero";
import Post from "../components/Post";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



export default function Blog (){
    return(
       <div className='wrapper'>
            <Header />
            <Hero />
            <Post />
            <Newsletter />
            <Footer />
       </div>
    );
};
