import Style from "./Skills.module.css";
import image from "../assets/desk.png";

export default function Skills() {
  return (
    <div className={Style.headSkills} >
      <main className={Style.main1}><h2>Skills</h2></main>

      <div className={Style.containerSkills}>
        <section className={Style.sectionSkills}>
          <div>
            <div className={Style.develop}>Back End</div>

            <div className={Style.skills}>
              <ul>Node.js</ul>
              <ul>Sequelize</ul>
              <ul>Express.js</ul>
              <ul>PostgreSql</ul>
              <ul>C SHARP</ul>
              <ul>SQL SERVER</ul>
              <ul>REST FULL API's</ul>
            </div>
          </div>
          <div>
            <div className={Style.develop}>Front End</div>

            <div className={Style.skills}>
              <ul>HTML5</ul>
              <ul>CSS3</ul>
              <ul>JavaScript</ul>
              <ul>TypeScript</ul>
              <ul>React.js</ul>
              <ul>Boostrap</ul>
            </div>
          </div>
        </section>

        <div className={Style.imageContainer} >
          <img className={Style.image} src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
