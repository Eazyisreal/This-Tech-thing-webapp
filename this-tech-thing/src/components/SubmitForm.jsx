import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function SubmitForm() {
    return (
        <div>
            <Header />
            <section className="bg-[#edf5fd]  flex lg:p-[7.5rem] px-4 py-20 ">
                <div className="flex flex-col gap-8  w-full">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex gap-2">

                        </div>
                            <div className="flex flex-col w-full items-start gap-4">
                                <h2 className="w-full text-3xl md:text-4xl font-neue font-normal text-[#191919] leading-[1.3] tracking-[0.005em]">
                                    Thank you for your interest in This 
                                     Tech Thing mentorship!
                                </h2>
                                <p className="font-neue font-normal text-base tracking-[0.05em] ">
                                We will be in touch soon! In the meantime, follow us on <a className="underline text-xl font-neue " href="https://twitter.com/ttechthing">Twitter</a> and get
                                ready for what we're building for you. 🔥 🔥
                                </p>
                            </div>
                    </div>
                        <Link to="/">
                            <button className="button4 flex gap-4 text-[#f9f9f9] whitespace-nowrap ">
                                Go to Home
                            </button>
                        </Link>
                </div>
            </section >
            <Footer />
        </div>
    );
}
