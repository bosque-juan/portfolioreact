export default function Portfolio() {
  return (
    <section class="portfolio section" id="portfolio">
      <h2 class="section-title">Portfolio</h2>

      <div class="portfolio__container bd-grid">
        <div class="portfolio__img">
          <img src="assets/img/landingS.png" alt="" />

          <div class="portfolio__link">
            <a
              href="https://weatherapp-32xm.onrender.com/"
              class="portfolio__link-name"
            >
              Weather App, forecast home
            </a>
          </div>
        </div>

        <div class="portfolio__img">
          <img src="assets/img/recipess-food.png" alt="" />

          <div class="portfolio__link">
            <a
              href="https://recipes-food.onrender.com/"
              class="portfolio__link-name"
            >
              Food Recipes App, delicious meals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
