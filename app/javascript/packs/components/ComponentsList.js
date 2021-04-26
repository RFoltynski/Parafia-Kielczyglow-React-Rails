import Contactform from "./subcomponents/kontakt/contactForm";
import { DaneKontaktowe } from "./subcomponents/kontakt/DaneKontaktowe";
import OgloszeniaAktualnosci from "./subcomponents/ogloszenia/OgloszeniaAktualnosci";
import OgloszeniaIntencje from "./subcomponents/ogloszenia/OgloszeniaIntencje";
import React from "react";
import RootComponent from "./RootComponent";

const subComponents = {
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

export const cmentarz = () => createRootComponent("cmentarz", "Cmentarz");

export const duchowienstwo = () =>
  createRootComponent("duchowienstwo", "Duchowieństwo");

export const informacje = () => createRootComponent("informacje", "Informacje");

export const kontakt = () => createRootComponent("kontakt", "Kontakt");

export const ogloszenia = () =>
  createRootComponent(subComponents.ogloszenia, "Ogłoszenia");

export const parafia = () => createRootComponent("parafia", "Parafia");
