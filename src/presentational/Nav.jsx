import Style from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={Style.headNav}>
      <div className={Style.logo}>JB</div>
      <nav className={Style.links}>
        <span>
          <a className="active" href="#home">Home</a>
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
      </nav>
    </div>
  );
}
