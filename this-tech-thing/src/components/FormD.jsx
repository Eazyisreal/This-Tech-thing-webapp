import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const formOptions = [
    {
        question: 'Awesome! What’s your email address?',
        placeholder: 'name@gmail.com',
    }
]

export default function FormB() {
    return (
        <div>
            <Header />
            <section className="bg-[#edf5fd]  flex lg:p-[7.5rem] px-4 py-20 ">
                <div className="flex flex-col gap-8  w-full">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex gap-2">
                            <img src="" alt="" />
                            <h2 className="font-neue font-normal text-sm w-full items-start text-[#191919]">4 of 4</h2>
                        </div>
                        {formOptions.map((formOption, index) => (
                            <div key={index} className="flex flex-col w-full items-start gap-4">
                                <h2 className="w-full text-xl font-neue font-normal text-[#191919] tracking-[0.005em]">
                                    {formOption.question}
                                </h2>
                                <form className="flex flex-col w-full md:w-1/4 items-start gap-4">
                                        <input
                                            key={index}
                                            type="email"
                                            placeholder={formOption.placeholder}
                                            className="p-6 bg-white w-full flex items-start border rounded-[.8rem] font-neue text-[#434343] font-normal text-base -tracking-tight border-[#c2c2c2] "
                                        />
                                </form>
                            </div>
                        ))}
                    </div>
                    <div className=" ">
                        <Link to="/SubmitForm">
                            <button className="button4 flex gap-4 text-[#f9f9f9] whitespace-nowrap ">
                                submit
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
            <Footer />
        </div>
    );
}
