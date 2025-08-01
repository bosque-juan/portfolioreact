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
      <a class="top_button" href="#home">TOP</a>
      <Nav />
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
