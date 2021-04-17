import React from "react";

import Main from "./MainComponent";

import {
  CmentarzInfo,
  Kaplica,
  Pogrzeby,
} from "./subcomponents/cmentarzSubcomponents";

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

const cmentarzSubcomponents = [
  ["Cmentarz", <CmentarzInfo key={1} />],
  ["Kaplica", <Kaplica key={2} />],
  ["Pogrzeby", <Pogrzeby key={3} />],
];

const duchowienstwoSubcomponents = [
  ["Proboszcz", <Proboszcz key={1} />],
  ["Wikary", <Wikary key={2} />],
  ["Proboszczowie", <Proboszczowie key={3} />],
  ["Powolania", <Powolania key={4} />],
];

const inneSubcomponents = [
  ["Wspólnoty Parafialne", <WspolnotyParafialne key={1} />],
  ["Ksiazki", <Ksiazki key={2} />],
  ["Miejsca w sieci", <MiejscaWSieci key={3} />],
];

const kontaktSubcomponents = [
  ["Dane Kontaktowe", <Informacje key={1} />],
  ["Formularz", <Contactform key={2} />],
];

const ogloszeniaSubcomponents = [
  ["Aktualnosci", <OgloszeniaAktualnosci key={1} />],
  ["Intencje", <OgloszeniaIntencje key={2} />],
];

const parafiaSubcomponents = [
  ["Historia Parafi", <HistoriaParafi key={1} />],
  ["O Patronie", <OPatronie key={2} />],
  ["Miejsca", <Miejsca key={3} />],
  ["Parafia Obecnie", <ParafiaObecnie key={4} />],
];

const createMainComponent = (subcomponentsList, header) => {
  return <Main componentsList={subcomponentsList} header={header} />;
};

export const cmentarz = () =>
  createMainComponent(cmentarzSubcomponents, "Cmentarz");

export const duchowienstwo = () =>
  createMainComponent(duchowienstwoSubcomponents, "Duchowieństwo");

export const inne = () => createMainComponent(inneSubcomponents, "Wspólnoty");

export const kontakt = () =>
  createMainComponent(kontaktSubcomponents, "Kontakt");

export const ogloszenia = () =>
  createMainComponent(ogloszeniaSubcomponents, "Ogłoszenia");

export const parafia = () =>
  createMainComponent(parafiaSubcomponents, "Parafia");
