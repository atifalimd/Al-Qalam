import React from "react";
import book1 from "../images/AtTasreef.png";
import book2 from "../images/AlWusta.png";

/* =====================
   Books Data
   ===================== */
const books = [
  {
    id: 1,
    image: book1,
    title: "Tasreef Book 1",
    description: "As-Sugra fi at-Tasreef",
    objectPosition: "center 10%",
  },
  {
    id: 2,
    image: book2,
    title: "Tasreef Book 2",
    description: "Al-Wusta fi at-Tasreef",
    objectPosition: "center 15%",
  },
];

/* =====================
   Reusable Book Card
   ===================== */
const BookCard = ({ image, title, description, objectPosition }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg group w-full max-w-sm">
    {/* Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
      style={{ objectPosition }}
    />

    {/* Overlay */}
    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-gray-200 p-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  </div>
);

/* =====================
   Section Component
   ===================== */
export const Sughra = () => {
  return (
    <section className="relative container mx-auto min-h-[calc(100vh-215px)] flex flex-col justify-start py-16 px-6 md:px-12 lg:px-20 text-white">
      {/* Section Heading */}
      <h2 className="w-full font-poppins font-extralight text-[22px] md:text-[28px] tracking-[10px] md:tracking-[20px] leading-snug mb-6 md:mb-10 text-center lg:text-left -ml-12">
        Tasreef Books
      </h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -ml-24 gap-8 place-items-center">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};
