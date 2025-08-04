import footerStyles from "./Footer.module.css"
export default function Footer() {
    return (
        <footer >
            <div class={footerStyles.flex__footer}>

                <nav class={footerStyles.flex__footer_items}>
                    <h3 class={footerStyles.footer__label}>Explore</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <nav class={footerStyles.flex__footer_items}>
                    <h3 class={footerStyles.footer__label}>Redes</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/juan-bosque/" rel="noreferrer" target="_blank">Linkedin</a></li>
                        <li><a href="https://github.com/bosque-juan" rel="noreferrer" target="_blank">Git Hub</a></li>
                    </ul>
                </nav>

                <nav class={footerStyles.flex__footer_items}>
                    <h3 class={footerStyles.footer__label}>Links</h3>
                    <ul>
                        <li><a href="https://drive.google.com/file/d/1NhWPsGjmpBfoqO9p-LGaHgAYr7Y7J5vP/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a></li>
                        <li><a href="https://wa.me/5493517674416?text=Hola%20Juan,%20quiero%20saber%20más%20sobre%20tu%20trabajo"
                            target="_blank" rel="noreferrer">WhatsApp</a></li>
                        <li><a
                            href="mailto:juan_bosque@hotmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Juan,%20quiero%20saber%20más%20sobre%20tu%20trabajo."
                            rel="noreferrer" target="_blank">
                            Outlook</a></li>
                    </ul>
                </nav>
            </div>
<article>
            <strong> JUAN BOSQUE </strong> - Copyrights 2029
</article>
        </footer>)

}
