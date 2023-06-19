import image from "../assets/hero-img.svg";
import { GithubLogo } from "@phosphor-icons/react";

export function Main({ aos }: any) {
  return (
    <div className="bg-main-900 pt-10 lg:pt-20 ">
      <div
        className="0 text-white px-5 md:px-20  h-[752px]"
        data-aos={aos}
        data-aos-easing="ease-in-out-quad"
      >
        <div className="flex flex-col justify-between lg:flex-row pt-14 ">
          <div>
            <h1 className="text-white font-pacifico text-4xl sm:text-6xl md:text-[4rem] lg:text-7xl leading-[60px] sm:leading-[70px] md:leading-[70px] lg:leading-[95px] ">
              Ola,
              <br /> Eu sou <span className="text-main-200">R</span>yan,
              <br /> Desenvolverdor Web
            </h1>
            <p className="text-gray-400 mt-10">
              Desenvovedor Frontend, Proficiente em React e Node
            </p>
            <button
              type="button"
              className="bg-main-200  rounded-md mt-5 hover:bg-main-400 "
            >
              <a href="https://github.com/RyanHenriqueBelfort" target="_blank" className="flex items-center py-3 px-12">
                Ver Projetos
                <GithubLogo size={24} className="ml-2"/>
              </a>
            </button>
          </div>
          <img src={image} alt="" className="w-64 mt-10 lg:mt-0 md:mt-5 sm:w-96 lg:w-[400px] xl:w-auto" />
        </div>
      </div>
    </div>
  );
}
