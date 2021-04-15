import Janson from "./../../img/ksieza/Józef_Janson.JPG";
import Kruk from "./../../img/ksieza/Wincenty_Kruk.JPG";
import Polak from "./../../img/ksieza/Edward_Polak.JPG";
import React from "react";
import Turbanski from "./../../img/ksieza/Antonii_Turbanski.JPG";
import Wrobel from "./../../img/ksieza/Antoni_Wrobel.JPG";

function Proboszczowie() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2> Poprzedni proboszczowie</h2>

        <div className="subcategory__view__column probszczowie">
          <div>
            <img src={Polak} className="proboszczowie-img" />
            <div className="proboszczowie-img-title">
              Edward Polak (1959-1990){" "}
            </div>
          </div>
          <hr />
          <div>
            <img src={Turbanski} className="proboszczowie-img" />
            <div className="proboszczowie-img-title">
              {" "}
              Antoni Turbański (1949-1953){" "}
            </div>
          </div>
          <hr />
          <div>
            <img src={Janson} className="proboszczowie-img" />
            <div className="proboszczowie-img-title">
              {" "}
              Józef Janson (1945-1949) (1953-1959){" "}
            </div>
          </div>
          <hr />
          <div>
            <img src={Kruk} className="proboszczowie-img" />
            <div className="proboszczowie-img-title">
              {" "}
              Wincenty Kruk (1940-1941){" "}
            </div>
          </div>
          <hr />
          <div>
            <div className="proboszczowie-img"> BRAK ZDJĘCIA </div>
            <div className="proboszczowie-img-title">
              Franciszek Figura (1939-1940)
            </div>
          </div>
          <hr />
          <div>
            <div className="proboszczowie-img"> BRAK ZDJĘCIA </div>
            <div className="proboszczowie-img-title">
              Stanisław Dąbrowski (1938-1939)
            </div>
          </div>
          <hr />
          <div>
            <img src={Wrobel} className="proboszczowie-img" />
            <div className="proboszczowie-img-title">
              Antonii Wróbel (1925-1938)
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Proboszczowie;
