import '../index.css';

import Facebook from '../assets/images/Facebook.svg';
import Instagram from '../assets/images/Instagram.svg';
import { Link, useLocation } from "react-router-dom";
import Linkedin from '../assets/images/Linkedin.svg';
import Logo from '../assets/images/Logow.webp';
import Twitter from '../assets/images/Twitter.svg';
import { useEffect } from "react";

const sections = [
  {
    title: 'ABOUT US',
    items: [
      { text: 'Why This Tech Thing?', path: '/AboutUs' },
      { text: 'Get matched', path: '/Mentee' },
      { text: 'Become a Mentor', path: '/Mentor' },
      { text: 'Mentorship program', path: '/Mentee' },
    ],
  },

  {
    title: 'RESOURCES',
    items: [
      { text: 'Blog', path: '/Blog' },
      { text: 'Wallpaper', path: '/Mentee' },
    ],
  },

  {
    title: 'CONTACT US',
    items: [
      { text: 'FAQ', path: '/#faqSection' },
    ],
  },
];


export default function Footer() {

  const location = useLocation();
  const handleScrollToFaq = () => {
    const faqSection = document.getElementById("faqSection");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (location.hash === '#faqSection') {
      handleScrollToFaq();
    }
  }, [location]);

  return (
    <section className="flex flex-col  pt-20 px-4 bg-[#191919] gap-8">
      <div className="flex flex-col lg:p-[7.5rem] md:flex-row justify-evenly w-full gap-8 lg:gap-[9.5rem]">
        <div className="flex flex-col md:w-[45%] gap-8">
          <div className="flex flex-col gap-4">
            <img className="lg:w-3/4 w-1/3" src={Logo} alt="" />
            <p className="font-neue font-normal text-base w-full md:w-3/4 tracking-[0.005em] text-[#f9f9f9]">
              This Tech Thing is a mentorship program
              dedicated to making technology available for the
              general public.
            </p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="">
              <img className="" loading='lazy' src={Twitter} alt="" />
            </a>
            <a href="#" className="">
              <img className="" loading='lazy' src={Facebook} alt="" />
            </a>
            <a href="#" className="">
              <img className="" loading='lazy' src={Linkedin} alt="" />
            </a>
            <a href="#" className="">
              <img className="" loading='lazy' src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="flex w-[45%] flex-col md:flex-row gap-12 lg:gap-[9.5rem]">
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
                    <Link
                      to={item.path}
                      onClick={handleScrollToFaq}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="flex justify-center items-center border-t-[#E4EBF3]" />
      <p className="font-neue text-center pb-4 text-[#c2c2c2] text-sm tracking-[0.01em]">
        © All rights reserved. This Tech Thing. 2023. Designed by Rachel Johnson. Developed by Isreal Aluko
      </p>
    </section>
  );
}
