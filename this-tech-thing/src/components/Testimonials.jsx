import "../index.css";
import Saka from "../assets/images/Saka.svg";

const testimonials = [
  {
    quote:
      "As a mentor, I appreciated the opportunity to give back to the design community and share my knowledge and experience. It was also great to connect with other mentors and mentees in the program and learn from their perspectives.",
    name: "Ayomide Saka",
    role: "Mentor",
  },
  {
    quote:
      "This Tech Thing gave me the opportunity to connect with a mentor who has been a huge help in advancing my design career. Through their guidance and support, I was able to build a strong portfolio and land a job at a top tech company.",
    name: "Rachel Johnson",
    role: "Mentee",
  },
  {
    quote:
      "This Tech Thing has been a game-changer for me. I was struggling to break into the tech industry and felt like I didn't have the right connections or experience. I was able to connect with a mentor who helped me develop the skills I needed to succeed.",
    name: "Rebecca Olawumi",
    role: "Mentee",
  },

  // {
    // quote:
    // "Being a mentor for This Tech Thing has been an incredible experience. It's so rewarding to see my mentee's skills grow over time. I've also learned a lot from them, which has helped me to become a better designer.",
    // name: "Edith Asieghwu",
    // role: "Mentor",
  // }
];

export default function Testimonials() {
  return (
    <>
      <section className="bg-[#f4f4f4]  flex flex-col lg:p-[7.5rem] gap-[1.5rem] py-20 px-4 ">
        <div className="flex justify-center pb-8">
          <h2 className="font-neue font-normal text-4xl md:text-5xl leading-[1.5] text-center items-center text-[#191919] ">
            Empowering the next <br /> generation of tech talent
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-8 bg-[#ffffff] rounded-[.8rem] gap-8"
            >
              <div className="flex items-start gap-2">
                <p className="font-neue font-normal text-base  tracking-[0.005em] text-[#191919] ">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-1/4" src={Saka} alt="" />
                <div className="flex flex-col gap-2 items-start">
                  <h2 className="font-neue font-normal tracking-[0.005em] text-xl text-[#191919] ">
                    {testimonial.name}
                  </h2>
                  <h4 className="font-neue font-normal text-base tracking[0.05em] text-[#191919]">
                    {testimonial.role}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
