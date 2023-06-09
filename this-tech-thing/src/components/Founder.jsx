import "../index.css";
import Dara from "../assets/images/Dara.webp";
import Todesign from "../assets/images/Todesign.webp";
import SolveProblem from "../assets/images/SolveProblem.svg";
import Design from "../assets/images/Design.svg";

export default function Founder() {
  return (
    <>
      <section className="bg-[#191919] w-full rounded-[2rem] -z-50 flex flex-col-reverse lg:flex-row  pb-12 relative justify-betweem items-center gap-[3rem] lg:gap-[14.2rem] isolate px-8 pt-20  lg:p-[7.5rem] ">
        <img
          className="absolute hidden w-1/3 lg:block top-[5.3%] md:top-[-27.8%] lg:top-[-8%] left-[1.5%] z-0 "
          src={Todesign}
          alt="A picture of a man"
          loading="lazy"
        />



        <div className="flex flex-col-reverse z-50 lg:flex-row w-full justify-between gap-4 lg:gap-20">
          <div className="w-full h-full">
            <img className="w-full " src={Dara} alt="A picture of a man" />
          </div>
          <div className="flex flex-col w-full items-start gap-4 ">
            <div className="flex flex-col items-start gap-4 ">
              <h3 className="font-neue font-normal text-4xl lg:text-5xl leading-[1.3] w-full text-[#f9f9f9]">
                Hi! I’m Dara Sobaloju, the Founder of This Tech Thing
              </h3>
              <p className="font-neue font-normal  text-sm  md:text-base text-[#f9f9f9]  leading-[1.5] ">
                I am a Senior Product Designer with experience designing products
                across fintech,logistics,insurance and web3. Over time, I've
                received numerous DMs from young designer on Twitter and LinkedIn,
                asking me to mentor them. As much as i wanted to help, I realized
                that I couldn't mentor everyone on an individual basis.
              </p>
              <p className="font-neue font-normal text-sm  md:text-base text-[#f9f9f9]  leading-[1.5] ">
                Out of my desire to help young designers, I started This Tech
                Thing by sending out Google forms on twitter, looking for mentors
                and mentees who could be matched based on their skilss and
                experiences.
              </p>

              <p className="font-neue font-normal text-sm  md:text-base text-[#f9f9f9]  leading-[1.5] ">
                The response to the first cohort was overwhelming. I'm proud of
                the impact that This Tech Thing have had on the careers of the
                participants, with many of them reporting increased income and job
                opportunities.
              </p>
              <p className="font-neue font-normal text-sm  md:text-base text-[#f9f9f9]  leading-[1.5] ">
                I believe that mentorship is crucial and I'm committed to
                providing a platform for designers to learn, grow and advance
                their careers in the tech industry.
              </p>
            </div>
          </div>

        </div>
        <img
          className="absolute hidden -z-20 lg:block lg:w-2/3 lg:top-[86.1%] left-[33.5%] "
          src={SolveProblem}
          alt="An image which says to solve problem"
          loading='lazy'
        />

        <img
          className="absolute lg:hidden w-full top-[95.1%]  left-[0%] z-0 "
          src={Design}
          alt="An image which says to design is to solve problem"
          loading='lazy'
        />
      </section>
    </>
  );
}
