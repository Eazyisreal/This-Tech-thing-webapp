import "../index.css";
import HeroImage from "../assets/images/MenteeHeroImagesm.webp";
import MentorStudentImage from "../assets/images/MentorStudentImage.webp";


export default function AboutHero() {
  return (
    <>
      <section className="bg-[#F9F9F9] flex flex-row z-50 justify-between w-full items-center lg:pt-[5rem] lg:px-[6.25rem] lg:pb-[7.5rem] px-4 py-32 gap-8 sm:gap-16">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[2rem]">
          <div className="flex flex-col lg:p-12 items-start gap-8 ">
            <h2 className="font-semibold font-neue  text-5xl lg:text-[4.5rem] w-full  text-[#191919] sm:leading-[1.1]">
              We are dedicated to making technology accessible to all
            </h2>

            <p className="font-normal font-neue text-base  md:text-xl tracking-tight w-full lg:w-[76%] items-center  text-[#191919] leading-[150%]">
              This Tech Thing is a mentorship program dedicated to making technology  understandable to the general public.
              We provide a community for tech enthusiasts to grow their skills and advance their career.
            </p>
          </div>

          <div>
            <img
              className="w-full hidden lg:block  h-full  relative"
              src={MentorStudentImage}
              alt="Images of circles"
              loading="lazy"

            />
          </div>

          <div>
            <img
              className="w-full lg:hidden h-full  relative"
              src={HeroImage}
              alt="Images of circles"
              loading="lazy"

            />
          </div>

        </div>
      </section>
    </>
  );
}
