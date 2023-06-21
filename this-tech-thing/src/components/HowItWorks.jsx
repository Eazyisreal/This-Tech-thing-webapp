import "../index.css";

import Anchor from "../assets/images/Anchor.webp";
import Book from "../assets/images/Book.webp";
import Light from "../assets/images/Light.webp";
import Mentee from "../assets/images/Mentee.webp";
import Menteeb from "../assets/images/Menteeb.webp";
import Mentor from "../assets/images/Mentor.webp";
import Mentorw from "../assets/images/Mentorw.webp";
import Schedule from "../assets/images/Schedule.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HowItWorks() {
  const [activeSection, setActiveSection] = useState("mentee");

  const handleMentor = () => {
    setActiveSection("mentor");
  };

  const handleMentee = () => {
    setActiveSection("mentee");
  };

  return (
    <>
      <section id="how-it-works" className="bg-[#f9f9f9] flex flex-col justify-center gap-12 lg:px-[7.5rem] px-4 py-20">
        <div className="flex flex-col items-start gap-[4.5rem]">
          <div className="flex flex-col w-full justify-between  md:flex-row gap-12">
            <h3 className="font-neue font-normal text-5xl text-[#191919]">
              How it works?
            </h3>
            <div className="flex items-center gap-12">
              <button
                className={`flex justify-center font-sans text-base items-center gap-2 px-[1rem] py-[.8rem] rounded-[8px] ${
                  activeSection === "mentee"
                    ? "bg-[#1a1b1f] text-[#f9f9f9]"
                    : "bg-[#f4f4f4] text-[#191919]"
                }`}
                onClick={handleMentee}
              >
                <img
                  src={activeSection === "mentee" ? Mentee : Menteeb}
                  alt="Mentee"
                  loading='lazy'
                />
                Mentee
              </button>

              <button
                className={`flex justify-center font-sans text-base items-center gap-2 py-[.8rem] px-[1rem] rounded-[8px] ${
                  activeSection === "mentor"
                    ? "bg-[#1a1b1f] text-[#f9f9f9]"
                    : "bg-[#f4f4f4] text-[#191919]"
                }`}
                onClick={handleMentor}
              >
                <img
                  src={activeSection === "mentor" ? Mentorw : Mentor}
                  alt="Mentor"
                  loading='lazy'
                />
                Mentor
              </button>
            </div>
          </div>

          {activeSection === "mentee" && (
            <div className="flex flex-col w-full md:flex-row gap-8">
              <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#BEDAF7] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
                <img className=" w-[4rem]" loading='lazy' src={Book} alt="" />
                <div className="flex flex-col gap-8">
                  <h2 className="font-neue font-normal text-[1.5rem] whitespace-nowrap text-[#191919]">
                    Apply to become a mentee
                  </h2>
                  <p className="font-neue font-normal text-opacity-50 text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                    Whether you’re just starting or looking to grow, if you have
                    designed at least one screen on Figma, you can apply! Simply
                    fill out our application form to get started.
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#EDF5FD] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
                <img className=" w-[4rem]" loading='lazy' src={Anchor} alt="" />
                <div className="flex flex-col gap-8">
                  <h2 className="font-neue font-normal text-[1.5rem] whitespace-nowrap text-[#191919]"> 
                    Get matched with a mentor
                  </h2>
                  <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                    Once you've applied, our team will carefully review your
                    application and pair you with a mentor whose skills and
                    experience align with your goals and aspirations
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#cceedf] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
                <img className=" w-[4rem]" loading='lazy' src={Light} alt="" />
                <div className="flex flex-col gap-8">
                  <h2 className="font-neue font-normal text-[1.5rem]  whitespace-nowrap text-[#191919]">
                    Build your skills and career
                  </h2>
                  <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                    With the support of your mentor, you'll have access to
                    feedback, advice, and resources to help you achieve your
                    goals and advance your career in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === "mentor" && (
            <div className="flex flex-col w-full md:flex-row gap-8">
              <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#66cca0] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
                <img className=" w-[4rem]" loading='lazy' src={Book} alt="" />
                <div className="flex flex-col gap-8">
                  <h2 className="font-neue font-normal text-[1.5rem] whitespace-nowrap text-[#191919]">
                    Apply to become a mentor
                  </h2>
                  <p className="font-neue font-normal text-opacity-50 text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                    If you're a designer that has worked on at least one live
                    project and you’re looking to give back to the community,
                    simply fill out our application form to get started.
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#EDF5FD] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
                <img className="w-[4rem]" loading='lazy' src={Anchor} alt="" />
                <div className="flex flex-col gap-8">
                  <h2 className="font-neue font-normal text-[1.5rem] whitespace-nowrap text-[#191919]">
                    Get matched with a mentee
                  </h2>
                  <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                    Once you've applied, our team will carefully review your
                    application and pair you with a mentee who can benefit from
                    your knowledge and experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full py-[3rem] px-[2rem] bg-[#cceedf] gap-[1.7rem] border-[#191919] border-[1.5px] rounded-[.8rem]">
                <img className=" w-[4rem]" loading='lazy' src={Schedule} alt="" />
                <div className="flex flex-col gap-8">
                  <h2 className="font-neue font-normal text-[1.5rem] whitespace-nowrap text-[#191919]">
                    Schedule your meetings
                  </h2>
                  <p className="font-neue font-normal text-base leading-[1.8] lg:leading-[2] tracking-[0.005em]">
                    You will decide on the meeting times and platforms that work
                    best for both you and your mentees. You'll provide feedback,
                    advice, and resources to help your mentees.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === "mentee" && (
            <div className="flex button2 self-center pr-2 pb-2  justify-center items-center">
              <Link to="/Mentee">
                <button className="button whitespace-nowrap">
                  Apply Now to Join our Next Cohort
                </button>
              </Link>
            </div>
          )}

          {activeSection === "mentor" && (
            <div className="flex button2 self-center pr-2 pb-2 justify-center items-center">
              <Link to="/Mentor">
              <button className="button whitespace-nowrap">
                Become a Mentor
              </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

