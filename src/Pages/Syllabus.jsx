import BoyFull from "../images/SyllabusBoyFull.png";
import GirlFull from "../images/SyllabusGirlFull.png";
import Part from "../images/SyllabusPart.png";
import Bg from "../images/Student-BG.png";

const syllabusCards = [
  { src: BoyFull, alt: "Full-Time Brothers", label: "Full-Time Brothers" },
  { src: GirlFull, alt: "Full-Time Sisters", label: "Full-Time Sisters" },
  { src: Part, alt: "Part-Time", label: "Part-Time" },
];

export const Syllabus = () => {
  return (
    <section
      id="syllabus"
      className="relative container mx-auto min-h-[calc(100vh-215px)] px-4 py-6 text-white"
    >
      {/* Section Heading */}
      <h2 className="w-full font-poppins font-extralight text-[22px] md:text-[28px] tracking-[10px] md:tracking-[20px] leading-snug mb-6 md:mb-10 text-left">
        Syllabus Overview
      </h2>
      <p className="sectionSubHead mb-8 ml-3">AQI Syllabus</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-start ml-4">
        {syllabusCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-cover bg-center rounded-t-3xl rounded-b-xl w-[280px] h-[260px] flex flex-col items-center shadow-lg transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${Bg})` }}
          >
            <img
              src={card.src}
              alt={card.alt}
              className="w-[260px] h-[180px] object-contain mb-3"
            />
            <p className="font-bold text-[#112549]">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
