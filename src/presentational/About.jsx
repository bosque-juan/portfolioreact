import Style from "./About.module.css";
import img from "../assets/profile.jpg";
import { BsListCheck } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <div className={Style.head} >
      <main className={Style.mainAbout}>
        <h2>About</h2></main>
      {/* about Image */}
      <div className={Style.containerAbout}>
        <div className={Style.imgContainer1}>
          <img className={Style.imageAbout} src={img} alt="Juan Bosque Image" />
        </div>
        {/* about text */}
        <div className={Style.about}>
          <h2>Juan Bosque</h2>
          <span>Full Stack Web Developer</span>
          <p className={Style.abouText}>
            I'm a Front-end – Full Stack developer with 6 months of experience, after working as a
            contractor on a project at Shaper US, where I learned about teamwork and agile technologies.
            I'm currently studying for a Programming Technician degree at UTN FRC to deepen my knowledge and skills in development.
            I like to write clean, structured code with single-responsibility components. I'm always willing to learn, collaborate, and get results.
          </p>
          {/* Icons */}
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
            <a href="https://drive.google.com/file/d/1zG8TZ7sBnLcP8pqiL3Uc4WvSHY3knvkc/view?usp=sharing" rel="noreferrer"
              target="_blank" >
              <i>
                <BsListCheck className={Style.icon} title="Resume - CV" />
              </i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );

}

