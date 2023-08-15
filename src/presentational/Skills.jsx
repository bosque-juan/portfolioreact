import Style from "./Skills.module.css";
import image from "../assets/desk.png";
import { Slide, Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className={Style.headSkills} id="skills">
        <Slide>
      <main className={Style.main1}>Skills</main>

      <div className={Style.containerSkills} >
        <div >
            <div className={Style.develop}>
              Development
            </div>
          
            <div className={Style.skills}> 
            <Fade cascade damping={0.1}>
              <ul>HTML</ul>
              <ul>Javascript</ul>
              <ul>React</ul>
              <ul>Redux</ul>
              <ul>CSS</ul>
              <ul>Node</ul>
              <ul>Sequelize</ul>
              <ul>Express</ul>
              <ul>PostgreSql</ul>
              <ul>RESTful API</ul>
              <ul>Postman</ul>
              <ul>SCRUM</ul>
              <ul>Trello</ul>
              <ul>Git hub</ul>
              <ul>Git commands</ul>
              </Fade>
            </div>
          
         
        </div>
        <div >
            <img className={Style.image} src={image} alt="" />
          </div>
      </div>
        </Slide>
    </div>
  );
}
