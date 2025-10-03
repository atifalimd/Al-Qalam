import React from "react";
import maulana from "../images/maulana.png";

export const About = () => {
  return (
    <section
      id="about"
      className="relative container mx-auto py-20 md:py-40 text-white md:my-28 flex"
    >
      {/* Section Heading */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-40 w-full lg:ml-[-10px]">
        {/* Left Content */}
        <div className="w-full lg:w-3/4 ml-2">
          <h2 className="w-full font-poppins font-extralight text-[22px] md:text-[28px] tracking-[10px] md:tracking-[20px] leading-snug mb-6 md:mb-10 text-center lg:text-left">
            STEP INTO OUR JOURNEY
          </h2>

          {/* Intro Paragraph */}
          <p className="font-poppins font-medium text-[16px] md:text-[20px] leading-relaxed mb-6 md:mb-10 max-w-2xl lg:mx-0 text-center lg:text-left">
            See how we guide you in faith, knowledge, and growth to shape your
            journey through the Alimiyyah path
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="font-poppins text-[14px] md:text-[16px] leading-relaxed flex lg:items-start">
              <span className="mr-2">📖</span>
              At Al-Qalam, we help you grow into a kind, respectful, and devout
              individual.
            </p>
            <p className="font-poppins text-[14px] md:text-[16px] leading-relaxed flex lg:items-start">
              <span className="mr-2">🌍</span>
              Whether you’re at home or in class, Al-Qalam makes learning
              Islamic knowledge easy and available to all.
            </p>
            <p className="font-poppins text-[14px] md:text-[16px] leading-relaxed flex lg:items-start">
              <span className="mr-2">✨</span>
              By learning good values and knowledge, you can help make the world
              a better place.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-3/7 flex justify-center lg:justify-end">
          <img
            src={maulana}
            alt="About"
            className="w-3/4 h-110 md:w-3/4 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
