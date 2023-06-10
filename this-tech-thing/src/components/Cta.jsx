import "../index.css";
import { Link } from "react-router-dom";
import Imagelaptop from "../assets/images/Imagelaptop.svg";

export default function Cta() {
  return (
    <section className="bg-{#f5f5f5] lg:p-[7.5rem]  py-20 px-4">
      <div className="flex flex-col  button3 isolate gap-8 pr-2 pb-2 rounded-[1rem]">
        <div className="bg-[#f9f9f9] w-full p-8 md:p-12 flex flex-col md:flex-row  gap-12 justify-between rounded-[1rem] border-[.5px] border-[#191919]">
          <div className="flex flex-col w-full gap-20 ">
            <div className="flex flex-col gap-8">
              <h2 className="font-neue text-4xl lg:text-5xl leading-[1.3] font-normal">
                Ready to take your UI/UX <br />
                design career to the next <br />
                level?
              </h2>
              <h3 className="font-neue font-normal text-xl ">
                Apply now to be a mentee in our upcoming bootcamp!
              </h3>
            </div>

            <div className="button2 self-center lg:self-start pr-2 pb-2">
              <Link to="/Mentee">
                <button className="button whitespace-nowrap  ">
                  Apply Now to Join our Next Cohort
                </button>
              </Link>
            </div>
          </div>
          <img className="" src={Imagelaptop} loading="lazy" alt="" />
        </div>
      </div>
    </section>
  );
}
