
import { Slide } from "react-awesome-reveal";
import Style from "./Home.module.css";

export default function Home() {
  return (
    <div className={Style.head} id="home">
      <a href="#about">
        <i>
          <h6>Scroll Down</h6>
        </i>
      </a>
      <div className={Style.containerHome}>
        <Slide right>
          <div className={Style.greeting}>
            <span>HE</span>
            <br />
            LLO.
          </div>
        </Slide>
        <Slide right >
          <div>
            <h5 style={{fontSize:'1.7rem'}}>FULL STACK WEB DEVELOPER</h5>
            <h3 style={{fontSize:'2.5rem'}}>
              Hi, I am Juan
              <br />
              from Argentina
            </h3>
          </div>
        </Slide>
      </div>
    </div>
  );
}
