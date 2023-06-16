import {
  FacebookLogo,
  FileArrowDown,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";

export function Contact() {
  return (
    <div
      id="contact"
      className="bg-main-900 px-20 pt-20 flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold text-white font-inter pt-20 border-b-8 border-main-200 flex w-36">
        Contato
      </h1>
      <div className="mt-14 flex w-10/12 justify-between">
        <div className=" ">
          <div className="flex items-center">
            <PaperPlaneTilt size={24} color="rgb(116 119 255)" />
            <span className="ml-6 text-white text-sm font-inter">
              ryanhenriqueab@gmail.com
            </span>
          </div>
          <div className="mt-6 flex items-center">
            <Phone size={24} color="rgb(116 119 255)" />
            <span className="ml-6 text-white text-sm font-inter">
              +55 (37) 99955-5120
            </span>
          </div>
          <div className="mt-10 flex gap-4">
            <a
              href="https://www.facebook.com/ryanhenrique.assis"
              target="_blank"
            >
              <FacebookLogo
                size={32}
                color="#4267B2"
                className="hover:opacity-70"
              />
            </a>
            <a
              href="https://www.instagram.com/ryanhenrique12_/"
              target="_blank"
              className="hover:opacity-70"
            >
              <InstagramLogo size={32} color="#E1306C" />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-henrique-assis/"
              target="_blank"
              className="hover:opacity-70"
            >
              <LinkedinLogo size={32} color="#0072b1" />
            </a>

            <a
              href="https://twitter.com/Ryan1v9_"
              target="_blank"
              className="hover:opacity-70"
            >
              <TwitterLogo size={32} color="#1DA1F2" />
            </a>
          </div>
          <a href=".././assets/Curriculo.pdf" download>
            <button className="bg-main-200 p-2 rounded-md w-full hover:brightness-75 hover:scale-105 duration-500 mt-16 text-white text-lg flex justify-center items-center gap-2 mb-44">
              Dowload CV
              <FileArrowDown size={24} />
            </button>
          </a>
        </div>
        <div className="">
          <form action="">
           
          </form>
        </div>
      </div>
    </div>
  );
}
