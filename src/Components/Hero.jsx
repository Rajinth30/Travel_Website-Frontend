import React from "react";
import beachVid from "../Assets/beachVid.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute h-full w-full top-0 left-0 bg-gray-900/40"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white p-4">
        <h1>First class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form action="" className="flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input type="text" placeholder="Search Destinations" className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none" />
          </div>
          <div>
            <button>
              <BiSearch size={20} className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
