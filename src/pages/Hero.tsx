import aboutImg from "../assets/about-img.svg";

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
      <div
        id="about"
        className=" pb-20 px-20"
      >
        <h1 className="text-4xl font-bold text-white font-inter pt-20 border-b-8 border-main-200 flex w-48">
          Sobre Mim
        </h1>
        <div className="flex justify-between mt-11 w-11/12" data-aos='fade-down' data-aos-easing="ease-in-out-quad">
          <div className="w-2/6">
            <p className="text-white text-base capitalize leading-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique enim ac felis cursus, ut cursus ligula cursus. Duis
              varius nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc
              viverra tempus eleifend. Sed posuere augue non nulla consectetur
              hendrerit. In molestie urna in viverra pulvinar. Aenean facilisis
              id massa pretium lobortis Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec tristique enim ac felis cursus, ut cursus
              ligula cursus. Duis varius nisi ut nisl hendrerit, eget venenatis
              nisi luctus. Nunc
            </p>
            <p className="font-inter font-bold mt-8 text-lg text-white">
              Tecnolgias que já trabalhei
            </p>
            <div className="flex justify-between w-2/6 text-white mt-3">
              <div className="flex flex-col" data-aos='fade-down' data-aos-easing="ease-in-out-quad">
                <Tooltip content={"Css"} direction="top">
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
              <div className="flex flex-col" data-aos='fade-down' data-aos-easing="ease-in-out-quad">
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
          <img src={aboutImg} alt="" className="w-[400px]" />
        </div>
      </div>
    </div>
  );
}
