import "../index.css";
import SecureImage from "../assets/images/SecureImage.svg";
import Growth from "../assets/images/GrowthCurve.svg";
import Happy from "../assets/images/Happy.svg";
import Network from "../assets/images/Network.svg";
import Giving from "../assets/images/Giving.svg";



const cards = [
  {
    title: "Personal and professional growth",
    text: "You'll have the opportunity to share your knowledge with others, which can help you develop new skills.",
    image: Growth,
  },
  {
    title: "Satisfaction from helping others",
    text: "Mentoring can be a rewarding experience as you help someone else  succeed in their career.",
    image: Happy,
  },
  {
    title: "Networking opportunities",
    text: "You'll have the opportunity to connect with other mentors, mentees, and industry professionals.",
    image: Network,
},
{
    title: "Giving back to the community",
    text: "By sharing your knowledge and expertise, you'll be helping to make a positive impact on the community.",
    image: Giving,
},
];

export default function Secure() {
  return (
    <section className="bg-[#f1f1f1] lg:p-[7.5rem] px-4 py-20 flex flex-col gap-12 ">
      <div className="flex justify-center items-start gap-4">
        <h2 className="font-neue font-normal text-3xl lg:text-5xl text-[#191919] leading-[1.3] ">
          What are the benefits of mentoring at <br /> This Tech Thing?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between gap-12 items-center">
        <div className="flex flex-col  gap-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4] flex flex-col items-start gap-8"
            >
              <div className="flex items-start gap-8">
                <img src={card.image} alt="" />
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center justify-center gap-4">
                    <h3 className="font-neue font-normal text-3xl text-[#191919] leading-[1.3] ">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex items-start gap-2">
                    <p className="font-neue font-normal lg:w-3/4 text-base items-center tracking-[0.005em] text-[#191919]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img className="" src={SecureImage} alt="" />
      </div>
    </section>
  );
}
