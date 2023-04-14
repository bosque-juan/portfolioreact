import Style from'./Skills.module.css'
export default function Skills() {
    return (
        <div className={Style.container} id="skills">
        <h2 >Skills</h2>

        <div >
          <div >
            <h3 >Development</h3>
            <div>
              <span >Html</span>
              <span >Javascript</span>
              <span >React</span>
              <span >Redux</span>
              <span >Css</span>
              <span >Node</span>
              <span >Sequelize</span>
              <span >Express</span>
              <span >PostgreSql</span>
              <span >RESTful API</span>
              <span >Postman</span>
              <span >SCRUM</span>
              <span >Trello</span>
              <span >Git hub</span>
              <span >Git commands</span>
            </div>
          </div>

          <div >
            <img src="../assets/img/skill.jpg" alt="" />
          </div>
        </div>
      </div>
    )
    
}