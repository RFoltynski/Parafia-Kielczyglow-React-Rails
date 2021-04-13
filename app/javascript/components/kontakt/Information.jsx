import React from "react";

function Information() {
  return (
    <div className="subcategory__container">
      <div className="subcategory__view">
        <h2>Dane Kontaktowe</h2>
        <div className="subcategory__view__column">
          <div className="subcategory__view__column__content">
            <h4>Adres plebanii:</h4>
            <p>Parafia św Antoniego Padewskiego w Kiełczygłowie</p>
            <p>ul ks Józefa Jansona 14</p>
            <p>98-358 Kiełczygłów</p>
            <h4>Dane kontaktowe:</h4>
            <p>Tel: 000000000000</p>
            <p>8:30-10:00 (w dni powszednie)</p>
            <p>
              W sprawach pilnych takich jak pogrzeb czy wizyta u chorego,
              uprzejmie prosimy o kontakt telefoniczny.
            </p>{" "}
            <p>ks Proboszcz Bogdan Ignasiak 000 000 000</p>
            <p>ks Remigiusz Lech 000 000 000</p>
            <p>grabarz: Sylwester Janus 000 000 000</p>
            <p>email: kancelaria@parafiakielczyglow.pl</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
