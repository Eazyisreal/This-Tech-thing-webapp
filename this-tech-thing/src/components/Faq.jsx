import React, { useState } from "react";
import "../index.css";
import Uarrow from "../assets/images/Uarrow.svg";
import Darrow from "../assets/images/Darrow.svg";


export default function Faq() {
  const faqData = [
    {
      question: "What is This Tech Thing, and what is its mission?",
      answer: "This Tech Thing is a mentorship program dedicated to making technology available for the general public .Our mission is to provide a inclusive platform for individuals to learn and grow.",
    },
    {
      question: "Who can apply to be a mentor, and what are the requirements?",
      answer: "This Tech Thing is a mentorship program dedicated to making technology available for the general public. Our mission is to provide a inclusive platform for individuals to learn and grow.",
    },
    {
      question: "How are mentors and mentees matched?",
      answer: "This Tech Thing is a mentorship program dedicated to making technology available for the general public. Our mission is to provide a inclusive platform for individuals to learn and grow.",
    },
    {
      question: "How long does the mentorship program last?",
      answer: "The duration of the mentorship program is typically...",
    },
    {
      question: "How do I get in touch with the This Tech Thing team?",
      answer: "If you have any questions or need assistance, you can...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="flex flex-col  w-full justify-center gap-20 py-20 px-4 lg:py-[10rem] lg:px-[7.5] bg-[#7db6ee]">
      <div className="flex gap-2 text-center justify-center">
        <h2 className="font-neue font-normal text-4xl md:text-5xl text-[#000000]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex button2  pr-2 pb-2 flex-col items-center isolate">
        <div className="bg-[#f9f9f9] rounded-[.8rem] w-full border-t-[1px] justify-between border-[#191919] flex flex-col px-12 ">
          {faqData.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="flex items-center py-[1.5rem] md:gap-80 justify-between w-full border-[#191919]"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="font-neue font-normal text-base tracking-[0.015em] text-[#191919]">
                  {item.question}
                </h3>
                <img
                  className=""
                  src={index === activeIndex ? Darrow : Uarrow}
                  alt=""
                />
              </div>
              {activeIndex === index && (
                <div className="py-[1.5rem] lg:w-3/4 border-[#191919]">
                  <p className="font-neue font-normal text-base tracking-[0.015em] text-[#191919]">
                    {item.answer} <br/>
                  </p>
                </div>
              )}
              <hr className="border-[#191919]" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-neue font-normal text-center text-base tracking-[0.005em] text-[#191919]">
          Still have questions that aren't covered? Get in touch with us
          today.
        </h2>

        <div className="button2 pr-2 pb-2">
          <a href="">
            <button className="button">Contact Us</button>
          </a>
        </div>
      </div>
    </section>
  );
}
