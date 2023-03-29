import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Question fréquemment posés</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>
                    1. Quelle est l'avantage de comparer les offres de location
                    de voitures ?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Il est important de comparer les offres de location de
                  voitures, car cela permet de trouver la meilleure offre qui
                  correspond à votre budget et à vos besoins. la meilleure offre
                  qui corresponde à votre budget et à vos besoins. de la
                  meilleure valeur pour votre argent. En comparant plusieurs
                  options, vous pouvez trouver des offres qui proposent des prix
                  plus bas, des services supplémentaires ou de meilleurs modèles
                  de voitures, des services supplémentaires ou de meilleurs
                  modèles de voitures. Vous pouvez trouver des offres de
                  location de voiture en effectuant des recherches en ligne et
                  en comparant les prix de différentes différentes sociétés de
                  location.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Comment trouver les meilleurs offres ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Vous pouvez trouver des offres de location de voiture en
                  effectuant des recherches en ligne et en comparant les prix de
                  différentes sociétés de location. et en comparant les prix des
                  différentes sociétés de location. Les sites web comme Expedia,
                  Kayak et Travelocity vous permettent de comparer les prix et
                  de voir les options de location disponibles. comparer les prix
                  et de voir les options de location disponibles. Il est
                  également Il est également recommandé de s'inscrire à des
                  bulletins d'information électroniques et de suivre les
                  sociétés de location de voitures sur les médias sociaux afin
                  d'être informé de toute offre spéciale. sur les médias sociaux
                  pour être informé des offres spéciales ou des promotions.
                  spéciaux ou des promotions.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>
                    3. Comment puis-je trouver des prix de location de voiture
                    bas ?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Réservez à l'avance : Réserver votre voiture de location à
                  l'avance peut souvent des prix plus bas. Comparez les prix de
                  plusieurs entreprises : Utilisez des sites web comme Kayak,
                  Expedia ou Travelocity pour pour comparer les prix de
                  plusieurs sociétés de location de voitures. Recherchez des
                  codes de réduction et des bons de réduction : Recherchez des
                  codes de réduction et des de réduction que vous pouvez
                  utiliser pour réduire le prix de la location. Louer dans un
                  endroit situé en dehors de l'aéroport peut parfois donner lieu
                  à des prix plus bas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
