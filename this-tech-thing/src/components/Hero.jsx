import "../index.css";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/Hero.webp";

export default function Hero() {
  return (
    <>
      <section className="bg-[#F9F9F9] flex flex-row justify-between items-center lg:pt-[5rem] lg:px-[6.25rem] lg:pb-[7.5rem] px-4 py-20 gap-8 sm:gap-16">
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="flex flex-col lg:p-12 items-start gap-8 ">
            <h2 className="font-semibold font-neue  text-4xl lg:text-5xl w-full  text-[#191919] sm:leading-[1.1]">
              Get mentored by 
              experienced design 
              professionals for free
            </h2>

            <p className="font-normal font-neue text-base  md:text-xl tracking-tight w-full lg:w-[85%] items-center  text-[#191919] leading-[150%]">
              With personalized mentorship from experienced professionals,
              you’ll have everything you need to grow your skills, build your
              portfolio and advance your career in the tech industry.
            </p>
            <div className="flex flex-col items-center isolate ">
              <Link to="/Mentee">
                <button className="button text-[#191919] whitespace-nowrap w-[17rem]">
                  Get started for free{" "}
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              className="w-full"
              src={HeroImage}
              alt="Images of circles"
            />
          </div>
        </div>
      </section>
    </>
  );
}
