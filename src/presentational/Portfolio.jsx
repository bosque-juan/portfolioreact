import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

import { Slide } from "react-awesome-reveal";
import recipess from "../assets/recipess.png";
import Athenas from "../assets/Athenas.png";
import Ecommerce from "../assets/ecommerce.png";
import Dog from '../assets/happydogCover.png';

import Weather from '../assets/landing.png';

import Style from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div id="portfolio" className={Style.headPortfolio}>
      <Slide>
        <main className={Style.mainPortfolio}>Portfolio</main>
        <div className={Style.containerPortfolio}>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={Dog}
              alt="happy dog"
            />
            <h5 className={Style.imgTitle}>
              Happy Dog

              <br />
              <nav>
                <a
                  href="https://github.com/bosque-juan"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i>
                    <AiFillGithub className={Style.icon} title="Git Hub" />
                  </i>
                </a>

                <a
                  href="https://happy-dog-front.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i>
                    <TbWorld className={Style.icon} title="Web Site" />
                  </i>
                </a>
              </nav>

            </h5>
          </div>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={recipess}
              alt="recipes app"
            />
            <a href="https://recipesjb.vercel.app/">
              <h5 className={Style.imgTitle}>
                Recipes App

                <nav>
                  <a
                    href="https://github.com/bosque-juan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <AiFillGithub className={Style.icon} title="Git Hub" />
                    </i>
                  </a>

                  <a
                    href="https://happy-dog-front.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <TbWorld className={Style.icon} title="Web Site" />
                    </i>
                  </a>
                </nav>

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

                <br />
                <nav>
                  <a
                    href="https://github.com/bosque-juan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <AiFillGithub className={Style.icon} title="Git Hub" />
                    </i>
                  </a>

                  <a
                    href="https://happy-dog-front.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <TbWorld className={Style.icon} title="Web Site" />
                    </i>
                  </a>
                </nav>

              </h5>
            </a>

          </div>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={Ecommerce}
              alt="Ecommerce"
            />
            <a href="https://ecommercejb.vercel.app/">
              <h5 className={Style.imgTitle}>
                Clothes Store
                <br />
                <nav>
                  <a
                    href="https://github.com/bosque-juan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <AiFillGithub className={Style.icon} title="Git Hub" />
                    </i>
                  </a>

                  <a
                    href="https://happy-dog-front.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <TbWorld className={Style.icon} title="Web Site" />
                    </i>
                  </a>
                </nav>

              </h5>
            </a>
          </div>
          <div className={Style.imgContainer}>
            <img
              className={Style.imgPortfolio}
              src={Weather}
              alt="weather app"
            />
            <a href="https://weatherappjb.vercel.app/">
              <h5 className={Style.imgTitle}>
                Weather App
                <br />
                <nav>
                  <a
                    href="https://github.com/bosque-juan"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <AiFillGithub className={Style.icon} title="Git Hub" />
                    </i>
                  </a>

                  <a
                    href="https://happy-dog-front.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i>
                      <TbWorld className={Style.icon} title="Web Site" />
                    </i>
                  </a>
                </nav>

              </h5>
            </a>
          </div>
        </div>
      </Slide>
    </div>
  );
}
