import meImg from "../assets/about.svg";

import iconJs from "../assets/iconJavaScript.svg";
import iconCss from "../assets/iconcss.svg";
import iconReact from "../assets/icons8-react.svg";
import iconReactNative from "../assets/icons8-react-native.svg";
import iconNode from "../assets/icons8-node-js.svg";
import iconTypeScript from "../assets/icons8-typescript.svg";
import { Tooltip } from "../utils/tooltip";

export function Hero({ aos }: any) {
  return (
    <div className="bg-main-700">
      <div id="about" className="pb-10 px-5 sm:px-10 md:px-20 xl:px-0 xl:pl-20 xl:pr-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-inter pt-10 sm:pt-20 border-b-8 border-main-200 flex w-48">
          Sobre Mim
        </h1>
        <div className="flex flex-col xl:flex-row lg:justify-between mt-8 sm:mt-11 w-full">
          <div className="w-full xl:w-2/6 mt-8 sm:mt-0">
            <p className="text-white text-sm sm:text-base leading-7">
              Olá! Meu nome é Ryan e sou um desenvolvedor front-end/mobile com
              cerca de 2 anos de experiência. Sou apaixonado por criar
              interfaces interativas e funcionais que proporcionam uma
              experiência excepcional aos usuários. Minha experiência inclui o
              desenvolvimento responsivo de sites e aplicativos, otimização de
              desempenho, implementação de recursos interativos e integração de
              APIs. Ao longo dos anos, tenho me mantido atualizado com as mais
              recentes tendências e tecnologias do mundo front-end, como
              frameworks JavaScript, como React e React Native, que me permitem
              criar interfaces dinâmicas e escaláveis. Minha abordagem de
              trabalho é focada na qualidade, usabilidade e na busca constante
              por soluções inovadoras. Acredito na importância da colaboração e
              da comunicação eficaz para o sucesso de um projeto. Sou um
              profissional comprometido, organizado e orientado a resultados.
              Busco sempre entender as necessidades do cliente e entregar 
              soluções que atendam às suas expectativas. Fique à vontade para
              explorar meu portfólio e conhecer mais sobre meu trabalho. Se você
              está em busca de um desenvolvedor front-end/mobile dedicado, que
              valoriza a qualidade e o profissionalismo, ficarei feliz em
              colaborar com você em seu próximo projeto. Entre em contato comigo
              por meio das informações fornecidas na contato desta página.
              Obrigado por visitar meu portfólio e espero ter a oportunidade de
              trabalhar juntos!
            </p>
            <p className="font-inter font-bold mt-6 text-base sm:text-lg text-white">
              Tecnologias que já trabalhei
            </p>
            <div className="flex gap-10 xl:gap-0 xl:justify-between w-2/3 sm:w-2/6 text-white mt-3">
              <div className="flex flex-col">
                <Tooltip content={"CSS"} direction="top">
                  <img
                    src={iconCss}
                    alt=""
                    className="hover:scale-125 hover:duration-[400ms]"
                  />
                </Tooltip>
                <Tooltip content={"JavaScript"} direction="top">
                  <img
                    src={iconJs}
                    alt=""
                    className="hover:scale-125 mt-2 hover:duration-[400ms]"
                  />
                </Tooltip>
                <Tooltip content={"React"} direction="top">
                  <img
                    src={iconReactNative}
                    alt=""
                    className="hover:scale-125 mt-2 hover:duration-[400ms]"
                  />
                </Tooltip>
              </div>
              <div className="flex flex-col">
                <Tooltip content={"React Native"} direction="top">
                  <img
                    src={iconReactNative}
                    alt=""
                    className="hover:scale-125 hover:duration-[400ms]"
                  />
                </Tooltip>
                <Tooltip content={"TypeScript"} direction="top">
                  <img
                    src={iconTypeScript}
                    alt=""
                    className="hover:scale-125 mt-2 hover:duration-[400ms]"
                  />
                </Tooltip>
                <Tooltip content={"Node.js"} direction="top">
                  <img
                    src={iconNode}
                    alt=""
                    className="hover:scale-125 mt-2 hover:duration-[400ms]"
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={meImg} alt="" className="w-64 mt-10 lg:mt-0 sm:w-96 lg:-[500px] xl:w-[600px]" />
            <a href="http://www.freepik.com" className="text-gray-400">Designed by stories / Freepik</a>
          </div>
        </div>
      </div>
    </div>
  );
}
