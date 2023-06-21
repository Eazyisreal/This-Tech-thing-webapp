import "../index.css";
import Small from "../assets/images/Small.webp";
import MentorshipImage from "../assets/images/Mentorship.webp";

export default function Mentorship() {
  return (
    <>
      <section className="bg-[#f9f9f9]  z-10 flex flex-col-reverse lg:flex-row pt-20 px-8 pb-12 relative justify-betweem items-center gap-8 md:gap-[14.2rem] isolate lg:p-[7.5rem] ">
        <div className="w-full">
          <img className="relative" loading='lazy' src={Small} alt="" />
          <img
            className="absolute lg:top-[22%]  md:top-[25%] w-[75%]  top-[52%] left-[12%] md:w-[35%] md:left-[5.5%]  lg:w-[30%] lg:left-[10%]"
            src={MentorshipImage}
            alt=""
            loading='lazy'
          />
        </div>
        <div className="flex flex-col w-full gap-8">
          <p className="font-neue text-[#191919] text-3xl lg:text-5xl">
            A new kind of design mentorship program built just for you
          </p>
          <p className="font-neue text-base  text-[#191919] tracking-[0.005em]">
            Achieving your career goals can be difficult - but it doesn’t have
            to be. Our mentorship program is designed to help you develop their
            skills and advance your design career through on-on-one mentorship
            and guidance.
          </p>
        </div>
      </section>
    </>
  );
}
