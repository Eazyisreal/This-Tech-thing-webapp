import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import BlogandWallpaper from "../components/BlogandWallpapers";



export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <header className="flex justify-between container mx-auto w-full z-50 md:pt-[2rem] fixed lg:px-[9.5rem] p-4 bg-[#F9F9F9]">
        <div>
          <NavLink to="/" activeclassname="active">
            <img className="lg:w-1/2 w-[42%]" src={Logo} alt="" />
          </NavLink>
        </div>

        <nav className="hidden md:block">
          <ul className="flex justify-between whitespace-nowrap gap-4">
            <li className="font-normal font-neue  text-base tracking-[0.005em]">
              <NavLink to="/AboutUs" activeclassname="active">
                About
              </NavLink>
            </li>
            <li className="font-normal font-neue text-base tracking-[0.005em]">
              <NavLink to="/how-it-works" activeclassname="active">
                How it works
              </NavLink>
            </li>
            <li
              className="font-normal text-base font-neue tracking-[0.005em]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/Blog">Resources</NavLink>
              {isHovered && (
                <BlogandWallpaper/>
              )}
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              <NavLink to="/Mentor" activeclassname="active">
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
                  to="/how-it-works"
                  activeClassName="active"
                  onClick={toggleMobileMenu}
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
