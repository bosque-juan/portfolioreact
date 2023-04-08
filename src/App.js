import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./presentational/Nav";
import Home from "./presentational/Home";
import About from "./presentational/About";
import Skills from "./presentational/Skills";
import Portfolio from "./presentational/Portfolio";
import Contact from "./presentational/Contact";
import Footer from "./presentational/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/skills" Component={Skills} />
      <Route path="/portfolio" Component={Portfolio} />
      <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
