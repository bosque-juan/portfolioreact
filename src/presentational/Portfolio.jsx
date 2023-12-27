import { Slide } from "react-awesome-reveal";
import landingS from "../assets/landingS.png";
import recipess from "../assets/recipess.png";
import Athenas from "../assets/Athenas.png";
import Ecommerce from "../assets/ecommerce.png";

import Style from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className={Style.headPortfolio}>
      <Slide left cascade>
        <main className={Style.mainPortfolio}>Portfolio</main>
        <div className={Style.containerPortfolio}>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={landingS}
              alt="weather app"
            />
            <a href="https://weatherappjb.vercel.app/">
              <h5 className={Style.imgTitle}>
                Weather App
                <br /> find up the forecast!
                <br />
                click
              </h5>
            </a>
          </div>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={recipess}
              alt="recipes app"
            />
            <a href="https://recipesjb.vercel.app/">
              <h5 className={Style.imgTitle}>
                Food Recipes App
                <br /> making your food!
                <br />
                click
              </h5>
            </a>
          </div>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={Athenas}
              alt="Athenas club"
            />
            <a href="https://proyecto-final-matarg81.vercel.app/">
              <h5 className={Style.imgTitle}>
                Athenas Club 
                <br /> buy merchandising
                <br />
                click
              </h5>
            </a>
          </div>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={Ecommerce}
              alt="Ecommerce"
            />
            <a href="https://ecommercejb.vercel.app//">
              <h5 className={Style.imgTitle}>
                Ecommerce
                <br /> Clothes
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
