export default function Contact() {
  return (
    <section class="contact section" id="contact">
      <h2 class="section-title">Contact</h2>

      <div class="contact__container bd-grid">
        <div class="contact__info">
          <h3 class="contact__subtitle">EMAIL</h3>
          <span class="contact__text">juan_bosque@hotmail.com</span>

          <h3 class="contact__subtitle">PHONE</h3>
          <span class="contact__text">+54 351 7674416</span>

          <h3 class="contact__subtitle">ADRESS</h3>
          <span class="contact__text">Argentina, Córdoba, Córdoba</span>
        </div>

        <form
          action="https://formsubmit.co/juan_bosque@hotmail.com"
          method="POST"
          class="contact__form"
        >
          <div class="contact__inputs">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="contact__input"
              required
            />
            <input
              type="mail"
              name="email"
              placeholder="Email"
              class="contact__input"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            id=""
            cols="0"
            rows="10"
            class="contact__input"
            required
          ></textarea>

          <input type="submit" value="Send" class="contact__button" />
        </form>
      </div>
    </section>
  );
}
