import React from "react";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";
import franciszek from "./img/franciszek.jpg";
import franciszekM from "./img/franciszek-mlody.jpg";
import franciszekP from "./img/franciszek-prosto.jpg";

class Parafia extends React.Component {
  constructor() {
    super();
    this.state = {
      render: "",
      buttonPressed: true,
      buttonPressed1: false,
      buttonPressed2: false,
      buttonPressed3: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
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
      case "Miejscowosci":
        return <Miejscowosci />;
    }
  }

  onClick = event => {
    this.handleClick("parafiaObecnie");
    (this.buttonPress = () => {
      this.setState({
        buttonPressed: true,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: false
      });
    })();
  };
  onClick1 = event => {
    this.handleClick("oPatronie");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: true,
        buttonPressed2: false,
        buttonPressed3: false
      });
    })();
  };
  onClick2 = event => {
    this.handleClick("historiaParafi");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false
      });
    })();
  };
  onClick3 = event => {
    this.handleClick("Miejscowosci");
    (this.buttonPress1 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: false,
        buttonPressed3: true
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
              <Button
                onClick={this.onClick3}
                className={this.state.buttonPressed3 ? "buttonWhite" : "button"}
              >
                Miejscowości
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
          <h2 name="scroll-to-historia">
            Franciszek z Asyżu <br /> (1182-1226)
          </h2>
          <br />
          <div className="parafia-row">
            <div className="buttons-box-text col-md-8">
              Przyszedł na świat w rodzinie zamożnego kupca, sukiennika
              umbryjskiego Pietro di Bernardo di Moricone. Jego matka, Pika,
              pochodząca z Pikardii, nadała mu na chrzcie imię Jana (Chrzciciela
              albo Ewangelisty), które ojciec zmienił na Francesco,
              prawdopodobnie będąc pod ogromnym wrażeniem Francji, w której
              zawarł korzystne umowy handlowe. Niektóre źródła podają, że
              Franciszek miał brata o imieniu Anioł. Pierwsze lata swojego życia
              spędził w Asyżu, uczęszczał tam do parafialnej szkoły przy
              kościele św. Jerzego, gdzie zdobył podstawowe wykształcenie[4].
            </div>
            <img className="buttons-img col-md-4" src={franciszekP} />
          </div>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-4" src={franciszekM} />
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
          </div>
          <br />
          <div className="parafia-row-column text-center">
            <div className="buttons-box-text">
              <h3 className="h3-header">Modlitwa Świętego Franciszka:</h3>
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
          <h2 name="scroll-to-historia">Parafia Obecnie</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia hendrerit massa lobortis imperdiet. Duis at nibh tempor,
              congue eros dapibus, tristique ante. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              suscipit, lorem vitae iaculis scelerisque, orci nulla fermentum
              nulla, in sollicitudin velit nisl iaculis sem. Etiam ullamcorper
              urna eu lectus efficitur, vehicula faucibus nibh blandit. Ut
              mattis ac nisi in convallis. Mauris malesuada mauris nisi, eu
              aliquet leo dapibus et. Sed augue ligula, dictum nec condimentum
              eu, consequat in ligula. Integer aliquam elementum nisl, ut
              bibendum tortor porttitor id. Donec dapibus feugiat ornare.
              Integer blandit elementum eros, nec dictum sem hendrerit id.
              Phasellus lacus nulla, aliquet a purus quis, porttitor posuere
              leo. Nunc a pharetra tortor. Nam tempor iaculis arcu, et bibendum
              enim facilisis quis
            </div>
            <div className="col-md-4">
              <img className="buttons-img" src="..\img\parafia\obecnie.jpg" />
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
          <h2 name="scroll-to-historia">Historia Parafi</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia hendrerit massa lobortis imperdiet. Duis at nibh tempor,
              congue eros dapibus, tristique ante. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
              suscipit, lorem vitae iaculis scelerisque, orci nulla fermentum
              nulla, in sollicitudin velit nisl iaculis sem. Etiam ullamcorper
              urna eu lectus efficitur, vehicula faucibus nibh blandit. Ut
              mattis ac nisi in convallis. Mauris malesuada mauris nisi, eu
              aliquet leo dapibus et. Sed augue ligula, dictum nec condimentum
              eu, consequat in ligula. Integer aliquam elementum nisl, ut
              bibendum tortor porttitor id. Donec dapibus feugiat ornare.
              Integer blandit elementum eros, nec dictum sem hendrerit id.
              Phasellus lacus nulla, aliquet a purus quis, porttitor posuere
              leo. Nunc a pharetra tortor. Nam tempor iaculis arcu, et bibendum
              enim facilisis quis
            </div>
            <div className="col-md-4">
              <img className="buttons-img" src="..\img\parafia\stary.jpg" />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

function Miejscowosci() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="parafia-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Parafia Obecnie</h2>
          <div className="buttons-content row">
            <div className="buttons-box-text col-md-8">
              <ul>
                <li>Dryganek Duży</li>
                <li>Dryganek Mały</li>
                <li>Glina Duża</li>
                <li>Glina Mała</li>
                <li>Kule</li>
                <li>Gumnisko</li>
                <li>Dąbrowa</li>
                <li>Pierzyny Duże</li>
                <li>Pierzyny Małe</li>
                <li>Kiełczygłów - Okupniki</li>
                <li>Kiełczygłów</li>
                <li>Huta</li>
                <li>Lipie</li>
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

export default Parafia;
