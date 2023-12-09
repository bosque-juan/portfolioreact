import React, { useState } from "react";
import Style from "./Nav.module.css";

export default function Nav() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={Style.headNav}>
      <div className={Style.logo}>JB</div>
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
    </div>
  );
}
<a className={Style.active} href="#home">
  Home
</a>;
