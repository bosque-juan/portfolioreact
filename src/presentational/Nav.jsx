
import Style from "./Nav.module.css";

export default function Nav() {
  return (
    <div  className={Style.head}>
      <div >
        <main className={Style.logo}>JB</main>
      </div>
      <div className={Style.links}>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <a href="#skills">Skills</a>
      </span>
        <span>
          <a href="#portfolio">Portfolio</a>
       </span>
        <span>
          <a href="#contact">Contact</a>
      </span>
      </div>
    </div>
  );
}
