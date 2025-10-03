// import ResourceBg from "../images/ResourceBg.png";
// import React from "react";

// export const Resources = () => {
//   const cards = [
//     {
//       title: "Core Material",
//       bg: ResourceBg,
//       topics: ["Quran", "Seerah", "Misc"],
//     },
//     {
//       title: "Islamic Studies",
//       bg: ResourceBg,
//       topics: ["Nahw", "Sarf", "Hadith", "Fiqh"],
//     },
//     {
//       title: "Language & Logic",
//       bg: ResourceBg,
//       topics: ["Urdu", "Literature", "Logic"],
//     },
//   ];

//   return (
//     <section
//       id="resource"
//       className="relative container mx-auto mt-[40px] py-36"
//     >
//       {/* Heading */}
//       <h1 className="sectionHead mb-[24px] -ml-1">YOUR LEARNING LIBRARY</h1>
//       <p className="sectionSubHead mb-[24px] -ml-1">
//         Access every Quran, Hadith, and Islamic studies resource to learn,
//         practice, and grow on your Alimiyyah journey
//       </p>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 w-full max-w-xs md:max-w-xl lg:max-w-5xl -ml-1">
//         {cards.map((card) => (
//           <div
//             key={card.title}
//             className="relative bg-cover bg-center rounded-lg shadow-lg h-[350px] flex flex-col justify-end p-4"
//             style={{ backgroundImage: `url(${card.bg})` }}
//           >
//             <div className="min-h-[180px]">
//               <h2 className="text-[#112549] font-card-heading font-[var(--card-heading-font-weight)] text-xl md:text-2xl tracking-[var(--card-heading-letter-spacing)] mb-2">
//                 {card.title}
//               </h2>
//               <ul className="text-[#112549] font-card-details font-[var(--card-details-font-weight)] text-sm md:text-base leading-relaxed space-y-1">
//                 {card.topics.map((topic) => (
//                   <li key={topic}>{topic}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Resources;

import ResourceBg from "../images/ResourceBg.png";
import React from "react";
import { Link } from "react-router-dom";

export const Resources = () => {
  const cards = [
    {
      title: "Core Material",
      bg: ResourceBg,
      topics: [
        { name: "Quran", path: "/quran" },
        { name: "Seerah", path: "/seerah" },
        { name: "Misc", path: "/misc" },
      ],
    },
    {
      title: "Islamic Studies",
      bg: ResourceBg,
      topics: [
        { name: "Nahw", path: "/nahw" },
        { name: "Sarf", path: "/sarf" },
        { name: "Hadith", path: "/hadith" },
        { name: "Fiqh", path: "/fiqh" },
      ],
    },
    {
      title: "Language & Logic",
      bg: ResourceBg,
      topics: [
        { name: "Urdu", path: "/urdu" },
        { name: "Literature", path: "/literature" },
        { name: "Logic", path: "/logic" },
      ],
    },
  ];

  return (
    <section
      id="resource"
      className="relative container mx-auto mt-[40px] py-36"
    >
      {/* Heading */}
      <h1 className="sectionHead mb-[24px] -ml-1">YOUR LEARNING LIBRARY</h1>
      <p className="sectionSubHead mb-[24px] -ml-1">
        Access every Quran, Hadith, and Islamic studies resource to learn,
        practice, and grow on your Alimiyyah journey
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 w-full max-w-xs md:max-w-xl lg:max-w-5xl -ml-1">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative bg-cover bg-center rounded-lg shadow-lg h-[350px] flex flex-col justify-end p-4"
            style={{ backgroundImage: `url(${card.bg})` }}
          >
            <div className="min-h-[180px]">
              <h2 className="text-[#112549] font-card-heading font-[var(--card-heading-font-weight)] text-xl md:text-2xl tracking-[var(--card-heading-letter-spacing)] mb-2">
                {card.title}
              </h2>
              <ul className="text-[#112549] font-card-details font-[var(--card-details-font-weight)] text-sm md:text-base leading-relaxed space-y-1">
                {card.topics.map((topic) => (
                  <li key={topic.name}>
                    <Link
                      to={topic.path}
                      className="hover:underline hover:text-blue-700 transition"
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
