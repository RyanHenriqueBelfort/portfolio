import { CardProject } from "../components/CardProject";

import site from '../assets/site.png'
import dtMoney from '../assets/dtMoney.png'
import locon from '../assets/locon.png'
import todo from '../assets/todo.png'
import eventon from '../assets/eventon.png'


export function Projects() {
  return (
    <div id="projects" className="bg-main-900 px-20 pt-20 pb-20">
      <h1 className="text-4xl font-bold text-white font-inter pt-20 border-b-8 border-main-200 flex w-36">
        Projetos
      </h1>
      <div
        className="flex justify-between mt-11 w-11/12"
        data-aos="fade-down"
        data-aos-easing="ease-in-out-quad"
      >
        <div className="w-full flex flex-col">
          <div className="w-3/6">
            <p className="text-white text-base capitalize leading-9 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique enim ac felis cursus, ut wadacursus ligula cursus. Duis varius
              nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc viverra
              tempus eleifend.
            </p>
          </div>
          <div className="flex gap-10 w-full flex-wrap">
            <CardProject photo={[site, locon]} name='Site' description="Lorem ipsum dddolor sit amet, consectetur adipiscing elit. Donec
              tristique enim ac felis cursus, ut cursus ligula dwada dwadad ccasc caw nsecdolor awdwdwa cawcawca wcawdawda ccursus. Duis varius
              nisi ut nisl hendrerit," link="https://site-fapam.vercel.app/"/>
            <CardProject photo={[locon, dtMoney,  eventon]} name="DtMoney" description="dolor sit amet, consectetur adipiscing elit. Donec
              tristique enim ac felis cursus, ut cursus ligula cursus. Duis varius
              nisi ut nisl hendrerit," link="https://site-fapam.vercel.app/"/>
            <CardProject photo={[dtMoney, locon, eventon]} name="LocOn" description="rsus, ut cursus ligula cursus. Duis varius
              nisi ut nisl hendrerit, eget venenatis nisi luctus. Nunc viverra
              tempus eleifend." link="https://site-fapam.vercel.app/"/>
            <CardProject photo={[eventon, site, dtMoney ]} name="Todo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique enim ac felis" link="https://site-fapam.vercel.app/"/>
            <CardProject photo={[dtMoney, locon, eventon]} name="Event on" description="eget venenatis nisi luctus. Nunc viverra
              tempus eleifend." link="https://site-fapam.vercel.app/"/>
          </div>
        </div>
      </div>
    </div>
  );
}
