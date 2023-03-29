function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                Nous offrons une large gamme de véhicules pour tous vos besoins
                de conduite. Nous avons la voiture idéale pour répondre à vos
                besoins.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://xpeedstudio.com/"
                >
                  Design by XpeedStudio
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Entreprise</li>
              <li>
                <a href="#home">Paris</a>
              </li>
              <li>
                <a href="#home">Carières</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Sur nous</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Heures d'ouvertures</li>
              <li>Lun - Ven: 9:00 - 21:00</li>
              <li>Sam: 9:00 - 22:00</li>
              <li>Dim: Fermé</li>
            </ul>

            <ul className="footer-content__2">
              <li>Newsletter</li>
              <li>
                <p>
                  Inscrivez votre adresse e-mail pour recevoir les dernières
                  nouvelles et mises à jour.
                </p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
