import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Spring } from "react-spring/renderprops.cjs";

class Intencje extends React.Component {
  constructor() {
    super();
    this.state = {
      intencions: [],
      error: null
    };
  }

  componentWillMount() {
    axios
      .get("api/v1/intentions.json", {}, { "Content-Type": "application/json" })
      .then(res => {
        this.setState({
          intentions: res.data.data,
          isLoading: true
        });
      });

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="intencje">
        <div className="overlay">
          <Navbar />{" "}
          <center>
            <h1 className="h1-header">Intencje</h1>
          </center>
          <Spring
            from={{ opacity: 0, margin: 0 }}
            to={{ opacity: 1, margin: 0 }}
          >
            {props => (
              <div class="row" style={props}>
                <div className="intencje-column">
                  <h2>Kiełczygłów</h2>
                  {this.state.isLoading ? (
                    this.state.intentions.kielczyglow.map(item => {
                      return (
                        <ul>
                          <a href={item.file}>Photo</a>
                          <h3>Poniedziałek: </h3>
                          7:00
                          <li>{item.K1monday}</li>
                          7:30
                          <li>{item.K2monday}</li>
                          <h3>Wtorek: </h3>
                          7:00
                          <li>{item.K1tuesday}</li>
                          7:30
                          <li>{item.K2tuesday}</li>
                          <h3>Środa: </h3>
                          7:00
                          <li>{item.K1wednesday}</li>
                          7:30
                          <li>{item.K2wednesday}</li>
                          <h3>Czwartek: </h3>
                          7:00
                          <li>{item.K1thursday}</li>
                          7:30
                          <li>{item.K2thursday}</li>
                          <h3>Piątek: </h3>
                          7:00
                          <li>{item.K1friday}</li>
                          7:30
                          <li>{item.K2friday}</li>
                          <h3>Sobota: </h3>
                          7:00
                          <li>{item.K1saturday}</li>
                          7:30
                          <li>{item.K2saturday}</li>
                          <h3>Niedziela: </h3>
                          9:00
                          <li>{item.K1sunday}</li>
                          12:00
                          <li>{item.K2sunday}</li>
                          15:30
                          <li>{item.P2sunday}</li>
                        </ul>
                      );
                    })
                  ) : (
                    <p>Nie ma intencji na ten tydzien..</p>
                  )}
                </div>

                <div className="intencje-column">
                  <h2>Pierzyny</h2>
                  {this.state.isLoading ? (
                    this.state.intentions.pierzyny.map(item => {
                      return (
                        <ul>
                          <h3>Poniedziałek: </h3>
                          17:00
                          <li>{item.P1monday}</li>
                          <h3>Wtorek: </h3>
                          17:00
                          <li>{item.P1tuesday}</li>
                          <h3>Środa: </h3>
                          17:00
                          <li>{item.P1wednesday}</li>
                          <h3>Czwartek: </h3>
                          17:00
                          <li>{item.P1thursday}</li>
                          <h3>Piątek: </h3>
                          17:00
                          <li>{item.P1friday}</li>
                          <h3>Sobota: </h3>
                          17:00
                          <li>{item.P1saturday}</li>
                          <h3>Niedziela: </h3>
                          10:30
                          <li>{item.P1sunday}</li>
                        </ul>
                      );
                    })
                  ) : (
                    <p>Nie ma intencji na ten tydzien..</p>
                  )}
                </div>
                <div className="intencje-column">
                  <h2>K.Michał</h2>
                  {this.state.isLoading ? (
                    this.state.intentions.pierzyny.map(item => {
                      return (
                        <ul>
                          <h3>Poniedziałek: </h3>
                          17:00
                          <li>{item.P2monday}</li>
                          <h3>Wtorek: </h3>
                          17:00
                          <li>{item.P2tuesday}</li>
                          <h3>Środa: </h3>
                          17:00
                          <li>{item.P2wednesday}</li>
                          <h3>Czwartek: </h3>
                          17:00
                          <li>{item.P2thursday}</li>
                          <h3>Piątek: </h3>
                          17:00
                          <li>{item.P2friday}</li>
                          <h3>Sobota: </h3>
                          17:00
                          <li>{item.P2saturday}</li>
                        </ul>
                      );
                    })
                  ) : (
                    <p>Nie ma intencji na ten tydzien..</p>
                  )}
                </div>
              </div>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

export default Intencje;
