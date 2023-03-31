import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/homee.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Most Efficient Way To
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
           Order Food
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          You can now pre-order all your favourite foods! MessBuddy is a one 
          stop solution for un-messing your canteen!
        </p>

        <a href="#">
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
        </a>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
      <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />
      </div>
    </section>
  );
};

export default HomeContainer;
