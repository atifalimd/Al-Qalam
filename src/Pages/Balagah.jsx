import React from "react";
import book1 from "../images/DuroosBalagah.png";

/* =====================
   Books Data
   ===================== */
const books = [
  {
    id: 1,
    image: book1,
    title: "Balagah Book 1",
    description: "Duroos al-Balagah",
    objectPosition: "center 18%",
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
export const Balagah = () => {
  return (
    <section className=" min-h-500 flex flex-col justify-start py-16 px-6 md:px-12 lg:px-20 text-white">
      {/* Section Heading */}
      <h2 className="w-full font-poppins font-extralight text-[22px] md:text-[28px] tracking-[10px] md:tracking-[20px] leading-snug mb-6 md:mb-10 text-left ml-12">
        Balagah Books
      </h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-left ml-12">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};
