import Style from "./Skills.module.css";
import image from "../assets/desk.png";
import { Slide } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className={Style.head} id="skills">
        <Slide>
      <main className={Style.main1}>Skills</main>

      <div className={Style.container} >
        <div >
            <div className={Style.develop}>
              Development
            </div>
          
            <div className={Style.skills}> 
              <ul>Html</ul>
              <ul>Javascript</ul>
              <ul>React</ul>
              <ul>Redux</ul>
              <ul>Css</ul>
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
