import Style from "./Contact.module.css";
export default function Contact() {
  return (
    <div id="contact" className={Style.headContact}>
      <main className={Style.mainContact}>Contact</main>

      <div className={Style.containerContact}>
        <div className={Style.data}>
          <h1>EMAIL</h1>
          <span>juan_bosque@hotmail.com</span>

          <h1>PHONE</h1>
          <span>+54 351 7674416</span>

          <h1>ADRESS</h1>
          <span>Córdoba, Córdoba, Argentina </span>
        </div>

        <form
          action="https://formsubmit.co/juan_bosque@hotmail.com"
          method="POST"
          className={Style.form}
        >
          <div className={Style.dataInput}>
            <input type="text" name="name" placeholder="Name" required />
            <input
              id="email"
              type="mail"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            id="textArea"
            cols="0"
            rows="8"
            required
            className={Style.textArea}
          ></textarea>

          <input className={Style.button} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
