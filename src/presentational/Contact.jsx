export default function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>

      <div>
        <div>
          <h3>EMAIL</h3>
          <span>juan_bosque@hotmail.com</span>

          <h3>PHONE</h3>
          <span>+54 351 7674416</span>

          <h3>ADRESS</h3>
          <span>Argentina, Córdoba, Córdoba</span>
        </div>

        <form
          action="https://formsubmit.co/juan_bosque@hotmail.com"
          method="POST"
        >
          <div>
            <input type="text" name="name" placeholder="Name" required />
            <input type="mail" name="email" placeholder="Email" required />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            id=""
            cols="0"
            rows="10"
            required
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
