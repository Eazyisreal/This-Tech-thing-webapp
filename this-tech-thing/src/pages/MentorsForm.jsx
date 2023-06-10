import Header from "../components/Header";
import Form from "../components/MentorshipForm";
import Footer from "../components/Footer";
import "../index.css";


export default function MentorsForm (){
    return (
       <div className='wrapper'>
        <Header />
        <Form />
        <Footer />
       </div>
    );
}
