import "./App.css";
import Nav from "./presentational/Nav";
import Home from "./presentational/Home";
import About from "./presentational/About";
import Skills from "./presentational/Skills";
import Portfolio from "./presentational/Portfolio";
import Contact from "./presentational/Contact";
import Footer from "./presentational/Footer";
// import { Fade } from "react-awesome-reveal";
// <Fade left duration={2000}>
// </Fade>
function App() {
  return (
    <div className="body" >
      <Nav  />

      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
