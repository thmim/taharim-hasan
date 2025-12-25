import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectShow from "./components/ProjectShow";
import Services from "./components/Services";
import Skills from "./components/Skills";
import WorkPlan from "./components/WorkPlan";


export default function Home() {
  return (
    <div>
       
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <WorkPlan/>
        <Skills/>
        <Education/>
        <ProjectShow/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  );
}
