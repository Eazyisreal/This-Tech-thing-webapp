import "../index.css";
import { useState } from "react";
import Spectral from "../assets/images/BlogImage1.svg";
import Pro from "../assets/images/BlogImage2.svg";
import Time from "../assets/images/BlogImage3.svg";
import Rachel from "../assets/images/Rblogger.svg";
import Edith from "../assets/images/Eblogger.svg";
import Ayo from "../assets/images/Ablogger.svg";

export default function Post() {
    const [activeFilter, setActiveFilter] = useState("All");
    const buttonTitles = ["All", "UX Research", "Case Studies", "Career", "UI Design"];

    const handleFilterClick = (title) => {
        setActiveFilter(title);
    };

    const blogPosts = [
        {
            title: "Atomic Design–A Methodical Approach",
            body: "Over the years, designing for the website has evolved. With the increase in the number of devices and browsers, designers must now...",
            image: Spectral,
            name: "Rachel Johnson",
            bloggerImage: Rachel,
            time: "Feb 2, 2023 · 5 min read",
        },
        {
            title: "Tips for a Successful UI/UX Design Career",
            body: "The issue of commuting will always be a global issue, how people move from one point to another will always be something t...",
            image: Pro,
            name: "Edith Asieghwu ",
            bloggerImage: Edith,
            time: "May 2, 2023 · 5 min read",
        },
        {
            title: "How to Manage Project Timelines and Deadlines",
            body: "The issue of commuting will always be a global issue, how people move from one point to another will always be something t...",
            image: Time,
            name: "Ayomide Babatunde Saka",
            bloggerImage: Ayo,
            time: "May 6, 2023 · 10 min read",
        },
    ]

    return (
        <section className="flex flex-col bg-[#f9f9f9] items-start gap-20 lg:p-[7.5rem] px-4 py-20">
            <div className="flex flex-col items-center w-full justify-between gap-30">
                <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
                    <div>
                        <h2 className="font-neue text-4xl lg:text-5xl leading-[1.3] font-normal">All posts</h2>
                    </div>
                    <div className="flex items-center p-2 gap-4 overflow-x-auto">
                        <div className="flex space-x-4">
                        {buttonTitles.map((title, index) => (
                            <button
                                key={index}
                                className={`font-neue font-normal whitespace-nowrap text-base tracking-[0.015em] items-center text-center ${activeFilter === title ? "text-white bg-[#1a1b1f]" : "text-[#191919] bg-[#f4f4f4]"
                                    } rounded-[.5rem] px-6 py-2`}
                                onClick={() => handleFilterClick(title)}
                            >
                                {title}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-12 pt-12">
                    {blogPosts.map((post, i) => (
                        <div key={i} className="flex items-start bg-[f9f9f9] rounded-[.8rem] border-[1.5px] pt-[1.5rem] pb-[2rem] px-[1.5rem] border-[#1a1a1a] gap-12">
                            <div className="flex flex-col items-start gap-8 isolate">
                                <img className="w-full" src={post.image} loading='lazy' alt="" />
                                <div className="flex flex-col items-start gap-8">
                                    <div className="flex flex-col items-start gap-4">
                                        <div className="flex flex-col w-full">
                                            <h2 className="font-neue  font-normal text-3xl tracking-[0.005em]">
                                                {post.title}
                                            </h2>
                                        </div>
                                        <p className="font-neue font-normal text-base tracking-[0.005em] break-words">
                                            {post.body}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img src={post.bloggerImage} loading='lazy' alt="" />
                                        <div className="flex flex-col items-start gap-2">
                                            <h2 className="font-neue font-normal text-base">
                                                {post.name}
                                            </h2>
                                            <h3 className="text-sm font-neue tracking-[0.015em] ">
                                                {post.time}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
