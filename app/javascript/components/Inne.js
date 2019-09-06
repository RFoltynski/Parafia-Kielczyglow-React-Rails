import React from "react";
import Navbar from "./Navbar";
import { useSpring, animated } from "react-spring";
import dzieci from "./img/ksiazki/dzieci.jpg";
import dzikie from "./img/ksiazki/dzikieserce.jpg";
import listy from "./img/ksiazki/listy.jpg";
import pismoswiete from "./img/ksiazki/pismoswiete.jpg";
import urzekajaca from "./img/ksiazki/urzekajaca.jpg";
import o from "./img/ksiazki/o.jpg";
import stacja7 from "./img/webs/Stacja7.png";
import deon from "./img/webs/deon.jpg";
import pomnik from "./img/miejsca/pomnik.jpg";

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
      case "Miejsca":
        return <Miejsca />;
      case "ksiazki":
        return <Ksiazki />;
      case "miejscawsieci":
        return <MiejscaWSieci />;
    }
  }

  onClick = event => {
    this.handleClick("Miejsca");
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
    this.handleClick("ksiazki");
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
    this.handleClick("miejscawsieci");
    (this.buttonPress2 = () => {
      this.setState({
        buttonPressed: false,
        buttonPressed1: false,
        buttonPressed2: true,
        buttonPressed3: false
      });
    })();
  };

  render() {
    return (
      <div className="inne">
        <div className="overlay">
          <Navbar />
          <center>
            <h1 class="h1-header"> Inne </h1>
            <div className="inne-buttons">
              <Button
                onClick={this.onClick}
                className={this.state.buttonPressed ? "buttonWhite" : "button"}
              >
                Miejsca w parafii
              </Button>
              <Button
                onClick={this.onClick1}
                className={this.state.buttonPressed1 ? "buttonWhite" : "button"}
              >
                Książki
              </Button>
              <Button
                onClick={this.onClick2}
                className={this.state.buttonPressed2 ? "buttonWhite" : "button"}
              >
                Miejsca w sieci
              </Button>

              {this.state.render === "" ? <Miejsca /> : this._renderSubComp()}
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

function Miejsca() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2 name="scroll-to-historia"> Miesjca w parafii </h2>
          <div className="inne-row">
            <img
              className="buttons-img buttons-img-miejsca col-md-5"
              src={pomnik}
            />
            <div className="buttons-box-text col-md-7 text-center">
              <h3 className="h3-header">Kaplica w Pierzynach</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
            </div>
          </div>
          <br />
          <div className="inne-row">
            <img
              className="buttons-img buttons-img-miejsca col-md-5"
              src={pomnik}
            />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header "> Cmentarz </h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
              <br />
            </div>
          </div>
          <br />
          <div className="inne-row">
            <img
              className="buttons-img buttons-img-miejsca col-md-5"
              src={pomnik}
            />
            <div className="buttons-box-text col-md-7  text-center">
              <h3 className="h3-header "> Pomnik ofiar II wojny światowej </h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Według
              podania, jego rodzicami byli Maria i Marcin Boglioni. Pomiędzy 15.
              a 20. rokiem życia wstąpił do Kanoników Regularnych Św. Augustyna,
              którzy mieli swój klasztor na przedmieściu Lizbony.
              <br />
            </div>
          </div>
          <br />
        </div>
      </animated.div>
    </div>
  );
}

function Ksiazki() {
  const props = useSpring({
    to: { opacity: 1 },
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

function MiejscaWSieci() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="inne-row">
      <animated.div style={props}>
        <div className="buttons-box">
          <h2 name="scroll-to-historia">Mijsca w sieci</h2>
          <br />
          <div className="parafia-row">
            <img className="buttons-img col-md-3 offset-md-1" src={deon} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <h3 className="h3-header">Deon</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Święty Antoni
              urodził się w roku 1195 w Lizbonie, stolicy Portugalii. Na chrzcie
              św. otrzymał imię Ferdynand.
            </div>
          </div>
          <div className="parafia-row">
            <img className="buttons-img col-md-3 offset-md-1" src={stacja7} />
            <div className="buttons-box-text col-md-5 offset-md-1 text-center">
              <h3 className="h3-header">Stacja7</h3>
              Święty Antoni urodził się w roku 1195 w Lizbonie, stolicy
              Portugalii. Na chrzcie św. otrzymał imię Ferdynand. Święty Antoni
              urodził się w roku 1195 w Lizbonie, stolicy Portugalii. Na chrzcie
              św. otrzymał imię Ferdynand.
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Parafia;
