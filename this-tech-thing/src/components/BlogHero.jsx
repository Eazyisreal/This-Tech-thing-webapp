import "../index.css";
import HeroImage from "../assets/images/BlogHeroImage.svg";
import Dara from "../assets/images/Darasm.svg";

export default function BlogHero() {
  return (
    <section className="bg-[#F9F9F9] flex flex-col gap-4 items-center lg:p-[6.25rem] px-4 py-20">
      <div className="flex flex-col items-center py-8 gap-4">
        <h2 className="font-neue font-normal text-5xl text-center text-[#191919]">
          This Tech Thing Blog
        </h2>
        <p className="font-neue font-normal text-base items-center text-center tracking-[0.005em] text-[#191919]">
          Curated articles on design, user experience, user interface — from
          designers to designers
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-20 w-full items-center lg:px-[2.5rem] lg:pt-[4.5rem]">
        <img className=" md:w-1/2 " src={HeroImage} alt="" />
        <div className="flex flex-col items-start gap-4">
          <div className="flex justify-center items-center bg-[#bedaf7] border-[#000000] border rounded-[1.5rem] px-[1.3rem] py-[.5rem]">
            <h3 className="font-sans font-medium text-sm items-center tracking-[0.005em] text-[#191919]">
              FEATURED
            </h3>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-start gap-3">
              <h2 className="font-neue font-normal text-4xl lg:text-5xl items-center">
                Case study: Enabling commuters to move better
              </h2>
            </div>
            <div className="flex items-start gap-3">
              <p className="font-neue font-normal text-base items-center tracking-[0.005em] text-[#191919]">
                The issue of commuting will always be a global issue, how people
                move from one point to another will always be something to think
                of and improve upon.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={Dara} alt="" />
            <div className="flex flex-col items-start gap-2">
              <h2 className="font-neue font-normal text-sm tracking-[0.01em] text-[#191919]">
                Dara Sobaloju
              </h2>
              <h4 className="font-neue font-normal text-xs items-center tracking-[0.015em] ">
                Nov 1, 2021 · 18 min read
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
