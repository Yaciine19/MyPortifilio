import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Scroller from "./Components/Scroller/Scroller";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Hero from "./Pages/Hero/Hero";
import Projects from "./Pages/Projects/Projects";


export default function App() {
  return <div className="appContainer">
    <Header />
    <Hero />
    <About />
    <Scroller />
    <Projects />
    <Contact />
    <Footer />
  </div>;
}
