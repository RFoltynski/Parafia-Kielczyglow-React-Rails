import {
  Cmentarz,
  Kaplica,
  Pogrzeby,
} from "./subcomponents/cmentarzSubcomponents";
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

export const parafia = () => createRootComponent("parafia", "Parafia");
