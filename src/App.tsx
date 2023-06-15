import Aos from 'aos'
import { useEffect } from 'react';
import reactLogo from "./assets/react.svg";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { Main } from "./pages/Main";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";

import "aos/dist/aos.css"
import "./style/globalStyle.css";
import { Header } from './pages/Header';

function App() {

  useEffect(() =>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className="">
      <Header />
      <Main  aos={"fade-down"}/>
      <Hero  aos={"fade-up"}/>
      <Projects />
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
