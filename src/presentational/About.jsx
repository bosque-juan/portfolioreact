import Style from './About.module.css'
export default function About() {
  return (
    <div className={Style.container} id="about">
      <h2>About</h2>

      <div >
        <div >
          <img src="assets/img/profile.jpg" alt="" />
        </div>
        <div>
          <h2 >I am Juan Bosque</h2>
          <span >Full Stack Web Developer</span>
          <p >
            I am enthusiastic, proactive, I like to always be learning new
            tools, improve what I have done, deepen what I have learned. I have
            full time availability and the possibility of immediate application.
          </p>

          <div >
            <a
              href="https://www.linkedin.com/in/juan-bosque"
            
            >
              <i ></i>
            </a>
            <a
              href="https://www.github.com/juanchos85"
             
            >
              <i ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
