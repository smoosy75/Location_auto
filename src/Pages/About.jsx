import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="A propos" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>A propos de nous</h3>
              <h2> Démarrez le moteur et l'aventure commence</h2>
              <p>
                Curabitur vestibulum tempor elit, at fringilla sapien. Curabitur
                aliquet tempor tortor at consectetur. Fusce malesuada vulputate
                tortor, eu interdum ex mollis nec. Proin luctus scelerisque
                eros, eget elementum arcu sagittis a. Donec sed feugiat arcu.
                Sed sed ex cursus, tristique purus ut, ultricies arcu. Ut tortor
                lacus, scelerisque vel velit eu, faucibus interdum sem. Donec
                suscipit, ipsum sit amet aliquam blandit, sem nunc maximus nisi,
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Types de véhicules</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Dépots de locationz</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Garages</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Réserver une voiture dès maintenant en nous contactant</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>01234567869</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
