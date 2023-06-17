// import { Link } from "react-scroll";
// import image from "../assets/hero-img.svg";

// export function Main({ aos }: any) {
//   return (
//     <div className="bg-main-900">
//       <div className="text-white px-5 md:px-10 h-[752px]">
//         <div
//           className="flex flex-col md:flex-row justify-between pt-10 md:pt-14"
//           data-aos={aos}
//           data-aos-easing="ease-in-out-quad"
//         >
//           <div className="w-full md:w-2/3">
//             <h1 className="text-white font-pacifico text- md:text-5xl lg:text-7xl leading-[10px] md:leading-[95px]">
//               Ola,
//               <br /> Eu sou <span className="text-main-200">R</span>yan,
//               <br /> Desenvolvedor Web
//             </h1>
//             <p className="text-gray-400 mt-6 md:mt-10">
//               Desenvolvedor Frontend, Proficiente em React e Node
//             </p>
//             <button
//               type="button"
//               className="bg-main-200 py-3 px-8 md:px-12 rounded-md mt-5 md:mt-8 hover:bg-main-400"
//             >
//               Ver Projetos
//             </button>
//           </div>
//           <img src={image} alt="" className="w-full md:w-1/3 mt-10 md:mt-0" />
//         </div>
//       </div>
//     </div>
//   );
// }




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
        <div className="flex flex-col justify-between md:flex-row pt-14">
          <div>
            <h1 className="text-white font-pacifico text-3xl sm:text-7xl sm:leading-[95px] leading-[60px]">
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
          <img src={image} alt="" className="lg:w-2/6" />
        </div>
      </div>
    </div>
  );
}
