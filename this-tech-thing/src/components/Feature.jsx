import "../index.css";
import FeatureImage from "../assets/images/FeatureImage.webp";
import FeatureImagesm from "../assets/images/FeatureImagesm.webp";

export default function Feature() {
  return (
    <>
      <section className="bg-[#f9f9f9]  z-10 flex flex-col-reverse lg:flex-row pt-20 px-8 pb-12 relative justify-betweem items-center gap-8  isolate lg:p-[7.5rem] ">
        <div className="">
          <img className="md:hidden" loading="lazy" src={FeatureImagesm} alt="" />
          <img className="hidden md:block" loading='lazy' src={FeatureImage} alt="" />
        </div>
        <div className="flex flex-col w-full gap-8">
          <p className="font-neue text-[#191919] text-3xl lg:text-5xl">
            What our mentorship program is like
          </p>
          <p className="font-neue text-base text-[#191919] tracking-[0.005em]">
            Our mentorship program is designed to provide a supportive and
            inclusive platform for individuals to learn, grow, and advance their
            careers in the tech industry. Whether you're just starting out or
            looking to take your career to the next level, our program can help
            you achieve your goals.
          </p>

          <p className="font-neue text-base text-[#191919] tracking-[0.005em]">
            🎉 The exciting news is that the next Cohort of This Tech Thing is
            starting officially in June! Apply now to join our mentorship
            program and take the first step towards advancing your design career
            in the tech industry.
          </p>

            <a className="hidden md:block" href="">
              <button className="button whitespace-nowrap">
                Apply Now to Join our Next Cohort
              </button>
            </a>
        </div>
      </section>
    </>
  );
}
