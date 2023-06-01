import "../index.css";
import StepsImage from "../assets/images/StepsImage.svg";
import Check from "../assets/images/Check.svg";

export default function Steps() {
  return (
    <>
      <section className="bg-[#7db6ee] rounded-[2rem] border-[2px] gap-[6rem] border-[#000000] flex flex-col md:flex-row justify-between isolate py-20 px-4 lg:p-[7.5rem]">
        <div className="">
          <img className="w-full" src={StepsImage} alt="" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center w-[30%] px-[.4rem] py-[1rem] bg-[#edf5fd] rounded-[2rem] border-[#000000] gap-4 ">
            <h3 className="font-sans font-medium text-sm text-[#191919] tracking-[0.0048em] ">
              GET GUIDANCE
            </h3>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="font-neue font-normal text-[#191919] leading-[1.5] text-4xl lg:text-5xl ">
              You don’t have to walk your journey alone
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={Check} alt="" />
                <h3 className="font-neue text-base font-normal tracking-[0.005em] text-[#191919] ">
                  {" "}
                  Get one-on-one Mentorship and personalized guidance{" "}
                </h3>
              </div>

              <div className="flex gap-4 items-center">
                <img src={Check} alt="" />
                <h3 className="font-neue text-base font-normal tracking-[0.005em] text-[#191919] ">
                  {" "}
                  Be part of group Mentoring sessions led by experienced mentors{" "}
                </h3>
              </div>

              <div className="flex gap-4 items-center">
                <img src={Check} alt="" />
                <h3 className="font-neue text-base font-normal tracking-[0.005em] text-[#191919] ">
                  {" "}
                  Get access to resources such as articles, videos, and tools.{" "}
                </h3>
              </div>

              <div className="flex gap-4 items-center">
                <img src={Check} alt="" />
                <h3 className="font-neue text-base font-normal tracking-[0.005em] text-[#191919] ">
                  {" "}
                  Gain networking opportunities with professionals{" "}
                </h3>
              </div>
            </div>
            <div className="flex w-full justify-center lg:justify-start items-center ">
              <a href="">
                <button className="button whitespace-nowrap">
                  Apply Now to Join our Next Cohort
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
