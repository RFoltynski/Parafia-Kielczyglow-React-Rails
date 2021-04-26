import {
  Cmentarz,
  Kaplica,
  Pogrzeby,
} from "./subcomponents/cmentarzSubcomponents";
import {
  HistoriaParafi,
  Miejsca,
  OPatronie,
  ParafiaObecnie,
  WspolnotyParafialne,
} from "./subcomponents/parafiaSubcomponents";
import {
  Nabozenstwa,
  Sakramenty,
} from "./subcomponents/informacjeSubcomponents";

import Contactform from "./subcomponents/kontakt/contactForm";
import { DaneKontaktowe } from "./subcomponents/kontakt/DaneKontaktowe";
import OgloszeniaAktualnosci from "./subcomponents/ogloszenia/OgloszeniaAktualnosci";
import OgloszeniaIntencje from "./subcomponents/ogloszenia/OgloszeniaIntencje";
import React from "react";
import RootComponent from "./RootComponent";

const subComponents = {
  cmentarz: [
    ["Cmentarz", <Cmentarz />],
    ["Kaplica", <Kaplica />],
    ["Pogrzeby", <Pogrzeby />],
  ],
  informacje: [
    ["Nabożeństwa", <Nabozenstwa key={2} />],
    ["Sakramenty", <Sakramenty key={3} />],
  ],
  kontakt: [
    ["Dane Kontaktowe", <DaneKontaktowe key={1} />],
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

const createRootComponent = (subcomponentsList, header) => {
  return <RootComponent componentsList={subcomponentsList} header={header} />;
};

export const cmentarz = () =>
  createRootComponent(subComponents.cmentarz, "Cmentarz");

export const duchowienstwo = () =>
  createRootComponent("duchowienstwo", "Duchowieństwo");

export const informacje = () =>
  createRootComponent(subComponents.informacje, "Informacje");

export const kontakt = () =>
  createRootComponent(subComponents.kontakt, "Kontakt");

export const ogloszenia = () =>
  createRootComponent(subComponents.ogloszenia, "Ogłoszenia");

export const parafia = () =>
  createRootComponent(subComponents.parafia, "Parafia");
