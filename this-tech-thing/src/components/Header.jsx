import "../index.css";

export default function Header() {
  return (
    <>
      <header className="flex justify-between md:pt-[2rem] md:px-[6.25rem]  p-4 bg-[#F9F9F9]">
        <div>
          <img src="" alt="" />
          <h2 className="font-bold text-black font-roboto text-3xl ">This Tech Thing</h2>
        </div>

        <nav className="max-sm:hidden">
          <ul className="flex justify-between gap-4">
            <li className="font-normal font-neue text-base tracking-[0.005em] ">
              {" "}
              <a href="">About</a>
            </li>

            <li className="font-normal font-neue text-base tracking-[0.005em]">
              {" "}
              <a href="">How it works</a>
            </li>
            <li className="font-normal text-base  font-neue tracking-[0.005em]">
              {" "}
              <a href="">Resources</a>
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              {" "}
              <a href="">Become a mentor</a>
            </li>
            <li className="font-normal text-base font-neue tracking-[0.005em]">
              {" "}
              <a href="">Get matched</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
