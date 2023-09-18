import { Slide } from "react-awesome-reveal";
import landingS from "../assets/landingS.png";
import recipess from "../assets/recipess.png";
import Style from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className={Style.headPortfolio}>
      <Slide left cascade>
        <main className={Style.mainPortfolio}>Portfolio</main>
        <div className={Style.containerPortfolio}>
          <div className={Style.imgContainer}>
          
              <img className={Style.imgPortfolio} src={landingS} alt="" /> 
            <a href="https://weatherappjb.vercel.app/">
            <h5 className={Style.imgTitle}>
              Weather App
              <br/> find up the forecast!
              <br />
              click
            </h5>
            </a>
          </div>


          <div className={Style.imgContainer}>
        
              <img className={Style.imgPortfolio} src={recipess} alt="" /> 
            <a href="https://recipes-food-app-responsive.vercel.app/">
            <h5 className={Style.imgTitle}>
              Food Recipes App
              <br/>  to make your food!
              <br />
              click
            </h5>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
}