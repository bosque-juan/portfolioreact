import Style from "./About.module.css";
import img from "../assets/profile.jpg";
import { BsListCheck } from "react-icons/bs";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";
export default function About() {
  return (
    <div className={Style.head} id="about">
      <Slide>
        <main className={Style.mainAbout}>About</main>
        <div className={Style.containerAbout}>
          <div className={Style.imgContainer1}>
            <img className={Style.imageAbout} src={img} alt="Juan Bosque Image" />
          </div>

          <div className={Style.about}>
            <h2>Juan Bosque</h2>
            <span>Full Stack Web Developer</span>
            <p className={Style.abouText}>
              I’m a full stack web developer. I’m passionate about learning new practices, improving every day, and applying what I learn.
              I had experience working as a full stack developer at Shaper US, where I grew both technically and professionally.
              Currently, I’m studying Programming at the National Technological University to continue strengthening my knowledge.
            </p>

            <ul className={Style.iconContainer}>
              <a
                href="https://www.linkedin.com/in/juan-bosque"
                rel="noreferrer"
                target="_blank"
              >
                <i>
                  <AiFillLinkedin className={Style.icon} title="Linkedin" />
                </i>
              </a>
              <a
                href="https://github.com/bosque-juan"
                rel="noreferrer"
                target="_blank"
              >
                <i>
                  <AiFillGithub className={Style.icon} title="Git Hub" />
                </i>
              </a>

              <a href="https://drive.google.com/file/d/1Fm9Cy_PZEhc1hNLy-36TC4W3LZw_7btA/view" rel="noreferrer"
                target="_blank" >
                <i>
                  <BsListCheck className={Style.icon} title="English CV" />
                </i>
              </a>
            </ul>
          </div>
        </div>
      </Slide>
    </div>
  );
}
