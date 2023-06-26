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
              Passionate about what I do, I like to be learning, innovating,
              doing something different, dedication, helping where I can. I like
              solving situations
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
