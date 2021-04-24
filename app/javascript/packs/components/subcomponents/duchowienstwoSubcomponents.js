import MainSubcomponent from "./mainSubcomponent";
import React from "react";
const MAIN = "duchowienstwo";

export const Powolania = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"powolania"}
      header={"Powołania"}
    />
  );
};

export const Proboszcz = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"proboszcz"}
      header={"Obecny Proboszcz"}
    />
  );
};

export const Proboszczowie = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"proboszczowie"}
      header={"Byli Proboszczowie"}
    />
  );
};

export const Wikary = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"wikariusz"}
      header={"Obecny Wikariusz"}
    />
  );
};
