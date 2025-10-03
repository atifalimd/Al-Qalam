import React from "react";
import book1 from "../images/Kubra.png";
import book2 from "../images/AsSughra.png";
import book3 from "../images/Wusta.png";

/* Books Data */
const books = [
  {
    id: 1,
    image: book1,
    title: "Nahw Book 1",
    description: "Al-Kubra fi an-Nahw",
    objectPosition: "center 35%", // custom crop
  },
  {
    id: 2,
    image: book2,
    title: "Nahw Book 2",
    description: "As-Sugra fi an-Nahw",
    objectPosition: "center 15%",
  },
  {
    id: 3,
    image: book3,
    title: "Nahw Book 3",
    description: "Al-Wusta fi an-Nahw",
    objectPosition: "center 15%",
  },
];

/* Reusable Book Card Component */
const BookCard = ({ image, title, description, objectPosition }) => (
  <div className="relative rounded-xl w-full max-w-[450px] overflow-hidden shadow-lg group">
    <img
      src={image}
      alt={title}
      className={`bg-cover bg-center rounded-t-3xl rounded-b-xl w-[350px] h-[300px] flex flex-col items-center shadow-lg transition-transform hover:scale-101`}
      style={{ objectPosition }}
    />

    {/* Overlay */}
    <div className="absolute bottom-0 left-0 w-[350px] bg-black/60 text-gray-200 p-3 rounded-b-lg text-center">
      <h3 className="text-lg  font-semibold">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  </div>
);

export const Nahw = () => {
  return (
    <section className="relative container mx-auto min-h-[calc(100vh-215px)] py-16 px-6 md:px-12 lg:px-20 text-white">
      {/* Section Heading */}
      <h2 className="w-full font-poppins font-extralight text-[22px] md:text-[28px] tracking-[10px] md:tracking-[20px] leading-snug -ml-13 mb-6 md:mb-10 text-left">
        Nahw Books
      </h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 -ml-13 justify-items-start">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};
