import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.webp";
import Vector from "../assets/images/Vector.svg";
import BlogandWallpaper from "../components/BlogandWallpapers";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleScrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if(location.hash === '#how-it-works'){
      handleScrollToHowItWorks();
    }
  }, [location]);

  return (
    <>
      <header className="flex justify-between w-full z-50 md:pt-[2rem] wrapper fixed lg:px-[9.5rem] p-4 bg-[#F9F9F9]">
        <div>
          <NavLink to="/" activeClassName="active">
            <img
              className="lg:w-1/2 w-[42%]"
              loading="lazy"
              src={Logo}
              alt=""
            />
          </NavLink>
        </div>

        <nav className="hidden md:block">
          <ul className="flex justify-between whitespace-nowrap gap-4">
            <li className="font-normal font-neue text-base tracking-[0.005em]">
              <NavLink to="/AboutUs" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="font-normal font-neue text-base tracking-[0.005em]">
              <NavLink
                to="/#how-it-works"
                smooth={true}
                duration={500}
                activeClassName="active"
                onClick={handleScrollToHowItWorks}
              >
                How it works
              </NavLink>
            </li>
            <li
              className="font-normal text-base font-neue tracking-[0.005em]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="flex relative gap-2" to="/Blog">
                Resources <img src={Vector} alt="" />{" "}
              </NavLink>
              {isHovered && <BlogandWallpaper />}
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              <NavLink to="/Mentor" activeClassName="active">
                Become a mentor
              </NavLink>
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              <NavLink to="/Mentee" activeClassName="active">
                Get matched
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="md:hidden">
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute top-16 right-0 left-0 bg-[#F9F9F9] py-4 px-8`}
          >
            <ul className="flex flex-col gap-4">
              <li className="font-normal font-neue text-base tracking-[0.005em]">
                <NavLink
                  to="/AboutUs"
                  activeClassName="active"
                  onClick={toggleMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="font-normal font-neue text-base tracking-[0.005em]">
                <NavLink
                  to="/#how-it-works"
                  activeClassName="active"
                  onClick={() => {
                    toggleMobileMenu();
                    handleScrollToHowItWorks();
                  }}
                >
                  How it works
                </NavLink>
              </li>
              <li className="font-normal text-base font-neue tracking-[0.005em]">
                <NavLink to="/Blog" onClick={toggleMobileMenu}>
                  Resources
                </NavLink>
              </li>
              <li className="font-normal text-base font-neue tracking-[0.005em]">
                <NavLink
                  to="/Mentor"
                  activeClassName="active"
                  onClick={toggleMobileMenu}
                >
                  Become a mentor
                </NavLink>
              </li>
              <li className="font-normal text-base font-neue tracking-[0.005em]">
                <NavLink
                  to="/Mentee"
                  activeClassName="active"
                  onClick={toggleMobileMenu}
                >
                  Get matched
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block h-0.5 w-6 bg-black mb-1 transform transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black mb-1 transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black mb-1 transform transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </nav>
      </header>
    </>
  );
}
