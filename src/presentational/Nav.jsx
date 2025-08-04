import React, { useState, useEffect } from "react";
import Style from "./Nav.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


export default function Nav() {
  const [activeLink, setActiveLink] = useState("home");
  const [menu, setMenu] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 800;
      setIsSmallScreen(isSmall);
      isSmall ? setMenu(false) : setMenu(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isSmallScreen) {
      setMenu(false);
    }
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
  <i onClick={toggleMenu} className={`${Style.iconTransition} ${menu ? Style.iconOpen : ""}`}>
    {menu ? <RxCross2 /> : <FiAlignJustify />}
  </i>
</div>

    </div>
  );
}
