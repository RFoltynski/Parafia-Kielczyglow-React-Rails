import React from "react";
import MainSubcomponent from "../mainSubcomponent";

export const Informacje = (props) => {
  const subcomponentsContent = [];
  return (
    <MainSubcomponent
      layouts={subcomponentsContent}
      header={"Informacje Kontaktowe"}
    />
  );
};
