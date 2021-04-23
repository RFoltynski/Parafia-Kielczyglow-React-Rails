import {
  HistoriaParafi,
  Miejsca,
  OPatronie,
  ParafiaObecnie,
  WspolnotyParafialne,
} from "./subcomponents/parafiaSubcomponents";

import { Cmentarz } from "./subcomponents/cmentarz/Cmentarz";
import Contactform from "./subcomponents/kontakt/contactForm";
import { Informacje } from "./subcomponents/kontakt/DaneKontaktowe";
import { Kaplica } from "./subcomponents/cmentarz/Kaplica";
import Main from "./MainComponent";
import { Nabozenstwa } from "./subcomponents/informacje/Nabozenstwa.jsx";
import OgloszeniaAktualnosci from "./subcomponents/ogloszenia/OgloszeniaAktualnosci";
import OgloszeniaIntencje from "./subcomponents/ogloszenia/OgloszeniaIntencje";
import { Pogrzeby } from "./subcomponents/cmentarz/Pogrzeby";
import { Powolania } from "./subcomponents/duchowienstwo/powolania.jsx";
import { Proboszcz } from "./subcomponents/duchowienstwo/proboszcz.jsx";
import { Proboszczowie } from "./subcomponents/duchowienstwo/proboszczowie";
import React from "react";
import Sakramenty from "./subcomponents/informacje/Sakramenty";
import { Wikary } from "./subcomponents/duchowienstwo/wikary.jsx";

const subComponents = {
  cmentarz: [
    ["Cmentarz", <Cmentarz />],
    ["Kaplica", <Kaplica />],
    ["Pogrzeby", <Pogrzeby />],
  ],
  duchowienstwo: [
    ["Proboszcz", <Proboszcz key={1} />],
    ["Wikary", <Wikary key={2} />],
    ["Proboszczowie", <Proboszczowie key={3} />],
    ["Powolania", <Powolania key={4} />],
  ],
  informacje: [
    ["Nabożeństwa", <Nabozenstwa key={2} />],
    ["Sakramenty", <Sakramenty key={3} />],
  ],
  kontakt: [
    ["Dane Kontaktowe", <Informacje key={1} />],
    ["Formularz", <Contactform key={2} />],
  ],
  ogloszenia: [
    ["Aktualnosci", <OgloszeniaAktualnosci key={1} />],
    ["Intencje", <OgloszeniaIntencje key={2} />],
  ],
  parafia: [
    ["Historia Parafi", <HistoriaParafi key={1} />],
    ["O Patronie", <OPatronie key={2} />],
    ["Miejsca", <Miejsca key={3} />],
    ["Parafia Obecnie", <ParafiaObecnie key={4} />],
    ["Wspólnoty Parafialne", <WspolnotyParafialne key={5} />],
  ],
};

const createMainComponent = (subcomponentsList, header) => {
  return <Main componentsList={subcomponentsList} header={header} />;
};

export const cmentarz = () =>
  createMainComponent(subComponents.cmentarz, "Cmentarz");

export const duchowienstwo = () =>
  createMainComponent(subComponents.duchowienstwo, "Duchowieństwo");

export const informacje = () =>
  createMainComponent(subComponents.informacje, "Informacje");

export const kontakt = () =>
  createMainComponent(subComponents.kontakt, "Kontakt");

export const ogloszenia = () =>
  createMainComponent(subComponents.ogloszenia, "Ogłoszenia");

export const parafia = () =>
  createMainComponent(subComponents.parafia, "Parafia");
