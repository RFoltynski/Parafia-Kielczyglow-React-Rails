import React from "react";
import Navbar from "./Navbar";

class Intencje extends React.Component {
  constructor() {
    super();
    this.state = {
      intencions: [],
      error: null
    };
  }

  render() {
    const pStyle = {
      margin: "0px"
    };

    const listStyle = {
      width: "100%"
    };

    return (
      <div className="intencje">
        <div className="overlay">
          <Navbar />{" "}
          <center>
            <h1 className="intencje-h1">Intencje</h1>
          </center>
          <div className="row" style={pStyle}>
            <div className="intencje-column">
              <h2>Kiełczygłów</h2>
              {Array.isArray(this.state.intencions) ? (
                this.state.intencions.map(item => {
                  return (
                    <ul>
                      <h3>Poniedziałek: </h3>
                      7:00
                      <li>{item.intencjaKeil1}</li>
                      7:30
                      <li>{item.intencjaKeil11}</li>
                      <h3>Wtorek: </h3>
                      7:00
                      <li>{item.intencjaKeil2}</li>
                      7:30
                      <li>{item.intencjaKeil22}</li>
                      <h3>Środa: </h3>
                      7:00
                      <li>{item.intencjaKeil3}</li>
                      7:30
                      <li>{item.intencjaKeil33}</li>
                      <h3>Czwartek: </h3>
                      7:00
                      <li>{item.intencjaKeil4}</li>
                      7:30
                      <li>{item.intencjaKeil44}</li>
                      <h3>Piątek: </h3>
                      7:00
                      <li>{item.intencjaKeil5}</li>
                      7:30
                      <li>{item.intencjaKeil55}</li>
                      <h3>Sobota: </h3>
                      7:00
                      <li>{item.intencjaKeil6}</li>
                      7:30
                      <li>{item.intencjaKeil66}</li>
                      <h3>Niedziela: </h3>
                      7:00
                      <li>{item.intencjaKeil7}</li>
                      7:30
                      <li>{item.intencjaKeil77}</li>
                    </ul>
                  );
                })
              ) : (
                <p>Nie ma intencji na ten tydzien..</p>
              )}
            </div>

            <div className="intencje-column">
              <h2>Pierzyny</h2>
              {this.state.intencions.map(item => {
                return (
                  <ul>
                    <h3>Poniedziałek: </h3>
                    16:00
                    <li>{item.intencjaPie1}</li>
                    16:30
                    <li>{item.intencjaPie11}</li>
                    <h3>Wtorek: </h3>
                    16:00
                    <li>{item.intencjaPie2}</li>
                    16:30
                    <li>{item.intencjaPie22}</li>
                    <h3>Środa: </h3>
                    16:00
                    <li>{item.intencjaPie3}</li>
                    16:30
                    <li>{item.intencjaPie33}</li>
                    <h3>Czwartek: </h3>
                    16:00
                    <li>{item.intencjaPie4}</li>
                    16:30
                    <li>{item.intencjaPie44}</li>
                    <h3>Piątek: </h3>
                    16:00
                    <li>{item.intencjaPie5}</li>
                    16:30
                    <li>{item.intencjaPie55}</li>
                    <h3>Sobota: </h3>
                    16:00
                    <li>{item.intencjaPie6}</li>
                    16:30
                    <li>{item.intencjaPie66}</li>
                    <h3>Niedziela: </h3>
                    16:00
                    <li>{item.intencjaPie7}</li>
                    16:30
                    <li>{item.intencjaPie77}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intencje;
