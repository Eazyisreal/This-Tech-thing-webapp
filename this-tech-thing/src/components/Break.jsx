import "../index.css";

import Lline from "../assets/images/Lline.svg";
import Rline from "../assets/images/Rline.svg";

export default function Break() {
  return (
    <>
      <section className="bg-[#f9f9f9]  flex flex-col lg:p-[7.5rem] gap-[1.5rem] py-20 px-4 ">
        <h3 className="font-sans font-normal text-xl flex justify-center text-[#191919] ">
          The future of your design career begins here.
        </h3>

        <div className="flex justify-between items-center gap-8">
          <img
            src={Lline}
            className=" bg-[#191919] w-[24%] md:w-[30%] lg:w-[40%]"
            alt=""
          />
          <div className="button2 border-none pr-2 pb-2">
            <a href="">
              <button className=" button whitespace-nowrap">Apply Now</button>
            </a>
          </div>
          <img
            src={Rline}
            className=" bg-[#191919] w-[24%]  md:w-[30%] lg:w-[40%] "
            alt=""
          />
        </div>
      </section>
    </>
  );
}
