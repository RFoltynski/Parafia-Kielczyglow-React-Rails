import { Basic, ManyImages } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";

export const Wikary = () => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Obecny Wikariusz"}
    />
  );
};
