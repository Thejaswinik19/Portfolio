import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaJava, FaHtml5, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiC, SiCplusplus, SiMongodb, SiMysql, SiCss3 } from "react-icons/si";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
