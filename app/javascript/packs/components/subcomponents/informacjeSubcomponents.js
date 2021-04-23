import MainSubcomponent from "./mainSubcomponent";
import React from "react";

export const Nabozenstwa = () => {
  return (
    <MainSubcomponent reducerProperty={"nabozenstwa"} header={"Nabożeństwa"} />
  );
};

export const Sakramenty = () => {
  return (
    <MainSubcomponent reducerProperty={"sakramenty"} header={"Sakramenty"} />
  );
};
