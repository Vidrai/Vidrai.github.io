import "./App.css";


import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
