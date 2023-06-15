import { Link } from "react-scroll";

import image from "../assets/hero-img.svg";

export function Main({ aos }: any) {
  return (
    <div className="bg-main-900">
      <div
        className="0 text-white px-20 h-[752px]"
        data-aos={aos}
        data-aos-easing="ease-in-out-quad"
      >
        <div className="flex justify-between pt-14">
          <div>
            <h1 className="text-white font-pacifico text-7xl leading-[95px]">
              Ola,
              <br /> Eu sou <span className="text-main-200">R</span>yan,
              <br /> Desenvolverdor Web
            </h1>
            <p className="text-gray-400 mt-10">
              Desenvovedor Frontend, Proficiente em React e Node
            </p>
            <button
              type="button"
              className="bg-main-200 py-3 px-12 rounded-md mt-5 hover:bg-main-400"
            >
              Ver Projetos
            </button>
          </div>
          <img src={image} alt="" className="w-2/6" />
        </div>
      </div>
    </div>
  );
}
