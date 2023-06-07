import "../index.css";
import Book from "../assets/images/Book.svg";
import Anchor from "../assets/images/Anchor.svg";
import Schedule from "../assets/images/Schedule.svg";

export default function HowItWorksMentor() {
  return (
    <section className="bg-[#f9f9f9] flex flex-col justify-center gap-12 lg:px-[7.5rem] px-4 py-20">
      <div className="flex flex-col w-full lg:items-center justify-between gap-12">
        <h3 className="font-neue hidden lg:block font-normal text-center leading-[1.2] text-5xl text-[#191919]">
            Our mentorship program is <br /> 
            designed to be fun and flexible.
        </h3>
        <span className="font-neue font-normal lg:hidden text-5xl text-[#191919]">
          How It works?
        </span>
      </div>
      <div className="flex flex-col w-full md:flex-row gap-8">
        <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#66cca0] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
          <img className="lg:w-[6rem] w-[4rem]" src={Book} alt="" />
          <div className="flex flex-col gap-8">
            <h2 className="font-neue font-normal text-[1.8rem] text-[#191919]">
              Apply to become a mentor
            </h2>
            <p className="font-neue font-normal text-opacity-50 text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                 If you're a designer that has worked on at least one live project and you’re looking to 
                 give back to the community, simply fill out our application form to get started.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#f1f1f1] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
          <img className="lg:w-[6rem] w-[4rem]" src={Anchor} alt="" />
          <div className="flex flex-col gap-8">
            <h2 className="font-neue font-normal text-[1.8rem] text-[#191919]">
              Get matched with a ment
            </h2>
            <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                Once you've applied, our team will carefully review your application and pair you with 
                a mentee whose your goals and aspirations align with your skills and experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#7db6ee] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
          <img className="lg:w-[6rem] w-[4rem]" src={Schedule} alt="" />
          <div className="flex flex-col gap-8">
            <h2 className="font-neue font-normal text-[1.8rem] text-[#191919]">
              Schedule your meetings
            </h2>
            <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                Once you've applied, our team will carefully review your application and pair you with a
                mentee whose your goals and aspirations align with your skills and experience.
            </p>
          </div>
        </div>
      </div>

      <div className="flex button2 self-center pr-2 pb-2  justify-center items-center">
        <a href="">
          <button className="button whitespace-nowrap">
            Become a Mentor
          </button>
        </a>
      </div>
    </section>
  );
}
