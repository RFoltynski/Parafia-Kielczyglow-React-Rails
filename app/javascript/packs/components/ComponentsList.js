import React from "react";
import RootComponent from "./RootComponent";

const createRootComponent = (subcomponentsList, header) => {
  return <RootComponent componentsList={subcomponentsList} header={header} />;
};

export const cmentarz = () => createRootComponent("cmentarz", "Cmentarz");

export const duchowienstwo = () =>
  createRootComponent("duchowienstwo", "Duchowieństwo");

export const informacje = () => createRootComponent("informacje", "Informacje");

export const kontakt = () => createRootComponent("kontakt", "Kontakt");

export const ogloszenia = () => createRootComponent("ogloszenia", "Ogłoszenia");

export const parafia = () => createRootComponent("parafia", "Parafia");
