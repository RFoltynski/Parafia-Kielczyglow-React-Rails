import { Basic, ManyImages } from "./../../elements/contentLayouts";
import MainSubcomponent from "./../mainSubcomponent";
import React from "react";

export const ParafiaObecnie = () => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Parafia Obecnie"}
    />
  );
};
