import "../index.css";
import SecureImage from "../assets/images/SecureImage.svg";


export default function Secure(){
    return(
        <section className="bg-[#f1f1f1] lg:p-[7.5rem] px-4 py-20 flex flex-col gap-12 ">
            <div className="flex justify-center items-start gap-4">
                <h2 className="font-neue font-normal text-5xl text-[#191919] leading-[1.3] "> 
                    What are the benefits of mentoring at <br /> This Tech Thing?
                </h2>
            </div> 

            <div className="flex w-full justify-between gap-12 items-center"> 
                <div className="bg-[#f4f4f4] flex flex-col items-start gap-8"> 

                </div>
                <img className="" src={SecureImage} alt="" />
            </div>
        </section>
    );
}