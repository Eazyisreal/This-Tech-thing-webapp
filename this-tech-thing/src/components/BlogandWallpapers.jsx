import '../index.css';
import Icon from "../assets/images/Icon.svg";
import Wallpaper from "../assets/images/Wallpaper.svg";
import { NavLink } from "react-router-dom";




export default function BlogandWallpapers() {
    return (
        <div className="flex button3 rounded-[.8rem] self-center items-start pb-2 pr-2 gap-4">
            <div className='bg-white flex items-start  border-[#00000] rounded[.4rem] gap-2'>
                <NavLink to="/blog" className="flex flex-col items-start p-8 gap-2 ">
                    <img src={Icon} alt="" />
                    <div className="flex  flex-col items-start p-2 gap-2">
                        <h2 className='font-neue font-normal text-base tracking-[0.01em] text-[#1a1a1a] text-center'>
                            Blog
                        </h2>
                        <p className='font-neue font-normal text-sm leading-[1.5] tracking-[0.01em] text-[#434343]'>
                            Curated articles on design, user <br />
                            experience, user interface and <br />
                            career development — from<br />
                            designers to designers.
                        </p>
                    </div>
                </NavLink>

                <a href="https://drive.google.com/drive/u/0/folders/1KFgv3yY3YmNaZpAgg0-2wWyFBnURnqxu">
                    <div className='flex flex-col items-start p-4 gap-4 bg-[#edf5fd]'>
                        <img src={Wallpaper} alt="" />
                        <div className="flex  flex-col items-start p-2 gap-2">
                            <h2 className='font-neue font-normal text-base tracking-[0.01em] text-[#1a1a1a] text-center'>
                                Download TTT Wallpapers
                            </h2>
                            <p className='font-neue font-normal text-sm leading-[1.5] tracking-[0.01em] text-[#434343]'>
                                Our wallpaper can be a reminder<br />
                                and motivation for you.
                            </p>
                        </div>
                    </div>

                </a>

            </div>
        </div>
    );
};