import { useState } from "react";
import { Link } from "react-scroll";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-inter flex justify-between w-full h-14 pt-10 lg:pt-0 px-5 md:px-20 text-white bg-main-900 items-center">
      <div>
        <span className="text-main-200 font-bold">Ryan</span>
      </div>
      <nav className="flex items-center">
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} flex flex-col`}>
          <Link
            className="hover:text-main-200"
            to="about"
            smooth
            duration={500}
          >
            Sobre
          </Link>
          <Link
            className="hover:text-main-200"
            to="projects"
            smooth
            duration={500}
          >
            Projetos
          </Link>
          <Link
            className="hover:text-main-200"
            to="contact"
            smooth
            duration={500}
          >
            Contato
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            className="hover:text-main-200 cursor-pointer"
            to="about"
            smooth
            duration={500}
          >
            Sobre
          </Link>
          <Link
            className="hover:text-main-200 cursor-pointer"
            to="projects"
            smooth
            duration={500}
          >
            Projetos
          </Link>
          <Link
            className="hover:text-main-200 cursor-pointer"
            to="contact"
            smooth
            duration={500}
          >
            Contato
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
