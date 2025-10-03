// import React from "react";
// import footerImage from "../images/Footer-Image.png";
// import logo from "../images/FooterLogo.png";
// import { FaWhatsapp, FaTelegram, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6"; // X (Twitter)

// export const Footer = () => {
//   return (
//     <footer
//       id="footer"
//       className="flex flex-col bg-[#112549] text-white min-h-screen py-24 relative"
//     >
//       {/* Background image */}
//       <img
//         src={footerImage}
//         alt="Footer background"
//         className="inset-0 w-full h-[320px] object-cover object-top"
//       />

//       {/* Main Footer Content */}
//       <div className="container mx-auto px-6 py-12 relative">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
//           {/* Brand Section */}
//           <div>
//             <img src={logo} alt="Logo" className="w-40 mb-4" />
//             <h3 className="text-2xl font-medium leading-snug">
//               Al-Qalam <br /> Institute
//             </h3>
//             <p className="mt-4 text-sm text-gray-200">
//               6 Sylvan Ave, Leicester LE5 3SN
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6 text-white">
//               <a
//                 href="https://wa.me/1234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaWhatsapp className="w-6 h-6 hover:text-green-500 transition" />
//               </a>
//               <a href="https://x.com" target="_blank" rel="noopener noreferrer">
//                 <FaXTwitter className="w-6 h-6 hover:text-blue-400 transition" />
//               </a>
//               <a
//                 href="https://t.me/yourchannel"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaTelegram className="w-6 h-6 hover:text-sky-400 transition" />
//               </a>
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaYoutube className="w-6 h-6 hover:text-red-500 transition" />
//               </a>
//             </div>
//           </div>

//           {/* Student Hub */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Student Hub</h4>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Syllabus</li>
//               <li>Text Books</li>
//               <li>Exams</li>
//               <li>Videos</li>
//               <li>Computing</li>
//               <li>Study Guides</li>
//             </ul>
//           </div>

//           {/* Core Material */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Core Material</h4>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Qur’an</li>
//               <li>Seerah</li>
//               <li>Misc.</li>
//             </ul>
//           </div>

//           {/* Islamic Studies */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Islamic Studies</h4>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Nahw</li>
//               <li>Sarf</li>
//               <li>Fiqh</li>
//               <li>Hadith</li>
//             </ul>
//           </div>

//           {/* Language & Logic */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Language & Logic</h4>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Urdu</li>
//               <li>Literature</li>
//               <li>Logic</li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-600 my-6"></div>

//         {/* Footer Bottom */}
//         <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
//           <p>© 2025 Al-Qalam Institute. All rights reserved.</p>
//           <div className="flex items-center gap-2 mt-4 md:mt-0">
//             <span>Powered by Al-Qalam</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import footerImage from "../images/Footer-Image.png";
import logo from "../images/FooterLogo.png";
import { FaWhatsapp, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter)

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col bg-[#112549] text-white min-h-screen py-24 relative"
    >
      {/* Background image */}
      <img
        src={footerImage}
        alt="Footer background"
        className="inset-0 w-full h-[320px] object-cover object-top"
      />

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div>
            <img src={logo} alt="Logo" className="w-40 mb-4" />
            <h3 className="text-2xl font-medium leading-snug">
              Al-Qalam <br /> Institute
            </h3>
            <p className="mt-4 text-sm text-gray-200">
              6 Sylvan Ave, Leicester LE5 3SN
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-white">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-6 h-6 hover:text-green-500 transition" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-6 h-6 hover:text-blue-400 transition" />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="w-6 h-6 hover:text-sky-400 transition" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-6 h-6 hover:text-red-500 transition" />
              </a>
            </div>
          </div>

          {/* Student Hub */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Student Hub</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/syllabus" className="hover:text-green-400">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link to="/textbooks" className="hover:text-green-400">
                  Text Books
                </Link>
              </li>
              <li>
                <Link to="/exam" className="hover:text-green-400">
                  Exams
                </Link>
              </li>
              <li>
                <Link to="/video" className="hover:text-green-400">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/computing" className="hover:text-green-400">
                  Computing
                </Link>
              </li>
              <li>
                <Link to="/study" className="hover:text-green-400">
                  Study Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Material */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Core Material</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/quran" className="hover:text-green-400">
                  Qur’an
                </Link>
              </li>
              <li>
                <Link to="/seerah" className="hover:text-green-400">
                  Seerah
                </Link>
              </li>
              <li>
                <Link to="/misc" className="hover:text-green-400">
                  Misc.
                </Link>
              </li>
            </ul>
          </div>

          {/* Islamic Studies */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Islamic Studies</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/nahw" className="hover:text-green-400">
                  Nahw
                </Link>
              </li>
              <li>
                <Link to="/sarf" className="hover:text-green-400">
                  Sarf
                </Link>
              </li>
              <li>
                <Link to="/fiqh" className="hover:text-green-400">
                  Fiqh
                </Link>
              </li>
              <li>
                <Link to="/hadith" className="hover:text-green-400">
                  Hadith
                </Link>
              </li>
            </ul>
          </div>

          {/* Language & Logic */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Language & Logic</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/urdu" className="hover:text-green-400">
                  Urdu
                </Link>
              </li>
              <li>
                <Link to="/literature" className="hover:text-green-400">
                  Literature
                </Link>
              </li>
              <li>
                <Link to="/logic" className="hover:text-green-400">
                  Logic
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <p>© 2025 Al-Qalam Institute. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Powered by Al-Qalam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
