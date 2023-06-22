import "../index.css";
import { Link } from "react-router-dom";
import Smile from "../assets/images/Smile.webp";

export default function Cat() {
  return (
    <section className="bg-{#f5f5f5] lg:p-[7.5rem]  py-20 px-4">
      <div className="flex flex-col  button3 isolate gap-8 pr-2 pb-2 rounded-[1rem]">
        <div className="bg-[#f9f9f9] w-full p-8 md:p-12 flex flex-col lg:flex-row  gap-20 justify-between rounded-[1rem] border-[.5px] border-[#191919]">
          <div className="flex flex-col w-full gap-8 ">
            <div className="flex flex-col gap-8">
              <h2 className="font-neue text-4xl lg:text-5xl leading-[1.3] font-normal">
                Let’s create a world where 
                technology is accessible to
                everyone.   
              </h2>
              <h3 className="font-neue font-normal text-xl ">
                  Are you passionate about helping people grow? Apply now to be a mentor. 
              </h3>
            </div>

            <div className="button2  self-start pr-2 pb-2">
              <Link to="/Mentor">
                <button className="button whitespace-nowrap  ">
                  Apply Now to be a Mentor
                </button>
              </Link>
            </div>
          </div>
          <img className="" src={Smile} loading="lazy" alt="" />
        </div>
      </div>
    </section>
  );
}
