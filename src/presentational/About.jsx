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
            <img className={Style.imageAbout} src={img} alt="" />
          </div>

          <div className={Style.about}>
            <h2>I am Juan Bosque</h2>
            <span>Full Stack Web Developer</span>
            <p className={Style.abouText}>
              I am motivated by innovation and
              developing interactive web pages. That the user has a pleasant
              browsing experience. Passionate about developing, learning,
              and doing things look different.
            </p>

            <div className={Style.iconContainer}>
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
                href="https://www.github.com/juanchos85"
                rel="noreferrer"
                target="_blank"
              >
                <i>
                  <AiFillGithub className={Style.icon} title="Git Hub" />
                </i>
              </a>
              <a
                href="https://drive.google.com/file/d/17uJoX3mXOXwAFy4Kna_Zb-3VctSJUHJX/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <i>
                  <BsListCheck className={Style.icon} title="English CV" />{" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
