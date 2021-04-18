import { Basic, ManyImages } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";

export const Miejsca = () => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Miejsca w parafi"}
    />
  );
};
