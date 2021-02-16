import React from "react";
import ReactBnbGallery from "react-bnb-gallery";
import caly from "./../img/budowa/caly.JPG";
import caly2 from "./../img/budowa/caly2.JPG";
import dach from "./../img/budowa/dach.JPG";
import dach2 from "./../img/budowa/dach2.JPG";
import dach3 from "./../img/budowa/dach3.JPG";
import dach4 from "./../img/budowa/dach4.JPG";
import fundamenty from "./../img/budowa/fundamenty.JPG";
import konsekracja from "./../img/budowa/konsekracja.JPG";
import konsekracja2 from "./../img/budowa/konsekracja2.JPG";
import organy from "./../img/budowa/organy2.JPG";
import stolarka from "./../img/budowa/stolarka.JPG";
import swieto from "./../img/budowa/swieto.JPG";
import wsrodku from "./../img/budowa/wsrodku.JPG";
import wsrodku2 from "./../img/budowa/wsrodku2.JPG";
import wsrodku3 from "./../img/budowa/wsrodku3.JPG";
import wsrodku4 from "./../img/budowa/wsrodku4.JPG";
import stary from "./../img/parafia/HistoriaParafi/stary.jpg";
import gazeta from "./../img/parafia/HistoriaParafi/gazeta.jpg";
import pamiatka from "./../img/parafia/HistoriaParafi/pamiatka.jpg";
import ulotka from "./../img/parafia/HistoriaParafi/ulotka.jpg";

class HistoriaParafi extends React.Component {
  state = {
    showPost: false,
    galleryOpened: false,
    numberOfPhoto: 0,
  };

  toggleGallery = (numberOfPhoto) => {
    this.setState({
      galleryOpened: !this.state.galleryOpened,
      numberOfPhoto: numberOfPhoto,
    });
  };

  photos = [
    { photo: stary },
    { photo: ulotka },
    { photo: fundamenty },
    { photo: caly },
    { photo: caly2 },
    { photo: dach },
    { photo: dach2 },
    { photo: dach3 },
    { photo: dach4 },
    { photo: wsrodku },
    { photo: wsrodku2 },
    { photo: wsrodku3 },
    { photo: wsrodku4 },
    { photo: organy },
    { photo: stolarka },
    { photo: konsekracja },
    { photo: konsekracja2 },
    { photo: swieto },
    { photo: pamiatka },
    { photo: gazeta },
  ];

  render() {
    return (
      <div className="parafia-row">
        <div className="buttons-box" style={{ color: "black" }}>
          <h2>Historia Parafii</h2>
          <br />

          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Powstanie Parafii</h3>
            <p>
              {" "}
              Parafię erygował bp włocławski Stanisław Zdzitkowiecki 21.08.1924
              r.
            </p>
            <ReactBnbGallery
              show={this.state.galleryOpened}
              photos={this.photos}
              onClose={this.toggleGallery}
              activePhotoIndex={this.state.numberOfPhoto}
            />
            {(this.photos || []).map((downloadURL, i) => {
              if (i < 2) {
                return (
                  <img
                    className="newsView-img"
                    onClick={() => this.toggleGallery(i)}
                    src={downloadURL.photo}
                    key={i}
                  />
                );
              }
            })}
          </div>
          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Budowa Kościoła</h3>
            Obecny kosciół został wybudowany staraniem ks. Józefa Jansona w
            latach 1948-1957.
            <div className="row">
              <div className="col-md-12">
                {(this.photos || []).map((downloadURL, i) => {
                  if (i > 2 && i <= 8) {
                    return (
                      <img
                        className="newsView-img"
                        onClick={() => this.toggleGallery(i)}
                        src={downloadURL.photo}
                        key={i}
                      />
                    );
                  }
                })}
              </div>
            </div>
            Prace wewnątrz
            <div className="row">
              <div className="col-md-12">
                {(this.photos || []).map((downloadURL, i) => {
                  if (i > 8 && i <= 14) {
                    return (
                      <img
                        className="newsView-img"
                        onClick={() => this.toggleGallery(i)}
                        src={downloadURL.photo}
                        key={i}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">Konsekracja Kościoła</h3>
            Kościół konsekrował bp Zdzisław Goliński 13.06.1957 roku.
            <div className="row">
              <div className="col-md-12">
                {(this.photos || []).map((downloadURL, i) => {
                  if (i > 14 && i <= 18) {
                    return (
                      <img
                        className="newsView-img"
                        onClick={() => this.toggleGallery(i)}
                        src={downloadURL.photo}
                        key={i}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="text-center offset-md-1 col-md-10">
            <h3 className="h3-header">
              Artykuł z zatrzymania Ks. Józefa Jansona
            </h3>

            <div className="row">
              <div className="col-md-12">
                {(this.photos || []).map((downloadURL, i) => {
                  if (i > 18 && i <= 20) {
                    return (
                      <img
                        className="newsView-img"
                        onClick={() => this.toggleGallery(i)}
                        src={downloadURL.photo}
                        key={i}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <blockquote>
              Ksiądz Józef Janson skazany za szerzenie wrogiej propagandy
              przeciwko Państwu
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoriaParafi;
