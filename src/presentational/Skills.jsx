import Style from "./Skills.module.css";
import image from "../assets/desk.png";
import { Slide, Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className={Style.headSkills} id="skills">
      <Slide>
        <main className={Style.main1}>Skills</main>

        <div className={Style.containerSkills}>
          <div>
            <div>
              <div className={Style.develop}>Back End</div>

              <div className={Style.skills}>
                <Fade cascade damping={0.1}>
     
                  <ul>Node.js</ul>
                  <ul>Sequelize</ul>
                  <ul>Express.js</ul>
                  <ul>PostgreSql</ul>
                  <ul>C SHARP</ul>
                  <ul>SQL SERVER</ul>
                  <ul>REST FULL API's</ul>
                </Fade>
              </div>
            </div>
            <div>
              <div className={Style.develop}>Front End</div>

              <div className={Style.skills}>
                <Fade cascade damping={0.1}>
                  <ul>HTML5</ul>
                  <ul>CSS3</ul>
                  <ul>JavaScript</ul>
                  <ul>TypeScript</ul>
                  <ul>React.js</ul>
                  <ul>Boostrap</ul>
                </Fade>
              </div>
            </div>
          </div>

          <div>
            <img className={Style.image} src={image} alt="" />
          </div>
        </div>
      </Slide>
    </div>
  );
}
