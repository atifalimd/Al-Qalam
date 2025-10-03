// import React from "react";
// import textbook from "../images/Text-Books.png";
// import Exam from "../images/Exams.png";
// import Syllabus from "../images/Syllabus.png";
// import Video from "../images/Video.png";
// import bgStudent from "../images/Student-BG.png";

// const cards = [
//   { title: "Textbook", image: textbook },
//   { title: "Exam", image: Exam },
//   { title: "Syllabus", image: Syllabus },
//   { title: "Video", image: Video },
// ];

// export const Student = () => {
//   return (
//     <section
//       id="student"
//       className="relative container mx-auto mt-32 py-24 px-4 text-white"
//     >
//       <h2 className="sectionHead text-left ml-3">Your Al-Qalam Companion</h2>
//       <p className="sectionSubHead mb-10 text-left ml-3">
//         Tools to guide you in every step of your Alimiyyah journey to knowledge
//         and success.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-left ml-3">
//         {cards.map((card) => (
//           <div
//             key={card.title}
//             className="bg-cover bg-center rounded-lg w-3/4 flex flex-col items-center justify-between shadow-lg p-4"
//             style={{ backgroundImage: `url(${bgStudent})` }}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full object-contain"
//             />
//             <p className="font-bold text-[#112549] mt-2">{card.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import textbook from "../images/Text-Books.png";
import Exam from "../images/Exams.png";
import Syllabus from "../images/Syllabus.png";
import Video from "../images/Video.png";
import bgStudent from "../images/Student-BG.png";

const cards = [
  { title: "Textbook", image: textbook, link: "/textbooks" },
  { title: "Exam", image: Exam, link: "/exam" },
  { title: "Syllabus", image: Syllabus, link: "/syllabus" },
  { title: "Video", image: Video, link: "/video" }, // create /video page if needed
];

export const Student = () => {
  return (
    <section
      id="student"
      className="relative container mx-auto min-h-screen py-40 px-4 text-white"
    >
      <h2 className="sectionHead text-left ml-3">Your Al-Qalam Companion</h2>
      <p className="sectionSubHead mb-10 text-left ml-3">
        Tools to guide you in every step of your Alimiyyah journey to knowledge
        and success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-left ml-3">
        {cards.map((card) => (
          <Link
            to={card.link}
            key={card.title}
            className="bg-cover bg-center rounded-lg w-3/4 flex flex-col items-center justify-between shadow-lg p-4 transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${bgStudent})` }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full object-contain"
            />
            <p className="font-bold text-[#112549] mt-2">{card.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
