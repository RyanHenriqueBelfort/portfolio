import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";

import {
  Envelope,
  FacebookLogo,
  FileArrowDown,
  InstagramLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  Phone,
  TwitterLogo,
} from "@phosphor-icons/react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

  const notifySuccess = () =>
    toast.success("Email enviado com sucesso", {
      draggable: true,
      closeOnClick: true,
    });
  const notifyError = () =>
    toast.error("Falha ao enviar", {
      draggable: true,
      closeOnClick: true,
    });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_uy0cpj8",
        "template_r48d4fg",
        formRef.current!,
        "7MnGgDsZ2qVrtnM5z"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          notifySuccess();
        },
        (error) => {
          notifyError();
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-main-700 px-5 sm:px-10 md:px-20 flex flex-col pb-32"
    >
      <ToastContainer />
      <h1 className="text-3xl sm:text-4xl font-bold text-white font-inter pt-10 sm:pt-20 border-b-8 border-main-200 flex w-36">
        Contato
      </h1>
      <div className="mt-14 sm:mt-14 flex flex-col sm:flex-row w-full ">
        <div className=" sm:w-1/2">
          <div className="flex items-center mb-6">
            <Envelope size={24} color="rgb(116 119 255)" />
            <span className="ml-4 text-white text-xs sm:text-sm font-inter">
              ryanhenriqueab@gmail.com
            </span>
          </div>
          <div className="flex items-center mb-20">
            <Phone size={24} color="rgb(116 119 255)" />
            <span className="ml-4 text-white text-xs sm:text-sm font-inter">
              +55 (37) 99955-5120
            </span>
          </div>
          <div className="flex gap-4 mb-11">
            <a
              href="https://www.facebook.com/ryanhenrique.assis"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <InstagramLogo size={32} color="#E1306C" />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-henrique-assis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <LinkedinLogo size={32} color="#0072b1" />
            </a>
            <a
              href="https://twitter.com/Ryan1v9_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <TwitterLogo size={32} color="#1DA1F2" />
            </a>
          </div>
          <a href=".././assets/Curriculo.pdf" download>
            <button className="bg-main-200 p-2 rounded-md w-full sm:w-2/6  hover:brightness-75 hover:scale-105 duration-500 text-white text-sm sm:text-lg flex justify-center items-center gap-2">
              Dowload CV
              <FileArrowDown size={24} />
            </button>
          </a>
        </div>
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-main-700 outline-none border-b text-white border-main-200 placeholder:text-gray-400 mb-6 sm:w-5/6"
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              value={email}
              className="bg-main-700 outline-none border-b text-white border-main-200 placeholder:text-gray-400 mb-6 sm:w-5/6"
            />
            <textarea
              placeholder="Digite sua mensagem..."
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              cols={50}
              className="placeholder:text-gray-400 rounded-sm outline-none bg-main-700 border border-main-200 p-2 sm:w-5/6 text-white"
            />
            <div className="cursor-pointer bg-main-200 mt-4 p-2 rounded-md w-full sm:w-2/6 hover:brightness-75 hover:scale-105 duration-500 text-white text-sm sm:text-lg flex justify-center items-center gap-2">
              <PaperPlaneTilt
                size={24}
                color="#fff"
              />
              <input
                type="submit"
                value="Send"
                className="bg-main-200 cursor-pointer "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
