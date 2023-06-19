import { CardProject } from "../components/CardProject";

import eventon1 from "../assets/eventon/0.png";
import eventon2 from "../assets/eventon/1.png";
import eventon3 from "../assets/eventon/2.png";
import eventon4 from "../assets/eventon/3.png";

import site1 from "../assets/site/1.png";
import site2 from "../assets/site/2.png";
import site3 from "../assets/site/3.png";

import dtMoney1 from "../assets/dtMoney/0.png";
import dtMoney2 from "../assets/dtMoney/1.png";
import dtMoney3 from "../assets/dtMoney/2.png";

import locOn1 from "../assets/locOn/1.png";
import locOn2 from "../assets/locOn/2.png";

import todo1 from "../assets/Todo/1.png";
import todo2 from "../assets/Todo/2.png";
import todo3 from "../assets/Todo/3.png";

import pomdoro1 from "../assets/pomodoro/1.png";
import pomdoro2 from "../assets/pomodoro/2.png";
import pomdoro3 from "../assets/pomodoro/3.png";

import team1 from '../assets/team/1.png'
import team2 from '../assets/team/2.png'
import team3 from '../assets/team/3.png'

export function Projects() {
  return (
    <div
      id="projects"
      className="bg-main-900 pl-5 sm:pl-0 sm:px-10 md:px-20 pt-5 lg:pt-20 pb-20"
    >
      <h1 className="text-4xl font-bold text-white font-inter pt-20 border-b-8 border-main-200 flex w-36">
        Projetos
      </h1>
      <div
        className="flex justify-between mt-11 w-11/12"
        data-aos="fade-down"
        data-aos-easing="ease-in-out-quad"
      >
        <div className="w-full flex flex-col">
          <div className=" w-full lg:w-3/6">
            <p className="text-white text-base capitalize leading-9 mb-12">
              Durante minha jornada como desenvolvedor front-end/mobile, tive o
              privilégio de criar diversos projetos desafiadores e empolgantes.
              Abaixo, apresento uma seleção dos projetos em que estive
              envolvido:
            </p>
          </div>
          <div className="flex gap-10 w-full flex-wrap justify-center">
            <CardProject
              photo={[site1, site2, site3]}
              name="Site"
              description="Landing page criada para pronunciar a cartilha de Boas Praticas de Ti para minha faculdade"
              link="https://site-fapam.vercel.app/"
            />
            <CardProject
              photo={[dtMoney1, dtMoney2, dtMoney3]}
              name="DtMoney"
              description="Sistema de controle Financeiro Voce pode dar entrar, saida, criar novas transações colocar catégoria em cada saida e entrada"
              link="https://github.com/RyanHenriqueBelfort/Dtmoney_controle_financeiro"
            />
            <CardProject
              photo={[locOn1, locOn2]}
              name="LocOn"
              description="LocOn é uma locadora online ondé possivel adicionar o filme no carrinho,
              adicionar aos favoritos e poder compra-los."
              link="https://locon.vercel.app/"
            />
            <CardProject
              photo={[todo1, todo2, todo3]}
              name="Todo"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tristique enim ac felis"
              link="https://github.com/RyanHenriqueBelfort/Todo_React"
            />
            <CardProject
              photo={[pomdoro1, pomdoro2, pomdoro3]}
              name="Pomodoro timer"
              description="Olá. Estou entusiasmado em compartilhar meu mais recente projeto pessoal Pomodoro Timer 🍅!
              No app voce pode inicar o timer, pausar nos três modos Focus, Short Break e Long Break..."
              link="https://github.com/RyanHenriqueBelfort/pomodoroApp"
            />
            <CardProject
              photo={[eventon1, eventon2, eventon3, eventon4]}
              name="Even on"
              description="O Event|ON é uma plataforma de eventos onde o usuario pelo Graphcms pode inserir aulas e conteudos sobre o evento."
              link="https://event-platform-ten-ochre.vercel.app/"
            />
            <CardProject
              photo={[team1, team2, team3]}
              name="Teams"
              description="Teams é uma plataforma onde você pode:
              - Criar um novo time
              - Adicionar pessoas no Team 🅰 e Team 🅱
              - Remover qualquer pessoa
              - Excluir o Time criado."
              link="https://github.com/RyanHenriqueBelfort/teams"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
