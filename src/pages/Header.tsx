import { Link } from "react-scroll";

export function Header(){
    return(
        <div className="font-inter flex justify-between w-full h-14 px-20 text-white bg-main-900 items-center z-10">
          <div>
            <span className="text-main-200 font-bold ">Ryan</span>
          </div>
          <nav className="flex">
            <Link
              className="hover:text-main-200"
              to="about"
              smooth
              duration={500}
              style={{ cursor: "pointer", marginRight: 46 }}
            >
              About
            </Link>

            <Link
              className="hover:text-main-200"
              to="projects"
              smooth
              duration={500}
              style={{ cursor: "pointer", marginRight: 46 }}
            >
              Projects
            </Link>
            <Link
              className="hover:text-main-200"
              to="contact"
              smooth
              duration={500}
              style={{ cursor: "pointer" }}
            >
              Contact
            </Link>
          </nav>
        </div>
    )
}