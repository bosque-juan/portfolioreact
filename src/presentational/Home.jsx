import Style from "./Home.module.css";

export default function Home() {
  return (
    <div  className={Style.head}>
      <a href="#about">
        <i>
          <h6>Scroll Down</h6>
        </i>
      </a>
      <div className={Style.containerHome}>
        <div className={Style.greeting}>
          <span>JUAN</span>
          <br />
          BOSQUE
          <h5 className={Style.subtitle}>FULL STACK WEB DEVELOPER</h5>
        </div>

        <div>
          <h3 className={Style.mainTitle}>
            Welcome to my personal portfolio!
          </h3>
        </div>
      </div>
    </div>
  );
}
