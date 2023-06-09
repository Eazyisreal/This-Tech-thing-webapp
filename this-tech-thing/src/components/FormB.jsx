import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrow from "../assets/images/Arroq.svg";
import { Link } from "react-router-dom";

const formOptions = [
    {
        question: 'Hello! Tell us about you and we will  get a perfect mentor for you in the next Cohort.First, how long have you been designing?',
        options: [`Haven’t started!`, "1-3 months", "3-12 months", "1-2 years", "2+ years"]
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
                            <h2 className="font-neue font-normal text-sm w-full items-start text-[#191919]">1 of 4</h2>
                        </div>
                        {formOptions.map((formOption, index) => (
                            <div key={index} className="flex flex-col items-start gap-4">
                                <h2 className="md:w-3/5 text-xl font-neue font-normal text-[#191919] tracking-[0.005em]">
                                    {formOption.question}
                                </h2>
                                <form className="flex flex-col w-full md:w-1/4 items-start gap-4">
                                    {formOption.options.map((option, index) => (
                                        <input
                                            key={index}
                                            type="button"
                                            value={option}
                                            className="p-6 bg-white w-full flex items-start border rounded-[.8rem] font-neue text-[#434343] font-normal text-base -tracking-tight border-[#c2c2c2] "
                                        />
                                    ))}

                                </form>
                            </div>
                        ))}
                    </div>
                    <div className=" ">
                        <Link to="/">
                            <button className="button4 flex gap-4 text-[#f9f9f9] whitespace-nowrap ">
                                Next
                                <img src={Arrow} alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
            <Footer />
        </div>
    );
}
