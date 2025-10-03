import React from "react";
import bgCard from "../images/BackGround-Card.png";
import full from "../images/Full-time-img.png";
import part from "../images/Part-img.png";

// Reusable CourseCard component
const CourseCard = ({ image, title, duration, mode, startDate, timings }) => (
  <div
    className="w-60 md:min-w-[270px] bg-cover bg-center rounded-lg shadow-lg p-3 flex flex-col justify-between"
    style={{ backgroundImage: `url(${bgCard})` }}
  >
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-50 object-cover object-top rounded-lg"
    />

    {/* Details */}
    <div className="space-y-2 text-[#112549] mt-4">
      <p className="font-medium">Title : {title}</p>
      <p className="font-medium">Duration : {duration}</p>
      <p className="font-medium">Mode : {mode}</p>
      <p className="font-medium">Start Date : {startDate}</p>
      <p className="font-medium">
        Timing :{" "}
        {Array.isArray(timings) ? (
          <span className="block ml-4">
            {timings.map((time, idx) => (
              <span key={idx} className="block">
                {time}
              </span>
            ))}
          </span>
        ) : (
          timings
        )}
      </p>
    </div>

    {/* Button */}
    <button className="w-3/4 md:min-w-[230px] block mt-6 bg-[#1d8d5a] text-white py-2 px-4 rounded-md text-xs md:text-sm font-medium lg:font-semibold lg:text-base hover:bg-green-700 transition whitespace-nowrap">
      Register Your Child
    </button>
  </div>
);

export const Course = () => {
  // Centralized data — easy to add more courses later
  const courses = [
    {
      image: full,
      title: "Full Time Alimiyyah",
      duration: "6 Yrs",
      mode: "On-Site/Online",
      startDate: "27th August",
      timings: ["9:10 am – 12:30 pm"],
    },
    {
      image: part,
      title: "Part Time Alimiyyah",
      duration: "7 Yrs",
      mode: "On-Site/Online",
      startDate: "27th August",
      timings: ["5:00 pm - 7:30 pm", "5:50 pm - 8:20 pm", "6:15 pm - 8:45 pm"],
    },
  ];

  return (
    <section
      id="course"
      className="relative container mx-auto py-20 md:py-40 text-white my-15 md:my-28"
    >
      {/* Section Heading */}
      <div className="lg:ml-[-10px]">
        <h2 className="sectionHead mb-[24px] ml-1">
          BEGIN YOUR ALIMIYYAH JOURNEY
        </h2>
        <p className="sectionSubHead mb-[24px] ml-1">
          Learn with Al-Qalam and bring Islamic knowledge to life every day with
          clarity and guidance.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl ml-1">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </section>
  );
};

export default Course;
