import MainSubcomponent from "./mainSubcomponent";
import React from "react";

const MAIN = "informacje";

export const Nabozenstwa = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"nabozenstwa"}
      header={"Nabożeństwa"}
      key={1}
    />
  );
};

export const Sakramenty = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"sakramenty"}
      header={"Sakramenty"}
      key={2}
    />
  );
};
