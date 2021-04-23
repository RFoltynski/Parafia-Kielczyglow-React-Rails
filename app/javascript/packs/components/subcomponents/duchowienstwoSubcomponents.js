import MainSubcomponent from "./mainSubcomponent";
import React from "react";

export const Powolania = () => {
  return (
    <MainSubcomponent reducerProperty={"powolania"} header={"Powołania"} />
  );
};

export const Proboszcz = () => {
  return (
    <MainSubcomponent
      reducerProperty={"proboszcz"}
      header={"Obecny Proboszcz"}
    />
  );
};

export const Proboszczowie = () => {
  return (
    <MainSubcomponent
      reducerProperty={"proboszczowie"}
      header={"Byli Proboszczowie"}
    />
  );
};

export const Wikary = () => {
  return (
    <MainSubcomponent
      reducerProperty={"wikariusz"}
      header={"Obecny Wikariusz"}
    />
  );
};
