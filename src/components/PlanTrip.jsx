import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plannifier votre voyage </h3>
              <h2>Location de voiture simple et rapide</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Selectionner une voiture</h3>
                <p>
                  Nous proposons une large gamme de véhicules pour tous vos
                  besoins de conduite. Nous avons la voiture idéale pour
                  répondre à vos besoins
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Opérateur de contact</h3>
                <p>
                  Nos opérateurs compétents et amicaux sont toujours prêts à à
                  répondre à vos questions ou à vos préoccupations.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>En voiture</h3>
                <p>
                  Que vous preniez la route ou non, nous avons ce qu'il vous
                  faut avec notre large gamme de voitures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
