import '../index.css';
import Logo from '../assets/images/Logow.svg';
import Twitter from '../assets/images/Twitter.svg';
import Facebook from '../assets/images/Facebook.svg';
import Linkedin from '../assets/images/Linkedin.svg';
import Instagram from '../assets/images/Instagram.svg';

const sections = [
  {
    title: 'ABOUT US',
    items: [
      'Why This Tech Thing?',
      'Get matched',
      'Become a Mentor',
      'Mentorship program',
    ],
  },

  {
    title: 'RESOURCES',
    items: [
      'Blog',
      'Wallpaper',
    ],
  },

  {
    title: 'CONTACT US',
    items: [
      'Contact Us',
      'FAQ',
    ],
  },
];

export default function Footer() {
  return (
    <section className="flex flex-col lg:p-[7.5rem] py-20 px-4 bg-[#191919] gap-20">
      <div className="flex flex-col lg:flex-row justify-evenly w-full gap-8 lg:gap-[9.5rem]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <img className="lg:w-3/4 w-1/4" src={Logo} alt="" />
            <p className="font-neue font-normal text-base w-full lg:w-3/4 tracking-[0.005em] text-[#f9f9f9]">
              This Tech Thing is a mentorship program
              dedicated to making technology available for the
              general public.
            </p>
          </div>
          <div className="flex gap-8">
            <a href="" className="">
              <img className="" src={Twitter} alt="" />
            </a>
            <a href="" className="">
              <img className="" src={Facebook} alt="" />
            </a>
            <a href="" className="">
              <img className="" src={Linkedin} alt="" />
            </a>
            <a href="" className="">
              <img className="" src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="flex  flex-col lg:flex-row gap-12 lg:gap-[9.5rem]">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-8">
              <h2 className="font-neue whitespace-nowrap text-[#c2c2c2] text-sm tracking-[0.01em]">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-8">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-neue text-base whitespace-nowrap font-normal text-[#c2c2c2]"
                  >
                    <a href="">
                        {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center  gap-[5.4rem] border-t-[#E4EBF3] border-[1px] px-8"></div>
    </section>
  );
}
