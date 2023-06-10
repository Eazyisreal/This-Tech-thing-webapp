import Dara from "../assets/images/DaraT.svg";
import Adejoke from "../assets/images/Adejoke.svg";
import Tehillah from "../assets/images/Tehillah.svg";
import Twitter from '../assets/images/TwitterB.svg';
import Linkedin from '../assets/images/LinkedinB.svg';
import Instagram from '../assets/images/InstagramB.svg';
import "../index.css";

const teamMates = [
    {
        name: "Dara Sobaloju",
        role: "Founder",
        image: Dara,
    },
    {
        name: "Adejoke E",
        role: "Community Manager",
        image: Adejoke,
    },
    {
        name: "Tehillah",
        role: "Creative Designer",
        image: Tehillah,
    },
]


export default function MeetTheTeam() {
    return (
        <section className="flex flex-col gap-12 items-center bg-[#f9f9f9] py-20 px-4 lg:p-[7.5rem] z-20">
            <div className="flex items-start  ">
                <h2 className="font-neue font-normal text-[#191919] text-5xl "> Meet the Team </h2>
            </div>
             <div className="flex flex-col lg:flex-row justify-between w-full gap-12 lg:gap-20 ">
                {teamMates.map((teamMate, index) => (
                    <div key={index} className="flex isolate md:w-full gap-8 pr-4 pb-4  items-start button3"> 
                        <div className="bg-[#F9F9F9] flex flex-col justify-center rounded-[.8rem] border-[2px] border-[#191919] w-full p-[2rem] gap-8">
                            <img src={teamMate.image} loading='lazy' alt="" />
                            <div className="flex flex-col justify-center w-full gap-8">
                                <div className="flex flex-col px-8 items-center gap-8">
                                    <div className="flex justify-center items-center px-4 py-4 gap-2 bg-[#7DB6EE] rounded-[.4rem]">
                                        <h3 className="font-neue whitespace-nowrap font-normal text-[#1a1a1a] tracking-[0.005em] text-base ">
                                            {teamMate.role}
                                        </h3>
                                    </div>

                                    <div className="flex items-start">
                                        <h2 className="font-neue whitespace-nowrap text-4xl font-normal">
                                            {teamMate.name}
                                        </h2>
                                    </div>
                                </div>

                                <div className="flex justify-center items-start gap-8">
                                    <img loading='lazy' src={Twitter} alt="" />
                                    <img loading='lazy' src={Linkedin} alt="" />
                                    <img loading='lazy' src={Instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}

            </div>

        </section>
    );
};