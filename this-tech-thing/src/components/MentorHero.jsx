import "../index.css";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/MentorHeroImage.svg";
import Menteesm from "../assets/images/MentorImagesm.svg";



export default function MenteeHero() {
  return (
    <>
      <section className="bg-[#F9F9F9] flex flex-row justify-between items-center lg:pt-[5rem] lg:px-[6.25rem] lg:pb-[7.5rem] px-4 py-20 gap-8 sm:gap-16">
        <div className="flex flex-col md:flex-row  justify-between gap-[2rem]">
          <div className="flex flex-col lg:p-12 items-start gap-8 ">
            <h2 className="font-semibold font-neue  text-5xl lg:text-[4.9rem] w-full  text-[#191919] sm:leading-[1.1]">
                 Join us in making
                  technology accessible 
                  to everyone.
            </h2>

            <p className="font-normal font-neue text-base  md:text-xl tracking-tight w-full lg:w-[85%] items-center  text-[#191919] leading-[150%]">
                 As a mentor, you'll have the opportunity to share your knowledge and experience 
                 with an up-and-coming designer. You'll also have the satisfaction of helping someone
                grow and develop their skills.
            </p>
            <div className="flex flex-col items-center isolate ">
              <Link to="/MentorsForm">
                <button className="button text-[#191919] whitespace-nowrap w-[10rem]">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          <div>
            <img
              className="w-full hidden md:block h-full  relative"
              src={HeroImage}
              alt="Images of circles"
              loading='lazy'
            />
          </div>

          <div>
            <img
              className="w-full h-full md:hidden relative"
              src={Menteesm}
              alt="Images of circles"
              loading='lazy'
            />
          </div>

        </div>
      </section>
    </>
  );
}
