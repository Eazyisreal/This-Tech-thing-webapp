import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import "../index.css";
import Saka from "../assets/images/Saka.svg";
import Edith from "../assets/images/Edith.svg";
import Rachel from "../assets/images/Rachel.svg";
import Rebecca from "../assets/images/Rebecca.svg";

SwiperCore.use([Pagination, Autoplay]);

const testimonials = [
  {
    quote:
      "As a mentor, I appreciated the opportunity to give back to the design community and share my knowledge and experience. It was also great to connect with other mentors and mentees in the program and learn from their perspectives.",
    name: "Ayomide Saka",
    role: "Mentor",
    image: Saka,
  },
  {
    quote:
      "Being a mentor for This Tech Thing has been an incredible experience. It's so rewarding to see my mentee's skills grow over time. I've also learned a lot from them, which has helped me to become a better designer.",
    name: "Edith Asieghwu",
    role: "Mentor",
    image: Edith,
  },
  {
    quote:
      "This Tech Thing gave me the opportunity to connect with a mentor who has been a huge help in advancing my design career. Through their guidance and support, I was able to build a strong portfolio and land a job at a top tech company.",
    name: "Rachel Johnson",
    role: "Mentee",
    image: Rachel,
  },
  {
    quote:
      "As a mentor, I appreciated the opportunity to give back to the design community and share my knowledge and experience. It was also great to connect with other mentors and mentees in the program and learn from their perspectives.",
    name: "Ayomide Saka",
    role: "Mentor",
    image: Saka,
  },

  {
    quote:
      "This Tech Thing has been a game-changer for me. I was struggling to break into the tech industry and felt like I didn't have the right connections or experience. I was able to connect with a mentor who helped me develop the skills I needed to succeed.",
    name: "Rebecca Olawumi",
    role: "Mentee",
    image: Rebecca,
  },
];

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
    <>
      <section className="bg-[#f4f4f4] flex flex-col lg:p-[7.5rem] gap-[1.5rem] py-20 px-4">
        <div className="flex justify-center pb-8">
          <h2 className="font-neue font-normal text-4xl md:text-5xl leading-[1.5] text-center items-center text-[#191919]">
            Empowering the next <br /> generation of tech talent
          </h2>
        </div>

        <div className="swiper-container">
          <Swiper
            className="swiper-wrapper"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 500 }}
            breakpoints={{
              668: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className=" bg-white p-8 rounded-lg">
                  <div className="font-neue font-normal text-[#191919] mb-4">
                    "{testimonial.quote}"
                  </div>
                  <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full mr-4" loading='lazy' src={testimonial.image} alt="" />
                    <div className="">
                      <h2 className="font-neue font-normal text-2xl text-[#191919] mb-1">{testimonial.name}</h2>
                      <h4 className="font-neue font-normal text-base text-[#191919]">{testimonial.role}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
