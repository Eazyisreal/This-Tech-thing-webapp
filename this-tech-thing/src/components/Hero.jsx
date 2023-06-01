import "../index.css";

import HeroImage from "../assets/images/Hero.svg";

export default function Hero() {
  return (
    <>
      <section className="bg-[#F9F9F9] flex flex-row justify-between items-center lg:pt-[5rem] lg:px-[6.25rem] lg:pb-[7.5rem] px-4 py-20 gap-8 sm:gap-16">
        <div className="flex flex-col md:flex-row  justify-between gap-[4rem]">
          <div className="flex flex-col lg:p-12 items-start gap-8 ">
            <h2 className="font-semibold font-neue  text-5xl lg:text-[4.9rem] w-full  text-[#191919] sm:leading-[1.1]">
              Get mentored by <br />
              experienced design <br />
              professionals for free
            </h2>

            <p className="font-normal font-neue text-base  md:text-xl tracking-tight w-full lg:w-[85%] items-center  text-[#191919] leading-[150%]">
              With personalized mentorship from experienced professionals,
              you’ll have everything you need to grow your skills, build your
              portfolio and advance your career in the tech industry.
            </p>
            <div className="flex flex-col items-center isolate ">
              <a href="">
                <button className="button text-[#191919] whitespace-nowrap w-[17rem]">
                  Get started for free{" "}
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              className="w-full h-full  relative"
              src={HeroImage}
              alt="Images of circles"
            />
          </div>
        </div>
      </section>
    </>
  );
}
