import React from "react";
import heroImg from "../images/Hero-Img.png";
import check from "../images/Check Circle.png";

/* Small reusable Subject component */
const Subject = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <img src={icon} alt={label} className="w-5 h-5 lg:w-6 lg:h-6" />
    <span className="text-base lg:text-lg text-gray-300 font-medium">
      {label}
    </span>
  </div>
);

export const Hero = () => {
  return (
    <section
      id="/"
      className="relative container mx-auto flex flex-col-reverse lg:flex-row justify-center gap-12 px-6 pt-10 lg:pt-16 text-white"
    >
      {/* Left Text Content */}
      <div className="w-full lg:w-3/4 flex flex-col gap-6 text-center lg:text-left">
        <h1 className="font-bold text-2xl lg:text-5xl leading-snug lg:leading-[56px] font-poppins">
          Study Alimiyyah Course <br /> Full-Time or Part-Time
        </h1>

        <p className="text-sm lg:text-xl leading-relaxed text-gray-200 mr-0 lg:mr-16 mt-4 lg:mt-12">
          Learn Arabic, Fiqh, Hadith &amp; more through a structured curriculum
          for brothers and sisters.
        </p>

        {/* Button */}
        <button className="bg-green-700 hover:bg-green-800 transition rounded-lg px-6 py-3 text-sm lg:text-lg font-semibold tracking-wide w-fit mx-auto lg:mx-0 mt-6 lg:mt-12">
          REGISTER YOUR CHILD
        </button>

        {/* Subjects Row */}
        <div className="flex flex-wrap gap-4 lg:gap-6 pt-4 justify-center lg:justify-start">
          <Subject icon={check} label="NAHW" />
          <Subject icon={check} label="SARF" />
          <Subject icon={check} label="FIQH" />
          <Subject icon={check} label="URDU" />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-3/4 flex justify-center lg:justify-end mt-6 lg:mt-[-40px]">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-sm lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};
