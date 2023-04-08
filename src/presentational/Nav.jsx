import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Nav.module.css";

export default function Nav() {
  return (
    <div  className={Style.head}>
      <div className={Style.name}>
        <ul>Juan Bosque</ul>
      </div>
      <div className={Style.links}>
        <ul>
          <NavLink to="/home">Home</NavLink>
        </ul>
        <ul>
          <NavLink to="/about">About</NavLink>
        </ul>
        <ul>
          <NavLink to="/skills">Skills</NavLink>
        </ul>
        <ul>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </ul>
        <ul>
          <NavLink to="/cantact">Contact</NavLink>
        </ul>
      </div>
    </div>
  );
}
