import "../index.css";
import { Link } from "react-router-dom";

export default function Submit() {
    return (
        <section className="bg-[#edf5fd]  flex lg:p-[7.5rem] px-4 py-20 ">
            <div className="flex flex-col gap-8 md:flex-row justify-between w-full">
                <div className="flex flex-col md:w-1/2 lg:w-1/3 p-4 items-start gap-2">
                    <h2 className="font-neue font-normal text-5xl leading-[1.2]">
                        Join us in making <br />
                        technology <br />
                        accessible to all.
                    </h2>
                    <p className="font-neue font-normal text-base text-[#191919] tracking-[0.005em]">
                        We’re looking for world-class designers to join our community. Fill this form to impact the next generation
                        of tech talents with This Tech Thing.
                    </p>
                </div>

                <div className="flex flex-col items-start md:w-1/2 gap-4 p-8 bg-white rounded-[.5rem] shadow-lg shadow-[#0000000F]">
                    <div className="flex flex-col w-full items-start gap-4">
                        <h2 className="font-neue font-normal text-4xl items-center text-[#191919]">Thanks for your interest in becoming a mentor at This Tech Thing!</h2>
                        <p className="font-neue font-normal text-base tracking-[0.005em] text-[#191919]">We will be in touch with you shortly.</p>
                        </div>
                        
                    <div className="button2 pr-2 pb-2  ">
                        <Link to="/">
                            <button className="button text-[#191919] whitespace-nowrap ">
                                  Go to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
