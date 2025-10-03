// NavBar.jsx
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // smooth scroll
import logo from "../images/logo.svg";

const links = [
  { name: "Home", to: "/#" },
  { name: "About", to: "/#about" },
  { name: "Course", to: "/#course" },
  { name: "Resources", to: "/#resource" },
  { name: "Student Hub", to: "/#student" },
  { name: "Contact", to: "/#footer" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#112549] text-white shadow-lg">
      <div className="flex items-end justify-between px-6 lg:px-5 lg:container mx-auto h-20">
        {/* Logo */}
        <Link smooth to="/#" className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <p className="mt-1 font-semibold text-lg">Al-Qalam Institute</p>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              smooth
              to={link.to}
              className="text-base hover:text-green-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button for desktop */}
        <div className="hidden lg:block">
          <Link smooth to="/#footer">
            <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-base font-medium transition-colors whitespace-nowrap">
              Register Now
            </button>
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="lg:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-white mb-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 bg-[#112549]">
          {links.map((link) => (
            <Link
              key={link.name}
              smooth
              to={link.to}
              className="block hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link smooth to="/#footer">
            <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap">
              Register Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};
