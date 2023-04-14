// import Style from './Home.module.css'
import Img from "../assets/profilePicture.jpeg";
import { Slide, Zoom } from "react-awesome-reveal";
import Style from "./Home.module.css";

export default function Home() {
  return (
    <div className={Style.head} id="home">
      <a href="#about">
        <i>
          <h6>
            <span> S </span>
            <span> C </span>
            <span> R</span>
            <span> O </span>
            <span> L </span>
            <span> L </span>
            <br />
            <span> D </span>
            <span> O </span>
            <span> W</span>
            <span> N </span>
          </h6>
        </i>
      </a>
      <div className={Style.container}>
        <Slide right duration={1500}>
          <div className={Style.greeting}>
            
              <span>HE</span>
              <br />
              LLO.
          
          </div>
        </Slide>
        <Slide right duration={2000}>
          <img className={Style.image} src={Img} alt="" />
        </Slide >
      </div>
    </div>
  );
}
