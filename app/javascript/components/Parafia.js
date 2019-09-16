import React from "react";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";
import franciszek from "./img/franciszek.jpg";
import franciszekM from "./img/franciszek-mlody.jpg";
import franciszekP from "./img/franciszek-prosto.jpg";
import oltarz from "./img/335819.jpg";
import kosciol from "./img/kosciol.jpg";
import ulotka from "./img/ulotka.jpg";
import pamiatka from "./img/pamiatka.jpg";
import stary from "./img/stary.jpg";
import gazeta from "./img/gazeta.jpg";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
      buttonPressed2: false
    };
  }

  handleClick = (compName, e) => {
    this.setState({
      render: compName
    });
  };

  _renderSubComp() {
    switch (this.state.render) {
      case "parafiaObecnie":
        return <ParafiaObecnie />;
      case "oPatronie":
        return <OPatronie />;
      case "historiaParafi":
        return <HistoriaParafi />;
    }
  }

  onClick = event => {
    this.handleClick("parafiaObecnie");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("oPatronie");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true,
        buttonPressed2: false
      });
    })();
  };
  onClick2 = event => {
    this.handleClick("historiaParafi");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true
      });
    })();
  };

  render() {
    return (
      <div className="parafia">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 class="h1-header"> Parafia </h1>
            <div className="parafia-buttons">
              <Button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Parafia Obecnie
              </Button>
              <Button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                O Patronie
              </Button>
              <Button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Historia Parafi
              </Button>

              {this.state.render === "" ? (
                <ParafiaObecnie />
              ) : (
                this._renderSubComp()
              )}
            </div>
          </center>
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    const { children, onClick, className } = this.props;
    return (
      <button
        type="button"
        onClick={
          onClick
          // (this.scrollTo = () => {
          //   scroller.scrollTo("scroll-to-patron", {
          //     duration: 500,
          //     delay: 0,
          //     smooth: "easeInQuad"
          //   });
          // })
        }
        className={className}
      >
        {children}
      </button>
    );
  }
}
function OPatronie() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    leave: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>
            Św. Antoni z Padwy
            <br />
          </h2>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-8">
              <h3 className="h3-header">Podstawowe informacje o św. Antonim</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony. Był tam dwa
              lata, po czym przeniósł się do klasztoru w Coimbrze, które to
              miasto - obok Lizbony - było głównym ośrodkiem życia religijnego i
              kulturalnego kraju. W roku 1219 otrzymał święcenia kapłańskie.
            </div>
            <img className="buttons-img col-md-4" src={franciszekP} />
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-4" src={franciszekM} />
            <div className="buttons-box-text col-md-8">
              <h3 className="h3-header">Życie św. Antoniego</h3>
              Św. Antoni, zapalony duchem męczeńskiej ofiary, postanowił udać
              się do Afryki, by w Maroku oddać swoje życie za Chrystusa. Jednak
              plany Boże były inne. Święty ciężko zachorował i musiał wracać do
              ojczyzny. Zastała go jednak na Morzu Śródziemnym burza i zapędziła
              jego statek na Sycylię. Właśnie w roku 1221 odbywała się w Asyżu
              kapituła generalna nowego zakonu. Święty udał się tam i spotkał ze
              Św. Franciszkiem. Po skończonej kapitule oddał się pod władzę
              brata Gracjana, prowincjała Emilii i Romanii, który wyznaczył mu
              pustelnię w Montepaolo w pobliżu Forli we Włoszech. Czas
              wykorzystał na pogłębienie w sobie życia wewnętrznego i dla swoich
              studiów. Ze szczególnym zamiłowaniem zagłębiał się w Pismo Święte,
              z którego później tak pełną dłonią korzystał. Równocześnie
              udzielał się na niwie duszpasterskiej i kaznodziejskiej.
            </div>
          </div>
          <br />
          <div className="parafia-row-column text-center">
            <h3 className="h3-header">Modlitwa Świętego Antoniego:</h3>

            <div className="parafia-row">
              <blockquote>
                O Panie, uczyń z nas narzędzia Twojego pokoju,
                <br />
                Abyśmy siali miłość tam, gdzie panuje nienawiść;
                <br />
                Wybaczenie tam, gdzie panuje krzywda;
                <br />
                Jedność tam, gdzie panuje zwątpienie;
                <br />
                Nadzieję tam, gdzie panuje rozpacz;
                <br />
                Światło tam, gdzie panuje mrok;
                <br />
                Radość tam, gdzie panuje smutek.
                <br />
                Spraw abyśmy mogli,
                <br />
                Nie tyle szukać pociechy, co pociechę dawać;
                <br />
                Nie tyle szukać zrozumienia, co rozumieć;
                <br />
                Nie tyle szukać miłości, co kochać;
                <br />
                Albowiem dając, otrzymujemy;
                <br />
                Wybaczając, zyskujemy przebaczenie,
                <br />
                A umierając, rodzimy się do wiecznego życia.
                <br />
                Przez Chrystusa Pana naszego. Amen.
              </blockquote>
              <img
                className="buttons-img col-md-4"
                src={franciszek}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

function ParafiaObecnie() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>Parafia Obecnie</h2>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-12">
              <h3 className="h3-header text-center">
                Parafia Świętego Antoniego z Padwy w Kiełczygłowie
              </h3>{" "}
              <p className="text-center">
                Parafia rzymskokatolicka w Kiełczygłowie. Należy do Dekanatu
                Pajęczno archidiecezji częstochowskiej.
              </p>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-8" src={kosciol} />
            <div className="buttons-box-text col-md-4">
              <h3>Adres:</h3>
              <p> 98-358 Kiełczygłów, ul. Świerczewskiego 9</p>
              <h3>Probosz:</h3>
              <p> Ks. Bogdan Ignasiak</p>
              <h3>Msze swięte:</h3>
              <p>
                {" "}
                niedziela i święta: 9.00, 12.00, 15.30; Święta zniesione: 8:00,
                10:00, 16:00; dni powszednie: 7:00, 7:30
              </p>
              <h3>Odpust:</h3>
              <p>
                {" "}
                1. św. Antioniego - 13 czerwca, 2. Niepokalanego Serca NMP -
                niedziela ok. 22 sierpnia
              </p>
              <h3>Doba Eucharystyczna:</h3>
              <p> 30/31 października </p>
              <h3>Kaplica</h3>
              <p>
                {" "}
                Pierzyny Małe - kościół p.w. NMP Królowej Polski; Msze św.:
                niedziela i święta - 10:30, święta zniesione: 12:00, dni
                powszednie: 18:00, Doba Eucharystyczna: 18 stycznia
              </p>
              <h3>Mieszkańcy:</h3>
              <p> 2500</p>
              <h3>Dotychczasowi proboszczowie:</h3>
              <p>
                {" "}
                Antonii Wróbel (1925-1938),
                <br /> Stanisław Dąbrowski (1938-1939),
                <br /> Franciszek Figura (1939-1940),
                <br /> Wincenty Kruk (1940-1941),
                <br /> Józef Janson (1945-1949),
                <br /> Antoni Turbański (1949-1953),
                <br /> Józef Janson (1953-1959),
                <br /> Edward Polak (1959-1990),
                <br />
                Bogdan Ignasiak (1990- do teraz)
              </p>

              <h3>Z parafii pochodzą księża:</h3>
              <p> Józef Wiśńiewski, Stanisław Lechowski</p>
              <h3>Rys Historyczny</h3>
              <p>
                {" "}
                Parafię erygował bp włocławski Stanisław Zdzitkowiecki
                21.08.1924 r. Obecny kosciół został wybudowany staraniem ks.
                Józefa Jansona w latach 1948-1957. Konsekrował go bp Zdzisław
                Goliński 13.06.1957 roku. Na terenie parafii istnieje w
                Pierzynach mały kościół filialny zbudowany w latach 1985-1988.
                Jego budowę rozpoczął miejscowy wikariusz ks. Adam Sołtysiak,
                dokończył wikariusz, a nastęþnie proboszcz - ks. Bogdan
                Ignasiak. Uroczyście posœięcił bp Stanisław Nowak 29.05.1988r.
              </p>
            </div>
          </div>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-8">
              Św. Franciszek był zamożnym rycerzem, niestroniącym od dobrej
              zabawy. Po nawróceniu zamienił swoje bogate ubranie z żebrakiem,
              modlił się i pokutował. Pewnego dnia usłyszał słowa:{" "}
              <blockquote> Franciszku napraw mój kościół </blockquote> Zapragnął
              radykalnie żyć Ewangelią, zachowując ubóstwo i głosząc nawrócenie.
              Zgromadzili się wokół niego naśladowcy, dla których spisał regułę
              życia ewangelicznego, dając początek Zakonowi Braci Mniejszych,
              nazywanych dzisiaj od jego imienia franciszkanami. Franciszek
              zrozumiał, że celem ubóstwa jest większa miłość, zaś owocem –
              radość.
              <br />
              <br />W jego wspomnienie dziękujemy Panu za dar zbawienia,
              prosząc, byśmy przyjęli Go tak żarliwie jak Franciszek.
            </div>
            <img className="buttons-img col-md-4" src={oltarz} />
          </div>
          <br />
          <div className="parafia-row-column text-center">
            <div className="buttons-box-text">
              <h3 className="h3-header">
                Miejscowości należące do parafii Kiełczygłów:
              </h3>
            </div>
            <div className="parafia-row">
              <ul className="parafia-obecenie">
                <li>Dryganek Duży</li>
                <li>Dryganek Mały</li>
                <li>Glina Duża</li>
                <li>Glina Mała</li>
                <li>Kule</li>
                <li>Gumnisko</li>
              </ul>
              <ul className="parafia-obecenie">
                <li>Dąbrowa</li>
                <li>Pierzyny Duże</li>
                <li>Pierzyny Małe</li>
                <li>Kiełczygłów - Okupniki</li>
                <li>Kiełczygłów</li>
                <li>Huta</li>
                <li>Lipie</li>
              </ul>
              <ul className="parafia-obecenie">
                <li>Kiełczygłówek</li>
                <li>Osina Mała</li>
                <li>Osina Duża</li>
                <li>Beresie Małe</li>
                <li>Obrów</li>
                <li>Kiełczygłów Kolonia (nr od 1 do 19)</li>
              </ul>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

function HistoriaParafi() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2>Historia Parafii</h2>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-7">
              <h3 className="h3-header">Powstanie Parafii</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony. Był tam dwa
              lata, po czym przeniósł się do klasztoru w Coimbrze, które to
              miasto - obok Lizbony - było głównym ośrodkiem życia religijnego i
              kulturalnego kraju. W roku 1219 otrzymał święcenia kapłańskie.
            </div>
            <img className="buttons-img col-md-5" src={stary} />
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-6" src={pamiatka} />
            <div className="buttons-box-text col-md-6">
              <h3 className="h3-header">Budowa Kościoła</h3>
              Św. Antoni, zapalony duchem męczeńskiej ofiary, postanowił udać
              się do Afryki, by w Maroku oddać swoje życie za Chrystusa. Jednak
              plany Boże były inne. Święty ciężko zachorował i musiał wracać do
              ojczyzny. Zastała go jednak na Morzu Śródziemnym burza i zapędziła
              jego statek na Sycylię. Właśnie w roku 1221 odbywała się w Asyżu
              kapituła generalna nowego zakonu. Święty udał się tam i spotkał ze
              Św. Franciszkiem. Po skończonej kapitule oddał się pod władzę
              brata Gracjana, prowincjała Emilii i Romanii, który wyznaczył mu
              pustelnię w Montepaolo w pobliżu Forli we Włoszech. Czas
              wykorzystał na pogłębienie w sobie życia wewnętrznego i dla swoich
              studiów. Ze szczególnym zamiłowaniem zagłębiał się w Pismo Święte,
              z którego później tak pełną dłonią korzystał. Równocześnie
              udzielał się na niwie duszpasterskiej i kaznodziejskiej.
            </div>
          </div>
          <br />
          <div className="parafia-row-column text-center">
            <div className="buttons-box-text">
              <h3 className="h3-header">Inne istotne wydarzenia</h3>
            </div>
            <div className="parafia-row">
              <blockquote>
                O Panie, uczyń z nas narzędzia Twojego pokoju,
                <br />
                Abyśmy siali miłość tam, gdzie panuje nienawiść;
                <br />
                Wybaczenie tam, gdzie panuje krzywda;
                <br />
                Jedność tam, gdzie panuje zwątpienie;
                <br />
                Nadzieję tam, gdzie panuje rozpacz;
                <br />
                Światło tam, gdzie panuje mrok;
                <br />
                Radość tam, gdzie panuje smutek.
                <br />
                Spraw abyśmy mogli,
                <br />
                Nie tyle szukać pociechy, co pociechę dawać;
                <br />
                Nie tyle szukać zrozumienia, co rozumieć;
                <br />
                Nie tyle szukać miłości, co kochać;
                <br />
                Albowiem dając, otrzymujemy;
                <br />
                Wybaczając, zyskujemy przebaczenie,
                <br />
                A umierając, rodzimy się do wiecznego życia.
                <br />
                Przez Chrystusa Pana naszego. Amen.
              </blockquote>
              <img
                className="buttons-img col-md-4"
                src={gazeta}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Parafia;
