import Style from "./Contact.module.css";

export default function Contact() {
  return (
    <div  className={Style.headContact}>
        <main className={Style.mainContact}><h2>Contact</h2></main>
        <div className={Style.containerContact}>
          <div className={Style.data}>
            <h1>EMAIL</h1>
            <span>juan_bosque@hotmail.com</span>
            <h1>PHONE</h1>
            <span>+54 351 7674416</span>
            <h1>ADRESS</h1>
            <span> Córdoba, Argentina </span>
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
              id="textArea"
              maxLength="200" type="text" wrap="hard" rows="4" name="message" placeholder="Leave your message"
              className={Style.textArea}
            ></textarea>
            <input className={Style.button} type="submit" value="Send" />
          </form>
        </div>
    </div>
  );
}
