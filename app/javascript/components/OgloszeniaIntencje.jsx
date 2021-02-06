import React, { Component } from "react";
import axios from "axios";

class OgloszeniaIntencje extends Component {
  constructor(props) {
    super(props);
    this.state = { intention: this.props.intentionlink };
  }

  render() {
    return (
      <div className="Ogloszenia-comp">
        <div className="news-boxes">
          <div className="col-md-10">
            {" "}
            <center>
              <div className="newsView-box">
                {" "}
                <h2>Intencje mszy swietych na tydzien:</h2>
                <div class="col-md-10">
                  <div className="newsView-box-img col-md-12 text-center">
                    <a href={this.state.intention} target="_blank">
                      Download Intencje
                    </a>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default OgloszeniaIntencje;
