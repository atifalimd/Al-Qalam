import React from "react";
import bgImage from "../images/ExamBg.jpg";

/* ===========================
   Reusable Card Component
   =========================== */

const Card = ({ title, description, bgImage, strokeColors, fillColors }) => {
  return (
    <div
      className="relative w-full max-w-[450px] min-h-[200px] rounded-2xl p-[3px]"
      style={{
        background: `linear-gradient(90deg, ${strokeColors.join(", ")})`,
      }}
    >
      <div
        className="w-full h-full rounded-2xl relative overflow-hidden flex flex-col px-6 py-4"
        style={{
          background: `linear-gradient(180deg, ${fillColors.join(", ")})`,
        }}
      >
        {/* Background Image */}
        {bgImage && (
          <img
            src={bgImage}
            alt="Card Background"
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
        )}

        {/* Title with fixed height wrapper */}
        <div className="relative z-10 min-h-[50px] flex items-center">
          <h3 className="font-poppins font-medium text-[20px] text-black">
            {title}
          </h3>
        </div>

        {/* Description always starts at same Y-position */}
        <div className="relative z-10 mt-2">
          <p className="font-poppins text-[13px] leading-[18px] text-[#112549]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ===========================
   Grid of Cards
   =========================== */
const CardsGrid = ({ cards }) => {
  return (
    <div
      className="
        grid 
        grid-cols-1 sm:grid-cols-2 
        gap-x-6 sm:gap-x-[40px] 
        gap-y-6 sm:gap-y-[25px] 
        
      "
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          bgImage={card.bgImage}
          strokeColors={card.strokeColors}
          fillColors={card.fillColors}
        />
      ))}
    </div>
  );
};

/* ===========================
   Exam Page
   =========================== */
export const Exam = () => {
  const cards = [
    {
      id: 1,
      title: "📚 Revision Schedule",
      description: (
        <div>
          <p className="text-[13px]">
            Revision will commence
            <span className="text-red-800 font-bold text-base"> 10 DAYS </span>
            of madrasah before the start of the first exam for that term.
          </p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#D6BB80 0%", "#B2DFBE 25%", "#B05FD9 50%", "#9C2525 75%"],
      fillColors: ["#C1E8B4 5%", "#376142 100%"],
    },
    {
      id: 2,
      title: "📝 Marking & Points",
      description: (
        <div className="text-[13px]">
          <p>Points are allocated based on classroom hours:</p>
          <p>Full-time: 6 lessons/day → 150 points/term → 600/year</p>
          <p>Part-time: 5 lessons/day → 125 points/term → 500/year</p>
          <p>Exams cover 25 or 50 points depending on material.</p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#FF7E5F 0%", "#FEB47B 25%", "#FF6F61 50%", "#C44536 75%"],
      fillColors: ["#FDEB71 5%", "#F8D800 100%"],
    },
    {
      id: 3,
      title: "📈 Passing Criteria",
      description: (
        <div className="text-[13px]">
          <p>
            Automatic promotion requires 80% overall PLUS ≥70% in each book.
          </p>
          <p>
            Below thresholds may be reviewed individually, factoring in
            attendance and effort.
          </p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#36D1DC 0%", "#5B86E5 25%", "#3A0CA3 50%", "#03045E 75%"],
      fillColors: ["#FBD3E9 5%", "#BB377D 100%"],
    },
    {
      id: 4,
      title: "🧪 Exam Format & Resources",
      description: (
        <div className="text-[13px]">
          <p>
            Exams follow term content but may vary from textbooks or past
            questions.
          </p>
          <p>Past papers are accessible under Syllabus Details.</p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#A8E063 0%", "#56AB2F 25%", "#3B7A57 50%", "#1A4314 75%"],
      fillColors: ["#A1C4FD 5%", "#C2E9FB 100%"],
    },

    {
      id: 5,
      title: "💡Useful Tips",
      description: (
        <div className="text-[13px]">
          <p>
            Write using black or blue pen only; cross out errors with a single
            line.
          </p>
          <p>Ensure your name and student number are clearly written.</p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#FF9A9E 0%", "#F76C6C 25%", "#C2185B 50%", "#6A0572 75%"],
      fillColors: ["#FCE38A 5%", "#F38181 100%"],
    },
    {
      id: 6,
      title: "📜 Exam Rules",
      description: (
        <div className="text-[13px]">
          <p>
            Write using black or blue pen only; cross out errors with a single
            line.
          </p>
          <p>Ensure your name and student number are clearly written.</p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#4FACFE 0%", "#43E97B 25%", "#11998E 50%", "#006A71 75%"],
      fillColors: ["#A8EDEA 5%", "#FED6E3 100%"],
    },
    {
      id: 7,
      title: "🕒 Attendance (Onsite Exams)",
      description: (
        <div className="text-[13px]">
          <p>
            Students in Leicester must attend in person—online submissions are
            invalid.
          </p>
          <p>
            Late arrivals are marked as non-invigilated; leaving mid-exam also
            results in downgraded status..
          </p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#FDC830 0%", "#F37335 25%", "#D35400 50%", "#6E260E 75%"],
      fillColors: ["#FFDEE9 5%", "#B5FFFC 100%"],
    },
    {
      id: 8,
      title: "🌐  Online Exam Requirements",
      description: (
        <div className="text-[13px]">
          <p>
            Exam papers delivered via the learning platform. Camera must stay
            on, clearly showing the student and writing area.
          </p>
          <p>
            Any issues may result in verbal assessments. Sisters have private
            virtual rooms.
          </p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#C3AED6 0%", "#9F86C0 25%", "#5E60CE 50%", "#240046 75%"],
      fillColors: ["#D4FC79 5%", "#96E6A1 100%"],
    },
    {
      id: 9,
      title: "📤 Submission Process",
      description: (
        <div className="text-[13px]">
          <p>
            Submission cut-offs: Full-time: 12:00 PM (UK) Part-time: Sisters at
            7:30 PM; Brothers Session 1 at 7:30 PM / Session 2 at 8:45 PM
          </p>
          <p>Late submissions may incur a 10% mark deduction.</p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#D9F8C4 0%", "#99F2C8 25%", "#2D6A4F 50%", "#014F43 75%"],
      fillColors: ["#84FAB0 5%", "#8FD3F4 100%"],
    },
    {
      id: 10,
      title: "⏰ Deadlines & Penalties",
      description: (
        <div className="text-[13px]">
          <p>
            Submission cut-offs: Full-time: 12:00 PM (UK) Part-time: Sisters at
            7:30 PM; Brothers Session 1 at 7:30 PM / Session 2 at 8:45 PM
          </p>
          <p>Late submissions may incur a 10% mark deduction.</p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#FF6F61 0%", "#FF5C8A 25%", "#D63384 50%", "#800F2F 75%"],
      fillColors: ["#FCCB90 5%", "#D57EEB 100%"],
    },
    {
      id: 11,
      title: "⚠️ Exceptional Circumstances",
      description: (
        <div className="text-[13px]">
          <p>
            Contact admin in advance if unable to attend due to serious issues.
            Early/late exams aren’t permitted.
          </p>
          <p>
            Oral exams may be administered to verify written responses; academic
            misconduct leads to immediate removal.
          </p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#89CFF0 0%", "#4682B4 25%", "#1D4ED8 50%", "#0A1172 75%"],
      fillColors: ["#F6D365 5%", "#FDA085 100%"],
    },
    {
      id: 12,
      title: "🎯 Results",
      description: (
        <div className="text-[13px]">
          <p>
            Expect returned papers/results within 21 madrasah days post-exams.
          </p>
          <p>
            Expect returned papers/results within 21 madrasah days post-exams.
          </p>
        </div>
      ),
      bgImage: bgImage,
      strokeColors: ["#FFD1BA 0%", "#FFABAB 25%", "#9D4EDD 50%", "#581845 75%"],
      fillColors: ["#E0C3FC 5%", "#8EC5FC 100%"],
    },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-215px)] flex justify-start px-4 -ml-1">
      <div className="w-full py-12 relative container mx-auto">
        {/* Section Heading */}
        <h2 className="w-full font-poppins font-extralight text-[22px] md:text-[28px] tracking-[10px] md:tracking-[20px] leading-snug mb-6 md:mb-10 text-left">
          ASSESSMENT &amp; COURSEWORK
        </h2>

        {/* Cards Grid */}
        <CardsGrid cards={cards} />
      </div>
    </div>
  );
};
