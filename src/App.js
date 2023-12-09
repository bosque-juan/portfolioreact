import "./App.css";
import Nav from "./presentational/Nav";
import Home from "./presentational/Home";
import About from "./presentational/About";
import Skills from "./presentational/Skills";
import Portfolio from "./presentational/Portfolio";
import Contact from "./presentational/Contact";
import Footer from "./presentational/Footer";

function App() {
  return (
    <div className="body">
      <Nav />

      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}


export default App;
