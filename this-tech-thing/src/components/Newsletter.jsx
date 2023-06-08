import "../index.css";

export default function Newsletter() {
    return (
        <section className="bg-{#f5f5f5] lg:p-[7.5rem]  py-20 px-4">
            <div className="flex flex-col  button3 isolate gap-8 pr-2 pb-2 rounded-[1rem]">
                <div className="bg-[#f9f9f9] w-full p-8 md:p-12 flex flex-col md:flex-row  gap-12 justify-between rounded-[1rem] border-[.5px] border-[#191919]">
                    <div className="flex flex-col justify-center w-full items-center gap-16">
                        <div className="flex flex-col items-column items-center gap-4">
                            <h2 className="font-neue text-center font-normal items-center text-4xl lg:text-5xl text-[#191919] ">
                                Subscribe to our newsletter
                            </h2>
                            <p className="font-neue font-normal text-center text-base text-[#191919] tracking-[0.005em]">
                                Provide your email to be notified about This Tech Thing blog posts.
                            </p>
                        </div>

                        <form className="flex w-full md:max-w-[70%] lg:max-w-[45%] items-start isolate">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className=" bg-white placeholder-[#737373] rounded-[1rem] border-2 w-full flex p-4 gap-4"
                            />

                            <button className="bg-[#191919] border-2 rounded-[.8rem] text-base font-normal tracking-[0.015em] font-neue  py-[1rem] items-center justify-center text-[#f5f5f5] px-[2rem]">
                                Subscribe
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}
