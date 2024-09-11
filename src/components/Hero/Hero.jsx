import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "/public/images/productbyimg.png";
import { PrimaryBtn,  } from "../index";

function Hero() {
  return (
    <div className="font-sans relative bg-white">

      {/* Hero Section */}
      <main className="w-full flex flex-col md:flex-row justify-between h-screen">
        {/* Image Section */}
        <div className="w-full md:w-2/3 flex justify-center items-center bg-primary rounded-e-[25%]">
          <div className="rounded-r-lg bg-lightBlue p-8 md:p-16">
            <img
              src={HeroImage}
              alt="Headphones"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/4 flex flex-col items-start justify-center text-left mt-12 md:mt-0 px-8 md:px-16">
          <h2 className="text-base text-secondary font-semibold uppercase mb-2">
            In the spotlight
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-4">
            Your sound best for your life
          </h1>
          <p className="text-gray-600 mb-6 text-lg tracking-wide">
            These have large ear cups that encompass the ears, providing good
            sound isolation and often better sound quality.
          </p>
          <PrimaryBtn className="bg-vibrantRed py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
            Shop now
          </PrimaryBtn>
        </div>
      </main>

      {/* Carousel Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        <span className="inline-block w-3 h-3 bg-vibrantRed rounded-full"></span>
        <span className="inline-block w-3 h-3 bg-secondary rounded-full"></span>
        <span className="inline-block w-3 h-3 bg-secondary rounded-full"></span>
      </div>

      <hr className="h-px my-8 border-0 dark:bg-black" />
      
    </div>
  );
}

export default Hero;
