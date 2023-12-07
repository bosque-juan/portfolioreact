import { Slide } from "react-awesome-reveal";
import Style from "./Home.module.css";

export default function Home() {
  return (
    <div id="home"  className={Style.head}>
      <a href="#about">
        <i>
          <h6>Scroll Down</h6>
        </i>
      </a>
      <div className={Style.containerHome}>
        <Slide right>
          <div className={Style.greeting}>
            <span>JUAN</span>
            <br />
            BOSQUE
          </div>
        </Slide>
        <Slide right>
          <div>
            <h5 style={{ fontSize: "1.7rem" }}>FULL STACK WEB DEVELOPER</h5>
            <h3 style={{ fontSize: "2.5rem" }}>
              Hello, and Welcome to my personal portfolio!
            </h3>
          </div>
        </Slide>
      </div>
    </div>
  );
}
