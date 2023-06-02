import "../index.css";
import Smile from "../assets/images/Smile.svg";

export default function Cat() {
  return (
    <section className="bg-{#f5f5f5] lg:p-[7.5rem]  py-20 px-4">
      <div className="flex flex-col  button2 isolate gap-8 pr-2 pb-2 rounded-[1rem]">
        <div className="bg-[#f9f9f9] w-full p-8 md:p-12 flex flex-col md:flex-row  gap-12 justify-between rounded-[1rem] border-[.5px] border-[#191919]">
          <div className="flex flex-col w-full gap-20 ">
            <div className="flex flex-col gap-8">
              <h2 className="font-neue text-4xl lg:text-5xl leading-[1.3] font-normal">
                Let’s create a world where <br />
                technology is accessible to <br />
                everyone.   
              </h2>
              <h3 className="font-neue font-normal text-xl ">
                  Are you passionate about helping people grow? Apply now to be a mentor. 
              </h3>
            </div>

            <div className="button2  pr-2 pb-2">
              <a href="">
                <button className="button whitespace-nowrap  ">
                  Apply Now to be a Mentor
                </button>
              </a>
            </div>
          </div>
          <img className="" src={Smile} alt="" />
        </div>
      </div>
    </section>
  );
}