import Janson from "./../../img/ksieza/Józef_Janson.JPG";
import Kruk from "./../../img/ksieza/Wincenty_Kruk.JPG";
import Polak from "./../../img/ksieza/Edward_Polak.JPG";
import Turbanski from "./../../img/ksieza/Antonii_Turbanski.JPG";
import Wrobel from "./../../img/ksieza/Antoni_Wrobel.JPG";

import { Basic, ManyImages } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";

export const Proboszczowie = () => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Byli Proboszczowie"}
    />
  );
};
