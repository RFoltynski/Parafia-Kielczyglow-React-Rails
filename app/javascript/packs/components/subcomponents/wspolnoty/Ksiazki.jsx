import React from "react";
import MainSubcomponent from "./../mainSubcomponent";

export const Ksiazki = (props) => {
  const subcomponentsContent = [];
  return <MainSubcomponent layouts={subcomponentsContent} header={"Książki"} />;
};

export default Ksiazki;
