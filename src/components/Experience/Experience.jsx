import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHospital,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaReact,
} from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FaDatabase, FaPhp, FaShopSlash } from "react-icons/fa6";
import { MdFactory } from "react-icons/md";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="text-2xl md:text-4xl mt-10 text-white font-bold"
    >
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPhp color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaLaravel color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDatabase color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaHospital color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Programmer, Fastabiq</h2>
              <p className="text-sm leading-tight font-thin">
                November 2020 - November 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Senior programmer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaShopSlash color="#E50914" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Programmer, Pakis</h2>
              <p className="text-sm leading-tight font-thin">
                Maret 2024 - Juni 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                <li>- Admin of sale</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <MdFactory color="#FF9900" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Programmer, Hwaseung Indonesia</h2>
              <p className="text-sm leading-tight font-thin">
                Juni 2024 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as software developer</li>
                {/* <li>- Admin of sale</li> */}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
