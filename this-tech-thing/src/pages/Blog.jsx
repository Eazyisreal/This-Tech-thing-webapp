import Header from "../components/Header";
import Hero from "../components/BlogHero";
import Post from "../components/Post";
import Footer from "../components/Footer";



export default function Blog (){
    return(
       <div className="container mx-auto">
            <Header />
            <Hero />
            <Post />
            <Footer />
       </div>
    );
};
