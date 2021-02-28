import React, { useState, useEffect } from "react";

const OgloszeniaIntencje = () => {
  const [intention, setIntentions] = useState([]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch("api/v1/intentions.json");
      const respJson = await response.json();
      setIntentions(respJson.data.kielczyglow[0].file);
    };
    fetchFunc();
  }, []);

  return (
    <div className="Ogloszenia-comp">
      <div className="news-boxes">
        <div className="col-md-10">
          {" "}
          <center>
            <div className="newsView-box">
              {" "}
              <h2>Intencje mszy świętych</h2>
              <div class="col-md-10">
                <div className="newsView-box-img col-md-12 text-center">
                  <a href={intention} target="_blank">
                    Pobierz intencje z tygodnia:
                  </a>
                  <br />
                  <div className="button-inside-box-container">
                    <button className="button-inside-box">Skpiuj link</button>
                    <button className="button-inside-box">
                      Otworz w nowej karcie
                    </button>
                    <button className="button-inside-box">Pobierz</button>
                  </div>
                </div>

                <div className="newsView-box-img col-md-12 text-center">
                  <a href={intention} target="_blank">
                    Pobierz intencje z tygodnia:{" "}
                  </a>
                  <br />
                  <div className="button-inside-box-container">
                    <button className="button-inside-box">Skpiuj link</button>
                    <button className="button-inside-box">
                      Otworz w nowej karcie
                    </button>
                    <button className="button-inside-box">Pobierz</button>
                  </div>
                </div>

                <div className="newsView-box-img col-md-12 text-center">
                  <a href={intention} target="_blank">
                    Pobierz intencje z tygodnia:{" "}
                  </a>
                  <br />
                  <button className="button-inside-box">Skpiuj link</button>
                  <button className="button-inside-box">
                    Otworz w nowej karcie
                  </button>
                  <button className="button-inside-box">Pobierz</button>
                </div>
                <div className="newsView-box-img col-md-12 text-center">
                  <a href={intention} target="_blank">
                    Pobierz intencje z tygodnia:{" "}
                  </a>
                  <br />
                  <div className="newsView-box-img col-md-12 text-center">
                    <button className="button-inside-box">Skpiuj link</button>
                    <button className="button-inside-box">
                      Otworz w nowej karcie
                    </button>
                    <button className="button-inside-box">Pobierz</button>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default OgloszeniaIntencje;
