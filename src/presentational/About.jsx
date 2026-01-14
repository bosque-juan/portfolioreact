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
          <span>.Net Developer</span>
          <p className={Style.abouText}>
            I am a Backend Developer with experience building APIs and services using C# / ASP.NET Core, applying scalable software architecture principles.
            I have 6 months of professional experience at Shaper Gap.
            Currently studying Programming at the National Technological University (UTN), having successfully completed the first year, and deepening my knowledge in error handling, unit testing, and integration testing during the academic break.
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
            <a href="https://drive.google.com/file/d/1I-FJR_n4rYNUn0xq8PlZnrgDo5XTr76t/view?usp=sharing" rel="noreferrer"
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




