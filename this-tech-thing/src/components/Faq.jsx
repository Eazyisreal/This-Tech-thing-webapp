import "../index.css";
import Uarrow from "../assets/images/Uarrow.svg";

export default function Faq() {
  return (
    <>
      <section className="flex flex-col justify-center gap-20 py-20 px-4 lg:py-[10rem] lg:px-[7.5] bg-[#7db6ee]">
        <div className="flex gap-2 text-center justify-center">
          <h2 className="font-neue font-normal text-4xl md:text-5xl text-[#000000]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex button2 pr-4 pb-4 flex-col  items-center isolate">
          <div className="bg-[#f9f9f9] rounded-[.8rem] w-full border-t-[1px] justify-between border-[#191919] flex flex-col px-12 ">
            <div className="flex items-center py-[1.5rem] md:gap-80  justify-between w-full border-[#191919]">
              <h3 className="font-neue font-normal text-base tracking-[0.015em] text-[#191919] ">
                What is This Tech Thing, and what is its mission?
              </h3>
              <img className="" src={Uarrow} alt=" " />
            </div>

            <div className="flex items-center py-[1.5rem]  justify-between w-full border-[#191919]">
              <h3 className="font-neue font-normal text-base tracking-[0.015em] text-[#191919] ">
                 Who can apply to be a mentor, and what are the requirements?
              </h3>
              <img className="" src={Uarrow} alt=" " />
            </div>

            <div className="flex items-center py-[1.5rem] justify-between w-full border-[#191919]">
              <h3 className="font-neue font-normal text-base tracking-[0.015em] text-[#191919] ">
                 How are mentors and mentees matched?
              </h3>
              <img className="" src={Uarrow} alt=" " />
            </div>

            <div className="flex items-center py-[1.5rem]  justify-between w-full border-[#191919]">
              <h3 className="font-neue font-normal text-base tracking-[0.015em] text-[#191919] ">
                 How long does the mentorship program last?
              </h3>
              <img className="" src={Uarrow} alt=" " />
            </div>

            <div className="flex items-center py-[1.5rem] justify-between  border-[#191919]">
              <h3 className="font-neue font-normal text-base tracking-[0.015em] text-[#191919] ">
                How do I get in touch with the This Tech Thing team?
              </h3>
              <img className="" src={Uarrow} alt=" " />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="font-neue font-normal text-center text-base tracking-[0.005em] text-[#191919] "> 
                Still have questions that aren't covered? Get in touch with us today.
            </h2>

              <button className="button ">
                Contact Us
              </button>
        </div>
      </section>
    </>
  );
}
