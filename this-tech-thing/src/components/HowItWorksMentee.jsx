import "../index.css";
import Book from "../assets/images/Book.svg";
import Anchor from "../assets/images/Anchor.svg";
import Light from "../assets/images/Light.svg";

export default function HowItWorksMentee() {
  return (
    <section className="bg-[#f9f9f9] flex flex-col justify-center gap-12 lg:px-[7.5rem] px-4 py-20">
      <div className="flex flex-col w-full lg:items-center justify-between gap-12">
        <h3 className="font-neue hidden lg:block font-normal text-center leading-[1.2] text-5xl text-[#191919]">
          Our mentorship program pairs you <br />
          with experienced mentors
        </h3>
        <span className="font-neue font-normal lg:hidden text-5xl text-[#191919]">
          How It works?
        </span>
      </div>
      <div className="flex flex-col w-full md:flex-row gap-8">
        <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#BEDAF7] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
          <img className="lg:w-[6rem] w-[4rem]" src={Book} alt="" />
          <div className="flex flex-col gap-8">
            <h2 className="font-neue font-normal text-[1.8rem] text-[#191919]">
              Apply to become a mentee
            </h2>
            <p className="font-neue font-normal text-opacity-50 text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
              Whether you’re just starting or looking to grow, if you have
              designed at least one screen on Figma, you can apply! Simply fill
              out our application form to get started.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#EDF5FD] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
          <img className="lg:w-[6rem] w-[4rem]" src={Anchor} alt="" />
          <div className="flex flex-col gap-8">
            <h2 className="font-neue font-normal text-[1.8rem] text-[#191919]">
              Get matched with a mentor
            </h2>
            <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
              Once you've applied, our team will carefully review your
              application and pair you with a mentor whose skills and experience
              align with your goals and aspirations
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#cceedf] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
          <img className="lg:w-[6rem] w-[4rem]" src={Light} alt="" />
          <div className="flex flex-col gap-8">
            <h2 className="font-neue font-normal text-[1.8rem] text-[#191919]">
              Build your skills and career
            </h2>
            <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
              With the support of your mentor, you'll have access to feedback,
              advice, and resources to help you achieve your goals and advance
              your career in the tech industry.
            </p>
          </div>
        </div>
      </div>

      <div className="flex button2 self-center pr-2 pb-2  justify-center items-center">
        <a href="">
          <button className="button whitespace-nowrap">
            Apply Now to Join our Next Cohort
          </button>
        </a>
      </div>
    </section>
  );
}
