import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Pourquoi nous choisir ?</h4>
                <h2>Meilleur rapport qualité prix</h2>
                <p>
                  Découvrez les meilleures offres que vous trouverez avec nos
                  offres imbattables. Nous nous engageons à vous offrir le
                  meilleur rapport qualité-prix pour votre argent, afin que vous
                  puissiez profiter de services de qualité et produits sans vous
                  ruiner. Nos offres sont conçues pour vous offrir l'expérience
                  de location ultime, alors ne manquez pas votre chance
                  d'économiser gros.
                </p>
                <a href="#home">
                  En savoir plus &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Véhicules tout terrain</h4>
                    <p>
                      Faites passer votre expérience de conduite au niveau
                      supérieur avec nos des véhicules haut de gamme pour vos
                      aventures à travers le pays.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tarif tout compris</h4>
                    <p>
                      Obtenez tout ce dont vous avez besoin dans un seul
                      appareil pratique et transparent avec notre politique de
                      prix tout compris.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Pas de frais cachés</h4>
                    <p>
                      Ayez l'esprit tranquille grâce à notre politique sans
                      frais cachés. Nous croire en une tarification transparente
                      et honnête.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
