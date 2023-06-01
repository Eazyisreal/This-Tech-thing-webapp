import "../index.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

export default function Header() {
  return (
    <>
      <header className="flex justify-between w-full z-50 md:pt-[2rem] fixed lg:px-[9.5rem]  p-4 bg-[#F9F9F9]">
        <div>
          <NavLink to="/" activeclassname="active">
            <img className="lg:w-1/2 w-[42%]" src={Logo} alt="" />
          </NavLink>
        </div>

        <nav className="max-sm:hidden">
          <ul className="flex justify-between whitespace-nowrap gap-4">
            <li className="font-normal font-neue  text-base tracking-[0.005em] ">
              <NavLink to="/AboutUs" activeclassname="active">About</NavLink>
            </li>

            <li className="font-normal font-neue text-base tracking-[0.005em]">
              <NavLink to="/how-it-works" activeclassname="active">How it works</NavLink>
            </li>
            <li className="font-normal text-base  font-neue tracking-[0.005em]">
              <a href="">Resources</a>
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              <a href="">Become a mentor</a>
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              <a href="">Get matched</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
