import React from "react";
import { useSpring, animated } from "react-spring";
import dzieci from "./../img/ksiazki/dzieci.jpg";
import dzikie from "./../img/ksiazki/dzikieserce.jpg";
import listy from "./../img/ksiazki/listy.jpg";
import pismoswiete from "./../img/ksiazki/pismoswiete.jpg";
import urzekajaca from "./../img/ksiazki/urzekajaca.jpg";
import o from "./../img/ksiazki/o.jpg";

function Ksiazki() {
  const props = useSpring({
    to: { opacity: 1, width: "100%" },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Książki, które warto przeczytać</h2>
          <br />

          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={pismoswiete} />
            <div className="buttons-box-text col-md-7 text-center">
              <h3 className="h3-header">Pismo Święte</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={o} />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header "> O naśladowaniu Chrystusa </h3>
              <p>Tomasz z Kempis</p>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/241356/o-nasladowaniu-chrystusa"
                target="_blank"
              >
                {" "}
                Lubimy Czytać
              </a>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img
              className="buttons-img buttons-img-miejsca col-md-3"
              src={dzikie}
            />
            <div className="buttons-box-text  col-md-7  text-center">
              <h3 className="h3-header ">
                {" "}
                Dzikie serce. Tęsknoty męskiej duszy
              </h3>
              <p>John Eldredge</p>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/195154/dzikie-serce-tesknoty-meskiej-duszy"
                target="_blank"
              >
                {" "}
                Lubimy Czytać
              </a>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={urzekajaca} />
            <div className="buttons-box-text col-md-7 text-center">
              <h3 className="h3-header ">
                Urzekająca. Odkrywanie tajemnicy kobiecej duszy
              </h3>
              <p> John Eldredge, Stasi Eldredge </p>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni.
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/49966/urzekajaca-odkrywanie-tajemnicy-kobiecej-duszy"
                target="_blank"
              >
                {" "}
                Lubimy Czytać
              </a>
            </div>
          </div>
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={listy} />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header">Listy starego diabła do młodego</h3>
              <p> Clive Staples Lewis </p>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/151625/listy-starego-diabla-do-mlodego"
                target="_blank"
              >
                {" "}
                Lubimy Czytać
              </a>
            </div>
          </div>
          <div className="parafia-row">
            <img className="buttons-img col-md-3" src={dzieci} />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header">Dorosłe dzieci alkoholików</h3>
              <p> Janet G. Woititz </p>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni.
              <br />
              <br />
              <a
                href="http://lubimyczytac.pl/ksiazka/127028/dorosle-dzieci-alkoholikow"
                target="_blank"
              >
                {" "}
                Lubimy Czytać
              </a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Ksiazki;
