
import { Slide } from "react-awesome-reveal";
import landingS from '../assets/landingS.png'
import recipess from '../assets/recipess.png'
import Style from './Portfolio.module.css'



export default function Portfolio() {

  return (
    <div  id="portfolio">
      <Slide left cascade  duration={5000}>


      <h1 className={Style.title}>Portfolio</h1>
      <div className={Style.container} >
        <div className="portfolio__img">
        

          <div className="portfolio__link">
          <h6>
              Weather App, forecast home

              </h6>
            <a
              href="https://weatherapp-32xm.onrender.com/"
              className="portfolio__link-name"
            >
                <img src={landingS} alt="" />
                </a>
             
          
          </div>
        </div>

        <div >
   

          <div>
          <h6>
               Food Recipes App, delicious meals
              </h6>
            <a
              href="https://recipes-responsive.vercel.app/"
              
            >
                     <img src={recipess} alt="" />
            </a>
            
          </div>
        </div>
      </div>
      </Slide>
    </div>
  );
}
