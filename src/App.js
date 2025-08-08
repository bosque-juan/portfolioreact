import "./App.css";
import { useEffect, useState } from "react";
import "./animation/slider.css";
import Nav from "./presentational/Nav";
import Home from "./presentational/Home";
import About from "./presentational/About";
import Skills from "./presentational/Skills";
import Portfolio from "./presentational/Portfolio";
import Contact from "./presentational/Contact";
import Footer from "./presentational/Footer";

function App() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const options = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
          entry.target.classList.add("slider");
        }
      });
    }, options);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="body">
      <a className="top_button" href="#home">TOP</a>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
