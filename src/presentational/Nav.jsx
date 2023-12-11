import React, { useState, useEffect } from "react";
import Style from "./Nav.module.css";

export default function Nav() {
  const [activeLink, setActiveLink] = useState("home");
  const [menu, setMenu] = useState(true);
  const [small, setSmall] = useState(false);

  const handleResize = () => {
    if (window.screen.width < 700) {
      setMenu(false);
      setSmall(true);
    } else {
      setMenu(true);
      setSmall(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [small]);

  function Close() {
    setMenu(!menu);
  }
  const handleLinkClick = (link) => {
    setActiveLink(link);
    small && Close();
  };

  return (
    <div className={Style.headNav}>
      <div className={Style.logo}>JB</div>
      {menu && (
        <nav className={Style.links}>
          <span>
            <a
              className={activeLink === "home" ? Style.active : ""}
              href="#home"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </span>
          <span>
            <a
              href="#about"
              className={activeLink === "about" ? Style.active : ""}
              onClick={() => handleLinkClick("about")}
            >
              About
            </a>
          </span>
          <span>
            <a
              href="#skills"
              className={activeLink === "skills" ? Style.active : ""}
              onClick={() => handleLinkClick("skills")}
            >
              Skills
            </a>
          </span>
          <span>
            <a
              href="#portfolio"
              className={activeLink === "portfolio" ? Style.active : ""}
              onClick={() => handleLinkClick("portfolio")}
            >
              Portfolio
            </a>
          </span>
          <span>
            <a
              href="#contact"
              className={activeLink === "contact" ? Style.active : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </span>
        </nav>
      )}
      <div className={Style.mobile}>
        <i
          className={menu ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setMenu(!menu)}
        ></i>
      </div>
    </div>
  );
}
