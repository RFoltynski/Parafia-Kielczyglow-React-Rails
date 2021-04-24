import MainSubcomponent from "./mainSubcomponent";
import React from "react";
const MAIN = "duchowienstwo";

export const Powolania = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"powolania"}
      header={"Powołania"}
      key={1}
    />
  );
};

export const Proboszcz = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"proboszcz"}
      header={"Obecny Proboszcz"}
      key={2}
    />
  );
};

export const Proboszczowie = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"proboszczowie"}
      header={"Byli Proboszczowie"}
      key={3}
    />
  );
};

export const Wikary = () => {
  return (
    <MainSubcomponent
      main={MAIN}
      reducerProperty={"wikariusz"}
      header={"Obecny Wikariusz"}
      key={4}
    />
  );
};
