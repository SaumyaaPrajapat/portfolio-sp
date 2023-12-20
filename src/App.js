import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bodypage">
        <Hero />
        <div className="wrapper">
          <Skills />
        </div>
        <div className="wrapper">
          <Experience />
        </div>
        <div className="wrapper">
          <Projects />
        </div>
        <div className="wrapper">
          <Education />
        </div>
        <Contact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
