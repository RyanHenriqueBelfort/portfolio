// import { Link } from "react-scroll";

// export function Header(){
//     return(
//         <div className="font-inter flex justify-between w-full h-14 px-20 text-white bg-main-900 items-center z-10">
//           <div>
//             <span className="text-main-200 font-bold ">Ryan</span>
//           </div>
//           <nav className="flex">
//             <Link
//               className="hover:text-main-200"
//               to="about"
//               smooth
//               duration={500}
//               style={{ cursor: "pointer", marginRight: 46 }}
//             >
//               About
//             </Link>

//             <Link
//               className="hover:text-main-200"
//               to="projects"
//               smooth
//               duration={500}
//               style={{ cursor: "pointer", marginRight: 46 }}
//             >
//               Projects
//             </Link>
//             <Link
//               className="hover:text-main-200"
//               to="contact"
//               smooth
//               duration={500}
//               style={{ cursor: "pointer" }}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//     )
// }

import { useState } from "react";
import { Link } from "react-scroll";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-inter flex justify-between w-full h-14 px-20 text-white bg-main-900 items-center z-10">
      <div>
        <span className="text-main-200 font-bold">Ryan</span>
      </div>
      <nav className="flex items-center">
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <Link
            className="block text-center py-2 hover:text-main-200 cursor-pointer"
            to="about"
            smooth
            duration={500}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            className="block text-center py-2 hover:text-main-200"
            to="projects"
            smooth
            duration={500}
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            className="block text-center py-2 hover:text-main-200"
            to="contact"
            smooth
            duration={500}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            className="hover:text-main-200"
            to="about"
            smooth
            duration={500}
          >
            About
          </Link>
          <Link
            className="hover:text-main-200"
            to="projects"
            smooth
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="hover:text-main-200"
            to="contact"
            smooth
            duration={500}
          >
            Contact
          </Link>
        </div>
        <button
          className="ml-4 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-white hover:text-main-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
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
      </nav>
    </div>
  );
}