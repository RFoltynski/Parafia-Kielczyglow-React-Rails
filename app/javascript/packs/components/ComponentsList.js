import React from "react";

import Main from "./MainComponent";

import { Cmentarz } from "./subcomponents/cmentarz/Cmentarz";
import { Kaplica } from "./subcomponents/cmentarz/Kaplica";
import { Pogrzeby } from "./subcomponents/cmentarz/Pogrzeby";

import { Proboszcz } from "./subcomponents/duchowienstwo/proboszcz.jsx";
import { Proboszczowie } from "./subcomponents/duchowienstwo/proboszczowie";
import { Wikary } from "./subcomponents/duchowienstwo/wikary.jsx";
import { Powolania } from "./subcomponents/duchowienstwo/powolania.jsx";

import Ksiazki from "./subcomponents/wspolnoty/Ksiazki.jsx";
import MiejscaWSieci from "./subcomponents/wspolnoty/MiejscaWSieci.jsx";
import WspolnotyParafialne from "./subcomponents/wspolnoty/WspolnotyParafialne.jsx";

import Contactform from "./subcomponents/kontakt/contactForm";
import { Informacje } from "./subcomponents/kontakt/Informacje";

import OgloszeniaIntencje from "./subcomponents/ogloszenia/OgloszeniaIntencje";
import OgloszeniaAktualnosci from "./subcomponents/ogloszenia/OgloszeniaAktualnosci";

import HistoriaParafi from "./subcomponents/parafia/HistoriaParafi.jsx";
import { OPatronie } from "./subcomponents/parafia/OPatronie.jsx";
import { ParafiaObecnie } from "./subcomponents/parafia/ParafiaObecnie";
import { Miejsca } from "./subcomponents/parafia/Miejsca.jsx";

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
  inne: [
    ["Wspólnoty Parafialne", <WspolnotyParafialne key={1} />],
    ["Ksiazki", <Ksiazki key={2} />],
    ["Miejsca w sieci", <MiejscaWSieci key={3} />],
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
  ],
};

const createMainComponent = (subcomponentsList, header) => {
  return <Main componentsList={subcomponentsList} header={header} />;
};

export const cmentarz = () =>
  createMainComponent(subComponents.cmentarz, "Cmentarz");

export const duchowienstwo = () =>
  createMainComponent(subComponents.duchowienstwo, "Duchowieństwo");

export const inne = () => createMainComponent(subComponents.inne, "Wspólnoty");

export const kontakt = () =>
  createMainComponent(subComponents.kontakt, "Kontakt");

export const ogloszenia = () =>
  createMainComponent(subComponents.ogloszenia, "Ogłoszenia");

export const parafia = () =>
  createMainComponent(subComponents.parafia, "Parafia");
