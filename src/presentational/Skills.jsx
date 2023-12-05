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
        <div>

          
<div className={Style.develop}>
  Tech
</div>

<div className={Style.skills}> 
<Fade cascade damping={0.1}>
  <ul>HTML5</ul>
  <ul>JavaScript</ul>
  <ul>TypeScript</ul>
  <ul>React.js</ul>
  <ul>Redux</ul>
  <ul>CSS3</ul>
  <ul>Boostrap</ul>
  <ul>Material UI</ul>
  <ul>Node.js</ul>
  <ul>Sequelize</ul>
  <ul>Express.js</ul>
  <ul>PostgreSql</ul>
  <ul>RESTful API</ul>
  <ul>Postman</ul>
  <ul>SCRUM</ul>
  <ul>Trello</ul>
  <ul>Git hub</ul>
  <ul>MongoDB</ul>
  <ul>Microservice</ul>
  </Fade>
</div>

</div>
          <div>

          
            <div className={Style.develop}>
              Soft
            </div>
          
            <div className={Style.skills}> 
            <Fade cascade damping={0.1}>
              <ul>Team player</ul>
              <ul>Hard work</ul>
              <ul>Innovation</ul>
              <ul>Proeficient</ul>
              <ul>Learning</ul>
              <ul>Problem solver</ul>
              <ul>Proactive</ul>
              <ul>Independient</ul>
              <ul>Coperative</ul>
              
              </Fade>
            </div>
          
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
