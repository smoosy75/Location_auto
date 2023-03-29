import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Besoins de plus d'information ?</h2>
              <p>
                Des professionnels aux multiples facettes, compétent dans de
                nombreux domaines de la recherche et développement, ainsi qu'un
                spécialiste de l'apprentissage. Plus de 15 ans années
                d'expérience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; 01234567869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@carmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Paris, France
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Nom complet <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Dites nous tous <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp;
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Réserver un vehicule en nous contactant.</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>01234567869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
