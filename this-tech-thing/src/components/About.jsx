import "../index.css";
import Dara from "../assets/images/Dara.svg";
import Design from "../assets/images/Design.svg";
import Arrow from "../assets/images/Arrow.svg";

export default function About() {
  return (
    <>
      <section className="bg-[#191919] rounded-[2rem] z-10 flex flex-col-reverse md:flex-row  pb-12 relative justify-betweem items-center gap-[3rem] md:gap-[14.2rem] isolate px-8 pt-20 md:p-[4.5rem] lg:p-[7.5rem] ">
        <div className="w-full z-50">
          <img className="" src={Dara} alt="A picture of a man" />
        </div>

        <div className="flex flex-col items-start gap-4 ">
          <div className="flex flex-col items-start gap-8 ">
            <h3 className="font-neue font-normal text-4xl lg:text-5xl leading-[1.3] w-full text-[#f9f9f9]">
              We are dedicated to making technology accessible to all
            </h3>
            <p className="font-neue font-normal text-opacity-50 text-base  md:text-xl text-[#f9f9f9]  leading-[1.5] ">
              Our mission is to provide a supportive and inclusive platform for
              individuals to learn, grow and advance their careers in the tech
              industry.
            </p>
          </div>
          <div className="flex items-center flex-row gap-4">
            <button className="flex  font-neue text-base md:text-xl items-center font-normal gap-4 lg:gap-8 text-[#7DB6EE] z-20 tracking-[0.015em] ">
              {" "}
              Learn More <img className="" src={Arrow} alt="" />{" "}
            </button>
          </div>
        </div>
        <img
          className="absolute w-full top-[95.3%] md:top-[82.2%] lg:top-[85.1%] left-[0%] z-0 "
          src={Design}
          alt="A picture of a man"
        />
      </section>
    </>
  );
}
