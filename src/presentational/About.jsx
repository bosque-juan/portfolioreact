export default function About() {
    return (
        <section class="about section" id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img src="assets/img/profile.jpg" alt="" />
          </div>
          <div>
            <h2 class="about__subtitle">I'am Juan Bosque</h2>
            <span class="about__profession">Full Stack Web Developer</span>
            <p class="about__text">
              I am enthusiastic, proactive, I like to always be learning new
              tools, improve what I have done, deepen what I have learned. I
              have full time availability and the possibility of immediate
              application.
            </p>

            <div class="about__social">
              <a
                href="https://www.linkedin.com/in/juan-bosque"
                class="about__social-icon"
                ><i class="bx bxl-linkedin"></i
              ></a>
              <a
                href="https://www.github.com/juanchos85"
                class="about__social-icon"
                ><i class="bx bxl-github"></i
              ></a>
            </div>
          </div>
        </div>
      </section>

    )
    
}