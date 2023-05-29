import Style from "./About.module.css";
import img from "../assets/profile.jpg";
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
              I am enthusiastic, proactive, I like to always be learning new
              tools, improve what I have done, deepen what I have learned. I
              have full time availability and the possibility of immediate
              application.
            </p>

            <div className={Style.iconContainer}>
              <a href="https://www.linkedin.com/in/juan-bosque">
                <i>
         
                  <AiFillLinkedin className={Style.icon} />{" "}
                </i>
              </a>
              <a href="https://www.github.com/juanchos85">
                <i>
         
                  <AiFillGithub className={Style.icon} />{" "}
                </i>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
